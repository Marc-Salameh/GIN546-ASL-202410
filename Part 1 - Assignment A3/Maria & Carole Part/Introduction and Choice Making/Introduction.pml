<?xml version="1.0" encoding="UTF-8" ?>
<Package name="Introduction" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="." xar="behavior.xar" />
        <BehaviorDescription name="behavior" src="animations/happy" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="intro" src="intro/intro.dlg" />
    </Dialogs>
    <Resources>
        <File name="" src=".gitattributes" />
        <File name="README" src="README.md" />
        <File name="hi" src="html/hi.jpg" />
        <File name="learning" src="html/learning.png" />
        <File name="options2" src="html/options2.html" />
        <File name="aslToEnglish" src="html/aslToEnglish.png" />
        <File name="communication" src="html/communication.png" />
        <File name="game" src="html/game.jpg" />
    </Resources>
    <Topics>
        <Topic name="intro_enu" src="intro/intro_enu.top" topicName="introduction" language="en_US" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
</Package>
