# Workflow de CI pendiente de activar

El token de `gh` usado para abrir este PR no tiene el permiso `workflow`, y GitHub no permite que
lo cree. Para activarlo (desde la raíz del repo, en la rama del PR):

```bash
gh auth refresh -h github.com -s workflow
mkdir -p .github/workflows && git mv docs/github-actions/ci.yml .github/workflows/ci.yml
git commit -m "ci: activar workflow de lint, typecheck, unit, build y e2e" && git push
```
