#!/bin/bash

# Helper functions for Discord notifications from GitHub Actions

send_discord_message() {
  local webhook_url="$1"
  local content="$2"
  local title="$3"
  local color="$4"
  local status="$5"

  if [ -z "$webhook_url" ]; then
    echo "Discord Webhook URL is missing. Skipping notification."
    return 0
  fi

  # Default color to Blue (3447003) if not provided
  [ -z "$color" ] && color=3447003

  # Construct JSON payload
  json_payload=$(cat <<EOF
{
  "embeds": [
    {
      "title": "${title}",
      "description": "${content}",
      "color": ${color},
      "fields": [
        {
          "name": "Status",
          "value": "${status}",
          "inline": true
        },
        {
          "name": "Workflow",
          "value": "${GITHUB_WORKFLOW}",
          "inline": true
        }
      ],
      "footer": {
        "text": "BMAD Module Automation"
      },
      "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
    }
  ]
}
EOF
)

  # Send to Discord
  curl -H "Content-Type: application/json" -X POST -d "$json_payload" "$webhook_url"
}

# Export functions for use in other scripts
export -f send_discord_message
