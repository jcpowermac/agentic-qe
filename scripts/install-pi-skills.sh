#!/bin/sh
set -eu

repo='jcpowermac/agentic-qe'
ref='feat/pi-aqe-skills'
agent_dir=${PI_CODING_AGENT_DIR:-"$HOME/.pi/agent"}
tmp=$(mktemp -d "${TMPDIR:-/tmp}/aqe-pi-skills.XXXXXX")
old=''
dest="$agent_dir/skills/agentic-qe-pi-fleet"
stage="$tmp/agentic-qe-pi-fleet"

cleanup() {
  if [ -n "$old" ] && [ -d "$old" ] && [ ! -e "$dest" ]; then
    mkdir -p "$(dirname "$dest")"
    mv "$old" "$dest"
  fi
  rm -rf "$tmp"
}
trap cleanup EXIT HUP INT TERM

archive="$tmp/source.tar.gz"
extract="$tmp/source"
mkdir -p "$extract"
curl -fsSL "https://codeload.github.com/$repo/tar.gz/refs/heads/$ref" -o "$archive"
tar -xzf "$archive" -C "$extract"
repo_dir=$(find "$extract" -mindepth 1 -maxdepth 1 -type d -print -quit)
source="$repo_dir/plugins/agentic-qe-fleet/pi-skills"
[ -d "$source/skills" ] && [ -d "$source/references" ] || {
  echo "Pi skill assets not found in $repo@$ref" >&2
  exit 1
}

mkdir -p "$stage"
cp -R "$source/skills" "$source/references" "$stage/"
cp "$source/README.md" "$stage/README.md"
printf '%s\n' 'managed by scripts/install-pi-skills.sh' > "$stage/.aqe-pi-managed"

mkdir -p "$(dirname "$dest")"
if [ -e "$dest" ]; then
  [ -f "$dest/.aqe-pi-managed" ] || {
    echo "Refusing to overwrite unmanaged skills at $dest" >&2
    exit 1
  }
  old="$tmp/previous"
  mv "$dest" "$old"
fi
mv "$stage" "$dest"
old=''
printf 'Installed Pi QE skills from %s@%s to %s\nRestart Pi or run /reload to load them.\n' "$repo" "$ref" "$dest"
