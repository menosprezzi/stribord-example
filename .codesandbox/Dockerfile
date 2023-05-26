# CodeSandbox supports debian & ubuntu based images
FROM node:16-bullseye

# The project will be mounted in /workspace by default

# Every new shell will open inside the built container

# On top of this build, we install `zsh`, `git` and `docker` as additional
# Docker layers.

RUN corepack enable
RUN corepack prepare yarn@stable --activate