from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    project_name: str = "Harper Ledger API"
    api_v1_prefix: str = "/api"

    database_url: str = "postgresql+psycopg2://postgres:postgres@localhost:5432/bookkeeping"

    okta_issuer: str = ""
    okta_audience: str = "api://default"


settings = Settings()
