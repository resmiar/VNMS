﻿function SelectFirstNodeForMapping(NodeIP)
{  //Clicks at point (39, 14) of the 'CmbNodeName' object.
  Aliases.VNMS.MappingView.MappingScreen.BusyIndicator.CmbNodeName.Click(39, 14);
  //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
  Aliases.VNMS.//MappingView.MappingScreen.BusyIndicator.CmbNodeName.IPSelection.Click();
  //Selects the 2 item of the 'CmbNodeName' combo box.
  //Aliases.VNMS.MappingView.MappingScreen.BusyIndicator.CmbNodeName.ClickItem(2);
  //Aliases.VNMS.MappingView.MappingScreen.BusyIndicator.CmbNodeName.findChild("Exists", "True", 1000, true).ClickItem();
  Aliases.VNMS.MappingView.MappingScreen.BusyIndicator.CmbNodeName.IPSelection.Click(39, 14);
  }