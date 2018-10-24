function SelectFirstNodeForMapping(NodeIP)
{
  var NumberOfNodes, ItemValue;
  NumberOfNodes = 0;
  ItemValue = 1;
  //Clicks at point (39, 14) of the 'CmbNodeName' object.
  Aliases.VNMS.MappingView.MappingScreen.BusyIndicator.CmbNodeName.Click(39, 14);
  NumberOfNodes = Aliases.VNMS.MappingView.MappingScreen.BusyIndicator.CmbNodeName.wItemCount;
  while(NumberOfNodes >= 1)
  {
    //Posts an information message to the test log.
    Log.Message("Inside while loop", "");
    if(Aliases.VNMS.MappingView.MappingScreen.BusyIndicator.CmbNodeName.DataContext.SelectedFirstNode.IpAddress == NodeIP)
    {
      //Selects the KeywordTests.SelectFirstNodeForMapping.Variables.ItemValue item of the 'CmbNodeName' combo box.
      Aliases.VNMS.MappingView.MappingScreen.BusyIndicator.CmbNodeName.ClickItem(ItemValue);
      //Posts an information message to the test log.
      Log.Message("Inside if clause", "");
    }
    ItemValue = KeywordTests.SelectFirstNodeForMapping.Variables.ItemValue + 1;
    NumberOfNodes = KeywordTests.SelectFirstNodeForMapping.Variables.NumberOfNodes - 1;
  }
}