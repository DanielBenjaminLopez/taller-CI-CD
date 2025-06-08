# Taller de Integración Continua
### Despliegue: https://danielbenjaminlopez.github.io/taller-CI-CD/
# 
![{8283275A-25C6-4C33-B37C-323A699AC5BF}](https://github.com/user-attachments/assets/7caf9b81-774d-4287-af92-028d00302c36)


## Commit Message Format

### Pattern

```
<modifier>: <description> (#<user-story-id>)
    ↑           ↑         ↑
 Action    What you did  User Story ID
```
### Supported Modifiers

| Modifier | Taiga Action | Description |
|----------|-------------|-------------|
| `feat`, `feature`, `add`, `implement` | **Move to WIP** | Start working on a new feature |
| `fix`, `bugfix`, `patch`, `hotfix` | **Move to WIP** | Start fixing a bug |
| `done`, `complete`, `finish`, `resolve` | **Move to Done** | Mark User Story as completed |
| `delete`, `remove`, `cancel`, `drop` | **Delete User Story** | Remove User Story from project |
| `wip`, `progress`, `start`, `begin` | **Move to WIP** | Explicitly move to work in progress |

### Examples with Results
```bash
# Feature development → WIP
feat: add user authentication system (#123)
feature: implement OAuth2 integration (#456)

# Bug fixes → WIP
fix: resolve login timeout issue (#789)
hotfix: patch critical security vulnerability (#101)

# User Story completion → Done
done: complete user profile feature (#234)
finish: finalize payment integration (#567)
```
