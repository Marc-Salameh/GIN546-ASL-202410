<?xml version="1.0" encoding="UTF-8" ?>
<Package name="letterReco" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="ExampleDialog" src="behavior_1/ExampleDialog/ExampleDialog.dlg" />
        <Dialog name="imagelabel" src="imagelabel/imagelabel.dlg" />
    </Dialogs>
    <Resources>
        <File name="epicsax" src="behavior_1/epicsax.ogg" />
        <File name="swiftswords_ext" src="behavior_1/swiftswords_ext.mp3" />
        <File name="A" src="html/A.jpg" />
        <File name="B" src="html/B.jpg" />
        <File name="C" src="html/C.jpg" />
        <File name="D" src="html/D.jpg" />
        <File name="E" src="html/E.jpg" />
        <File name="F" src="html/F.jpg" />
        <File name="G" src="html/G.jpg" />
    </Resources>
    <Topics>
        <Topic name="ExampleDialog_enu" src="behavior_1/ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
        <Topic name="imagelabel_enu" src="imagelabel/imagelabel_enu.top" topicName="imagelabel" language="en_US" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
</Package>
