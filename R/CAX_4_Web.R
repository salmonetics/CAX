combineCAX <- function(f1,f2,f3){
  cax.adults <- read.csv(f1)
  cax.adults <- filter(cax.adults,POPID<500, RECOVERYDOMAIN!="Oregon Coast")
  #meta <- cax.adults[,78:94]
  meta <- select(cax.adults,POPFIT,POPFITNOTES,TRTMETHOD,CONTACTAGENCY,METHODNUMBER,PROTMETHNAME,PROTMETHURL,PROTMETHDOCUMENTATION,METHODADJUSTMENTS,COMMENTS,NULLRECORD,DATASTATUS,LASTUPDATED,INDICATORLOCATION,METRICLOCATION,MEASURELOCATION,CONTACTPERSONFIRST,CONTACTPERSONLAST,CONTACTPHONE,CONTACTEMAIL,METACOMMENTS,SUBMITAGENCY,LASTMODIFIEDDATE)
  meta1 <- unique(meta)
  meta1$METAID <- seq(1:nrow(meta1))
  #write.csv(meta1,"CAX_metadata2.csv",row.names=FALSE)
  write.csv(meta1,"CAX_metadata_03-13-2017.csv",row.names=FALSE)
  cax.adults <- merge(cax.adults,meta1)
  cax.adults <- select(cax.adults,POPID,SPAWNINGYEAR,NOSAIJ,NOSAEJ,NOBROODSTOCKREMOVED,PHOSIJ,PHOSEJ,NOSJF,HOSJF,TSAEJ,AGE2PROP,AGE3PROP,AGE4PROP,AGE5PROP,AGE6PROP,AGE7PROP,METAID)
  cax.adults$YEAR <- cax.adults$SPAWNINGYEAR
  cax.adults$SPAWNINGYEAR <- NULL
  #write.csv(cax.adults,"CAX_data.csv",row.names=FALSE)
  #cax.adults <- select(cax.adults,7,13,15,17,21,25,26,30,34,38,39,43,47,50,53,56,59,62)
  
  cax.juvs <- read.csv(f2)
  cax.juvs <- filter(cax.juvs,POPID<500, RECOVERYDOMAIN!="Oregon Coast")
  cax.pre <- read.csv(f3)
  cax.pre <- filter(cax.pre,POPID<500, RECOVERYDOMAIN!="Oregon Coast")
  
  cax.juvs <- select(cax.juvs,6,11,12,15,18,22,25,28,31,34)
  names(cax.juvs) <- c("POPID","JPOPFIT","JPOPFITNOTES","YEAR","JTOTALNATURAL","JAGE0PROP","JAGE1PROP","JAGE2PROP","JAGE3PROP","JAGE4PLUSPROP")
  cax.pre <- select(cax.pre,6,11,12,14,20,24,27,33)
  names(cax.pre) <- c("POPID","PPOPFIT","PPOPFITNOTES","YEAR","PABUNDANCE","PAGE0PROP","PAGE1PROP","PAGE2PROP")
  
  cax <- merge(cax.adults,cax.juvs,all=TRUE)
  cax <- merge(cax,cax.pre,all=TRUE)
  return(cax)
}


cax <- combineCAX("ca-data-all 03-13-2017_NOSA.csv","ca-data-all 03-13-2017_JuvOut.csv","ca-data-all 03-13-2017_PreSmolt.csv")
#cax <- combineCAX("ca-data-all 09-27-2016_NOSA.csv","ca-data-all 09-27-2016_JuvOut.csv","ca-data-all 09-27-2016_PreSmolt.csv")
write.csv(cax,"CAX_data1b.csv",row.names=FALSE)

#get only those with some juvenile data
hasjuvs <- unique(rbind(select(cax.juvs,POPID),select(cax.pre,POPID)))
cax.juvsonly <- merge(hasjuvs,cax)
cax.juvsonly <- filter(cax.juvsonly,YEAR>1984)
write.csv(cax.juvsonly,"CAX_data.juvs.csv",row.names=FALSE)

