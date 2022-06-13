## Git

- precommit で commit できないとき

&rarr; `git commit --no-verify`

1. 一時保存：`git stash save`
1. 元に戻す：`git stash apply stash@{0}`
1. 削除：`git stash drop stash@{0}`
1. 全消し：`git stash clear`

- 過去に戻す：`git cherry-pick --abort`
- コミット戻す：`git reset --hard`
