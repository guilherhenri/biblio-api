# Contributing to Biblio API

Thank you for your interest in contributing to the Biblio API project! This guide outlines the standards and processes to ensure a smooth and consistent contribution experience.

## Table of Contents
- [Commit Standards](#commit-standards)
- [Development Setup](#development-setup)
- [Pull Request Guidelines](#pull-request-guidelines)
- [GitHub Actions](#github-actions)
- [Code Quality](#code-quality)

## Commit Standards

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to ensure clear and consistent commit messages. These standards are enforced by [commitlint](https://commitlint.js.org/#/) and validated via a `commit-msg` hook managed by [husky](https://typicode.github.io/husky/).

### Commit Message Format
```
<type>(<scope>): <short description>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- **Type**: Indicates the nature of the change. Allowed types are:
  - `feat`: New feature
  - `fix`: Bug fix
  - `docs`: Documentation changes
  - `style`: Code style changes (formatting, whitespace)
  - `refactor`: Code refactoring without feature or bug changes
  - `test`: Adding or updating tests
  - `chore`: Maintenance tasks (e.g., dependency updates)
  - `build`: Build system or external dependencies
  - `ci`: Continuous integration changes
  - `perf`: Performance improvements
- **Scope**: A lowercase identifier for the affected module or component (e.g., `auth`, `api`, `db`).
- **Short Description**: A concise summary in lowercase, max 50 characters.
- **Body** (optional): Detailed explanation of the change, using bullet points for clarity.
- **Footer** (optional): References to issues or breaking changes (e.g., `Closes #123`).

### Example
```
feat(auth): implement OAuth login

- Add OAuth2 provider integration
- Update user model for token storage
- Add tests for login flow

Closes #123
```

### Rules
- The scope must be lowercase (`scope-case` rule).
- The description must be lowercase (`subject-case` rule).
- The description must not exceed 50 characters (`subject-max-length` rule).

Commits are validated automatically by `commitlint` during the `git commit` process. Ensure your messages comply to avoid hook failures.

## Development Setup

To contribute, set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/biblio-api.git
   cd biblio-api
   ```

2. **Install dependencies**:
   We use `pnpm` (v10.10.0) as the package manager.
   ```bash
   pnpm install
   ```

3. **Set up Git hooks**:
   Install [husky](https://typicode.github.io/husky/) to enable pre-commit and commit-msg hooks.
   ```bash
   pnpm prepare
   ```

4. **Verify tools**:
   Ensure Node.js (v22.12.0 or compatible) and pnpm are installed. Run:
   ```bash
   node --version
   pnpm --version
   ```

## Pull Request Guidelines

1. **Fork and branch**:
   - Fork the repository and create a feature branch from `main` or `develop`.
   - Use descriptive branch names (e.g., `feat/oauth-login`, `fix/bug-123`).

2. **Write clear commits**:
   Follow the [Commit Standards](#commit-standards).

3. **Run linting and tests**:
   Before committing, ensure code quality with:
   ```bash
   pnpm lint-staged
   ```
   This runs `prettier` and `eslint` on staged TypeScript files.

4. **Submit a pull request**:
   - Open a PR against the `main` or `develop` branch.
   - Include a clear title and description, linking to any related issues.
   - Ensure all commits pass the `commitlint` check enforced by the GitHub Action.

5. **Address feedback**:
   Respond to reviewer comments and update your PR as needed.

## GitHub Actions

We use GitHub Actions to enforce commit message standards on pull requests. The `Lint Commits` workflow (`.github/workflows/commitlint.yml`) runs `commitlint` to validate commits in PRs targeting `main` or `develop`.

### Workflow Details
- **Trigger**: Pull requests to `main` or `develop`.
- **Steps**:
  - Checks out the repository with full history.
  - Sets up Node.js (v22) and pnpm (v10.10.0).
  - Installs dependencies with `pnpm install --frozen-lockfile`.
  - Runs `pnpm commitlint` to validate commits in the PR.

If the workflow fails, check the Actions tab in GitHub for details and ensure your commit messages comply with the [Commit Standards](#commit-standards).

## Code Quality

We maintain high code quality using:
- **Prettier**: For consistent code formatting.
- **ESLint**: For TypeScript linting and error detection.
- **lint-staged**: Runs `prettier` and `eslint` on staged files during pre-commit.

To manually lint your code:
```bash
pnpm lint-staged
```

Ensure all linting issues are resolved before submitting a pull request.

---

Thank you for contributing to Biblio API! If you have questions, feel free to open an issue or reach out in the repository discussions.