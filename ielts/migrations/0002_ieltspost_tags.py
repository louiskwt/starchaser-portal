# Generated by Django 4.2.7 on 2023-12-14 13:28

from django.db import migrations
import taggit.managers


class Migration(migrations.Migration):

    dependencies = [
        (
            "taggit",
            "0006_rename_taggeditem_content_type_object_id_taggit_tagg_content_8fc721_idx",
        ),
        ("ielts", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="ieltspost",
            name="tags",
            field=taggit.managers.TaggableManager(
                help_text="A comma-separated list of tags.",
                through="taggit.TaggedItem",
                to="taggit.Tag",
                verbose_name="Tags",
            ),
        ),
    ]
