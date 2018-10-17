# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.

######success####

from __future__ import unicode_literals

from django.db import models


class Attachments(models.Model):
    id = models.IntegerField(primary_key=True,blank=True)
    lvr = models.IntegerField()
    gi = models.TextField(blank=True, null=True)
    syncoperation = models.IntegerField(db_column='SyncOperation')  # Field name made lowercase.
    remoteid = models.TextField(db_column='RemoteID', blank=True, null=True)  # Field name made lowercase.
    remoteversion = models.TextField(db_column='RemoteVersion', blank=True, null=True)  # Field name made lowercase.
    noteid = models.IntegerField(db_column='NoteID')  # Field name made lowercase.
    name = models.TextField(db_column='Name', blank=True, null=True)  # Field name made lowercase.
    type = models.IntegerField(db_column='Type', blank=True, null=True)  # Field name made lowercase.
    size = models.TextField(db_column='Size', blank=True, null=True)  # Field name made lowercase.
    url = models.TextField(db_column='Url', blank=True, null=True)  # Field name made lowercase.
    checksum = models.TextField(db_column='Checksum', blank=True, null=True)  # Field name made lowercase.
    localsource = models.TextField(db_column='LocalSource', blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.IntegerField(db_column='IsDeleted', blank=True, null=True)  # Field name made lowercase.
    isdataready = models.IntegerField(db_column='IsDataReady', blank=True, null=True)  # Field name made lowercase.
    isdatachanged = models.IntegerField(db_column='IsDataChanged', blank=True, null=True)  # Field name made lowercase.
    createdtime = models.IntegerField(db_column='CreatedTime', blank=True, null=True)  # Field name made lowercase.
    updatedtime = models.IntegerField(db_column='UpdatedTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Attachments'


class Categories(models.Model):
    id = models.IntegerField(primary_key=True,blank=True)
    lvr = models.IntegerField()
    gi = models.TextField(blank=True, null=True)
    syncoperation = models.IntegerField(db_column='SyncOperation')  # Field name made lowercase.
    remoteid = models.TextField(db_column='RemoteID', blank=True, null=True)  # Field name made lowercase.
    remoteversion = models.TextField(db_column='RemoteVersion', blank=True, null=True)  # Field name made lowercase.
    parentid = models.IntegerField(db_column='ParentID')  # Field name made lowercase.
    name = models.TextField(db_column='Name', blank=True, null=True)  # Field name made lowercase.
    accesslevel = models.IntegerField(db_column='AccessLevel', blank=True, null=True)  # Field name made lowercase.
    type = models.IntegerField(db_column='Type', blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.IntegerField(db_column='IsDeleted', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Categories'


class Notes(models.Model):
    id = models.IntegerField(primary_key=True,blank=True)
    lvr = models.IntegerField()
    gi = models.TextField(blank=True, null=True)
    syncoperation = models.IntegerField(db_column='SyncOperation')  # Field name made lowercase.
    remoteid = models.TextField(db_column='RemoteID', blank=True, null=True)  # Field name made lowercase.
    remoteversion = models.TextField(db_column='RemoteVersion', blank=True, null=True)  # Field name made lowercase.
    categoryid = models.IntegerField(db_column='CategoryID')  # Field name made lowercase.
    name = models.TextField(db_column='Name', blank=True, null=True)  # Field name made lowercase.
    tags = models.TextField(db_column='Tags', blank=True, null=True)  # Field name made lowercase.
    sourceurl = models.TextField(db_column='SourceUrl', blank=True, null=True)  # Field name made lowercase.
    password = models.TextField(db_column='Password', blank=True, null=True)  # Field name made lowercase.
    passwordhint = models.TextField(db_column='PasswordHint', blank=True, null=True)  # Field name made lowercase.
    isstarred = models.IntegerField(db_column='IsStarred', blank=True, null=True)  # Field name made lowercase.
    isencrypted = models.IntegerField(db_column='IsEncrypted', blank=True, null=True)  # Field name made lowercase.
    isdeleted = models.IntegerField(db_column='IsDeleted', blank=True, null=True)  # Field name made lowercase.
    istemplate = models.IntegerField(db_column='IsTemplate', blank=True, null=True)  # Field name made lowercase.
    iscontentchanged = models.IntegerField(db_column='IsContentChanged', blank=True, null=True)  # Field name made lowercase.
    contentsummary = models.TextField(db_column='ContentSummary', blank=True, null=True)  # Field name made lowercase.
    contentsize = models.IntegerField(db_column='ContentSize', blank=True, null=True)  # Field name made lowercase.
    contenttypes = models.IntegerField(db_column='ContentTypes', blank=True, null=True)  # Field name made lowercase.
    contentchecksum = models.TextField(db_column='ContentChecksum', blank=True, null=True)  # Field name made lowercase.
    lastremotecontentchecksum = models.TextField(db_column='LastRemoteContentChecksum', blank=True, null=True)  # Field name made lowercase.
    haslocalurl = models.IntegerField(db_column='HasLocalUrl', blank=True, null=True)  # Field name made lowercase.
    generator = models.TextField(blank=True, null=True)
    createdtime = models.IntegerField(db_column='CreatedTime', blank=True, null=True)  # Field name made lowercase.
    updatedtime = models.IntegerField(db_column='UpdatedTime', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Notes'


class Settings(models.Model):
    key = models.TextField(db_column='Key', unique=True, blank=True, null=True)  # Field name made lowercase.
    value = models.TextField(db_column='Value', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Settings'


class Cmdat(models.Model):
    id = models.IntegerField(primary_key=True,blank=True)
    odat = models.IntegerField()
    oparam = models.IntegerField()
    edat = models.IntegerField()
    eparam = models.IntegerField()
    idat = models.IntegerField()
    sdat = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cmdat'


class Localurl(models.Model):
    id = models.IntegerField(primary_key=True,blank=True)
    localmd5 = models.TextField()
    url = models.TextField()
    objtype = models.IntegerField()
    objid = models.TextField()
    objlocalid = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'localurl'
