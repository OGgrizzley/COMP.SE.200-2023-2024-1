#!/bin/bash
nyc report --reporter=text-lcov | COVERALLS_REPO_TOKEN=$COVERALLS_REPO_TOKEN coveralls