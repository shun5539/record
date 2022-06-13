# プロジェクトをセット
project-set:
	gcloud config set project プロジェクト名
# プロジェクトなどの一覧
project-show:
	gcloud config list
# 作成した差分
plan:
	@make project-set
	terraform plan -var-file ./env/terraform.tfvars
# デプロイ
apply:
	@make project-set
	terraform apply -var-file ./env/terraform.tfvars
# 履歴などの削除
destroy:
	@make project-set
	terraform destroy -var-file ./env/terraform.tfvars