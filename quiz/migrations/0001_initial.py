# Generated by Django 4.2.7 on 2023-11-12 15:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Quiz",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=255)),
                ("content", models.TextField()),
                ("slug", models.SlugField()),
                ("source", models.TextField()),
                ("created_at", models.DateField(auto_now_add=True)),
            ],
            options={
                "ordering": ["-created_at"],
                "indexes": [
                    models.Index(
                        fields=["-created_at"], name="quiz_quiz_created_aa0813_idx"
                    )
                ],
            },
        ),
    ]
