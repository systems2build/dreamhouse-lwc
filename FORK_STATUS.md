# Fork Status And Safety Boundaries

**Classification:** Third-Party Salesforce Sample / Historical Reference  
**Upstream:** https://github.com/trailheadapps/dreamhouse-lwc  
**Original snapshot:** September 2022  
**Reviewed:** October 15, 2026

## Provenance

The codebase was forked from the Trailhead Apps Dreamhouse LWC sample and is not represented here as independently authored original work. Keep Apache 2.0 licensing and applicable upstream attribution. The package manifest now matches the root LICENSE.

## Workflow Isolation

Nine inherited GitHub Actions workflow YAML files were relocated from .github/workflows to .github/upstream-workflows without altering their contents. This prevents automatic issue comments, Dependabot auto-merge, Salesforce packaging dispatch, and unconfigured scratch-org jobs from being treated as active workflows in this fork.

The isolated original files reference trailheadapps-Ubuntu runner labels and possibly upstream-only DEVHUB_SFDX_URL, BOT_ACCESS_TOKEN, or assignee credentials. They are archival examples, not production deployment recipes. Do not restore or execute them until security, identity, API compatibility, package publishing, and ownership have been explicitly reviewed.

The only active proposed workflow is a dependency-free source metadata check with read-only repository permissions. That check does not validate runtime behavior or compile/deploy Salesforce metadata.

## Recommended Reuse Process

1. Pin a reviewed upstream version and independently scan dependencies and license notices.
2. Update SDK/CLI and GitHub Actions versions in an isolated branch.
3. Provision separate dev/test org access using approved identity and secrets management.
4. Run static checks, LWC unit tests, Apex tests, permissions tests, and scratch-org deployment checks.
5. Define explicit human approval before package publishing, promotion, or merge.

**No installation, deployment, package promotion, or GitHub repository settings change has been performed by this PR.**
