<?xml version="1.0" encoding="UTF-8" ?>
<Package name="LearnCommonSigns" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="." xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="ExampleDialog" src="behavior_1/ExampleDialog/ExampleDialog.dlg" />
        <Dialog name="learnAlphabet" src="learnAlphabet/learnAlphabet.dlg" />
        <Dialog name="ExampleDialog" src="ExampleDialog/ExampleDialog.dlg" />
        <Dialog name="intro" src="intro/intro.dlg" />
    </Dialogs>
    <Resources>
        <File name="" src=".gitattributes" />
        <File name="README" src="README.md" />
        <File name="a" src="html/a.jpg" />
        <File name="b" src="html/b.jpg" />
        <File name="c" src="html/c.jpg" />
        <File name="d" src="html/d.jpg" />
        <File name="e" src="html/e.jpg" />
        <File name="f" src="html/f.jpg" />
        <File name="g" src="html/g.png" />
    </Resources>
    <Topics>
        <Topic name="ExampleDialog_enu" src="behavior_1/ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
        <Topic name="learnAlphabet_enu" src="learnAlphabet/learnAlphabet_enu.top" topicName="learnAlphabet" language="en_US" />
        <Topic name="ExampleDialog_enu" src="ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
        <Topic name="intro_enu" src="intro/intro_enu.top" topicName="intro" language="en_US" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
</Package>
