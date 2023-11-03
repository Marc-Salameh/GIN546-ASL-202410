<?xml version="1.0" encoding="UTF-8" ?>
<Package name="LearnCommonSigns" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="." xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="animations/happy" xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="sad" xar="behavior.xar" />
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
        <File name="hi" src="html/hi.jpg" />
        <File name="learning" src="html/learning.png" />
        <File name="options1" src="html/options1.txt" />
        <File name="options2" src="html/options2.html" />
        <File name="aslToEnglish" src="html/aslToEnglish.png" />
        <File name="communication" src="html/communication.png" />
        <File name="game" src="html/game.jpg" />
    </Resources>
    <Topics>
        <Topic name="ExampleDialog_enu" src="behavior_1/ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
        <Topic name="learnAlphabet_enu" src="learnAlphabet/learnAlphabet_enu.top" topicName="learnAlphabet" language="en_US" />
        <Topic name="ExampleDialog_enu" src="ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
        <Topic name="intro_enu" src="intro/intro_enu.top" topicName="introduction" language="en_US" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
</Package>
