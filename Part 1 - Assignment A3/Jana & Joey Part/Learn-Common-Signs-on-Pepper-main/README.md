# Learn Common Signs on Pepper
 
- Group: ASL
- Subgroup: Joey BOU YOUNES and Jana EL HELOU


Pepper teaches some of the common signs in American Sign Language [hello bye cat dog please thanks] by listening to the user input and displaying its corresponding sign on the tablet while explaining how it is exactly signed. 
If the database of the mappings between English words and their signs is large enough, Pepper would act as a translator from English to ASL


Structure:
1. Set Language box: Pepper will understand and speak the selected language English
2. Dialog box: learnCommonSigns_enu.top holds the Qichat Dialog, it implements the following:
- different concepts defined at the beginning of the file
- different proposals tagged by the sign it is explaining and its relevant sign image
- ^enumerate for enumerating the different signs that Pepper can teach
- ^rand for random selection
- ^nextProposal, ^goToReactivate(tag) and ^sameProposal to jump to the next, specified tagged proposals and repeat the same proposal
- the use of pauses \pau=200\ and robot speech speed \RSPD=90\ for better articulation of speech
- ^start and ^wait for animations
- ^mode(disabled) and ^mode(contextual) for inhibiting Pepper from playing animations and for making Pepper play some animations relevant to the context
- listening to an event of not speaking for 20s and checking up on the user's presence
- listening to an event of not understanding the user's input and acting accordingly
3. Show Image box: for showing an image of the sign as per the user's request


  Video of the interaction with Pepper: https://youtu.be/yaB2gWdUMOo
  
