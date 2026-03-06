#!/bin/bash

# Set your start date (how far back you want commits)
START_DATE="2025-10-01"  # Updated to a more recent start date

# Array of realistic commit messages
messages=(
  "Update layout and fix spacing issues"
  "Improve navbar responsiveness"
  "Add hero section content"
  "Fix broken links in footer"
  "Refine color scheme and typography"
  "Add contact form structure"
  "Optimize images for faster load"
  "Fix mobile view alignment"
  "Update about section copy"
  "Add smooth scroll behavior"
  "Tweak button hover effects"
  "Clean up unused CSS classes"
  "Add meta tags for SEO"
  "Improve heading hierarchy"
  "Fix footer layout on small screens"
  "Add accessibility improvements"
  "Fix alignment issues in gallery"
  "Update README with project details"
  "Add favicon for the website"
  "Fix z-index issue in dropdown menu"
)

# Get today's date
today=$(date +%Y-%m-%d)

# Initialize the current date to the start date
current="$START_DATE"

# Loop through each day until today
while [[ "$current" < "$today" || "$current" == "$today" ]]; do
  # Pick a random commit message
  msg=${messages[$RANDOM % ${#messages[@]}]}

  # Make a small file change (append a comment with the current date)
  echo "<!-- Updated: $current -->" >> index.html

  # Stage the changes
  git add index.html

  # Commit with the chosen message and set the author/committer date
  GIT_AUTHOR_DATE="$current 12:00:00" GIT_COMMITTER_DATE="$current 12:00:00" git commit -m "$msg"

  # Move to the next day
  current=$(date -d "$current + 1 day" +%Y-%m-%d)
done