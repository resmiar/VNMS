function selectNode(NodeIP)
{
  //finds the node with the given IP and simulates a right-click on that
  //Aliases.VNMS.NetworkLayoutGraphical.NetworkLayoutGraphicalView.NetworkLayoutGraphicalViewItemsControl.findChild("WPFControlText", NodeIP, 1000, true).clickR();
  Aliases.VNMS.NetworkLayoutGraphical.NetworkLayoutGraphicalView.NetworkLayoutGraphicalViewItemsControl.findChild("WPFControlText", NodeIP, 1000, true).dblClick();
   } 
  