#include the NPT data
combineCAX_NPT <- function(f1,f2,f3,n1,n2){
  cax.adults <- read.csv(f1)
  cax.adults <- filter(cax.adults,POPID<500, RECOVERYDOMAIN!="Oregon Coast")
  npt.adults <- read.csv(n1)
  cax.adults <- unique(rbind(cax.adults,npt.adults))
  #meta <- cax.adults[,78:94]
  meta <- select(cax.adults,11,12,15,16,17,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,104)
  meta1 <- unique(meta)
  meta1$METAID <- seq(1:nrow(meta1))
  write.csv(meta1,"CAX_metadata2.csv",row.names=FALSE)
  cax.adults <- merge(cax.adults,meta1)
  cax.adults <- select(cax.adults,29,35,36,40,44,45,49,53,57,58,62,66,69,72,75,78,81,108)
  cax.adults$YEAR <- cax.adults$SPAWNINGYEAR
  cax.adults$SPAWNINGYEAR <- NULL
  #write.csv(cax.adults,"CAX_data.csv",row.names=FALSE)
  #cax.adults <- select(cax.adults,7,13,15,17,21,25,26,30,34,38,39,43,47,50,53,56,59,62)
  
  cax.juvs <- read.csv(f2)
  cax.juvs <- filter(cax.juvs,POPID<500, RECOVERYDOMAIN!="Oregon Coast")
  npt.juvs <- read.csv(n2)
  cax.juvs <- unique(rbind(cax.juvs,npt.juvs))
  cax.pre <- read.csv(f3)
  cax.pre <- filter(cax.pre,POPID<500, RECOVERYDOMAIN!="Oregon Coast")
  
  cax.juvs <- select(cax.juvs,6,11,12,15,18,22,25,28,31,34)
  names(cax.juvs) <- c("POPID","JPOPFIT","JPOPFITNOTES","YEAR","JTOTALNATURAL","JAGE0PROP","JAGE1PROP","JAGE2PROP","JAGE3PROP","JAGE4PLUSPROP")
  cax.pre <- select(cax.pre,6,11,12,14,20,24,27,33)
  names(cax.pre) <- c("POPID","PPOPFIT","PPOPFITNOTES","YEAR","PABUNDANCE","PAGE0PROP","PAGE1PROP","PAGE2PROP")
  
  cax <- merge(cax.adults,cax.juvs,all=TRUE)
  cax <- merge(cax,cax.pre,all=TRUE)
  return(cax)
}

cax <- combineCAX_NPT("ca-data-all 09-27-2016_NOSA.csv","ca-data-all 09-27-2016_JuvOut.csv","ca-data-all 09-27-2016_PreSmolt.csv","NPT_CAX_8_30_16_NOSA.csv","NPT_CAX_8_30_16_JuvOut.csv")

