# Taller de Integración Continua
### Despliegue: https://danielbenjaminlopez.github.io/taller-CI-CD/
# 
![{F011E645-EB5D-4676-B7D1-9FD8219B3AF1}](https://github.com/user-attachments/assets/8fb6a5a7-e98d-45cd-bca4-04946ca79b27)


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