#redone for August data
combineCAX <- function(f1,f2,f3,metafile){
  cax.adults <- read.csv(f1)
  cax.adults <- filter(cax.adults,POPID<500, RECOVERYDOMAIN!="Oregon Coast")
  pop13 <- filter(cax.adults,POPID==13,SPAWNINGYEAR<=1997 | BESTVALUE=="Yes")
  pop45 <- filter(cax.adults,POPID==45,CONTACTAGENCY=="Washington Department of Fish and Wildlife")
  pop71 <- filter(cax.adults,POPID==71,CONTACTAGENCY=="Washington Department of Fish and Wildlife")
  pop105 <- filter(cax.adults,POPID==105,TRTMETHOD=="Yes")
  pop107 <- filter(cax.adults,POPID==107,CONTACTAGENCY=="Washington Department of Fish and Wildlife")
  pop240 <- filter(cax.adults,POPID==240,BESTVALUE=="Yes")
  pop241 <- filter(cax.adults,POPID==241,BESTVALUE=="Yes")
  pop288 <- filter(cax.adults,POPID==288,BESTVALUE=="Yes")
  pop302 <- filter(cax.adults,POPID==302,BESTVALUE=="Yes")
  
  cax.adults <- filter(cax.adults,POPID != 13)
  cax.adults <- filter(cax.adults,POPID != 45)
  cax.adults <- filter(cax.adults,POPID != 71)
  cax.adults <- filter(cax.adults,POPID != 105)
  cax.adults <- filter(cax.adults,POPID != 107)
  cax.adults <- filter(cax.adults,POPID != 240)
  cax.adults <- filter(cax.adults,POPID != 241)
  cax.adults <- filter(cax.adults,POPID != 288)
  cax.adults <- filter(cax.adults,POPID != 302)
  
  cax.adults <- rbind(cax.adults,pop13,pop45,pop71,pop105,pop107,pop240,pop241,pop288,pop302)
  #meta <- cax.adults[,78:94]
  meta <- select(cax.adults,POPFIT,POPFITNOTES,TRTMETHOD,CONTACTAGENCY,METHODNUMBER,PROTMETHNAME,PROTMETHURL,PROTMETHDOCUMENTATION,METHODADJUSTMENTS,COMMENTS,NULLRECORD,DATASTATUS,LASTUPDATED,INDICATORLOCATION,METRICLOCATION,MEASURELOCATION,CONTACTPERSONFIRST,CONTACTPERSONLAST,CONTACTPHONE,CONTACTEMAIL,METACOMMENTS,SUBMITAGENCY,LASTMODIFIEDDATE)
  meta1 <- unique(meta)
  meta1$METAID <- seq(1:nrow(meta1))
  write.csv(meta1,metafile,row.names=FALSE)
  cax.adults <- merge(cax.adults,meta1)
  cax.adults <- select(cax.adults,POPID,SPAWNINGYEAR,NOSAIJ,NOSAEJ,NOBROODSTOCKREMOVED,PHOSIJ,PHOSEJ,NOSJF,HOSJF,TSAEJ,AGE2PROP,AGE3PROP,AGE4PROP,AGE5PROP,AGE6PROP,AGE7PROP,METAID)
  cax.adults$YEAR <- cax.adults$SPAWNINGYEAR
  cax.adults$SPAWNINGYEAR <- NULL
  #write.csv(cax.adults,"CAX_data.csv",row.names=FALSE)
  #cax.adults <- select(cax.adults,7,13,15,17,21,25,26,30,34,38,39,43,47,50,53,56,59,62)
  
  cax.juvs <- read.csv(f2)
  cax.juvs <- filter(cax.juvs,POPID<500, RECOVERYDOMAIN!="Oregon Coast")
  juvs30 <- filter(cax.juvs,POPID==30,BESTVALUE=="Yes")
  juvs95 <- filter(cax.juvs,POPID==95,BESTVALUE=="Yes")
  cax.juvs <- filter(cax.juvs,POPID != 30)
  cax.juvs <- filter(cax.juvs,POPID != 95)
  cax.juvs <- rbind(cax.juvs,juvs30,juvs95)
  
  cax.pre <- read.csv(f3)
  cax.pre <- filter(cax.pre,POPID<500, RECOVERYDOMAIN!="Oregon Coast")
  cax.filter <- filter(cax.pre,POPID != 107)
  
  cax.juvs <- select(cax.juvs,POPID,POPFIT,POPFITNOTES,OUTMIGRATIONYEAR,TOTALNATURAL,AGE0PROP,AGE1PROP,AGE2PROP,AGE3PROP,AGE4PLUSPROP)
  names(cax.juvs) <- c("POPID","JPOPFIT","JPOPFITNOTES","YEAR","JTOTALNATURAL","JAGE0PROP","JAGE1PROP","JAGE2PROP","JAGE3PROP","JAGE4PLUSPROP")
  cax.pre <- select(cax.pre,POPID,POPFIT,POPFITNOTES,SURVEYYEAR,ABUNDANCE,AGE0PROP,AGE1PROP,AGE3PROP)
  names(cax.pre) <- c("POPID","PPOPFIT","PPOPFITNOTES","YEAR","PABUNDANCE","PAGE0PROP","PAGE1PROP","PAGE2PROP")
  
  cax <- merge(cax.adults,cax.juvs,all=TRUE)
  cax <- merge(cax,cax.pre,all=TRUE)
  return(cax)
}



cax <- combineCAX("ca-data-NOSA 07-26-2017.csv","ca-data-JuvOut 07-26-2017.csv","ca-data-PreSmolt 07-26-2017.csv","CAX_metadata_07-26-2017.csv")
write.csv(cax,"CAX_data_07-26-2017.csv",row.names=FALSE)

#Update on 9/6/2017
cax <- combineCAX("ca-data-all-test 08-28-2017 NOSA.csv","ca-data-all-test 08-28-2017 JuvOut.csv","ca-data-all-test 08-28-2017 PreSmolt.csv","CAX_metadata_08-28-2017.csv")
write.csv(cax,"CAX_data_08-28-2017.csv",row.names=FALSE)