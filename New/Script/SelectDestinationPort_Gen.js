﻿function SelectDestinationPort(SlotNum, PortID)
{
  var ShelfType, PortNum;
  
  ShelfType = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.Border.Grid.StackPanel.CmbNodeName.DataContext.DestinationNode.HwType;
    
  if(ShelfType == 3500)
  {
  PropertyNames = new Array("ClrFullClassName", "WPFControlOrdinalNo");
  PropertyValues = new Array("System.Windows.Controls.StackPanel",PortID);
   
   if (SlotNum == 1) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500.Grid.Border.Grid.Grid.Slot1.FindChild(PropertyNames, PropertyValues, 6, true).Click();
    }
    if (SlotNum == 2) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500.Grid.Border.Grid.Grid.Slot2.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 3) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500.Grid.Border.Grid.Grid.Slot3.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 4) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500.Grid.Border.Grid.Grid.Slot4.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 5) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500.Grid.Border.Grid.Grid.Slot5.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 6) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500.Grid.Border.Grid.Grid.Slot6.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 7) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500.Grid.Border.Grid.Grid.Slot7.FindChild(PropertyNames, PropertyValues, 6).Click();
    }  
  }
  if(ShelfType == "3500M")
  {
   
  PropertyNames = new Array("ClrFullClassName", "WPFControlOrdinalNo");
  PropertyValues = new Array("System.Windows.Controls.StackPanel",PortID);
  
   if (SlotNum == 1) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500M.Grid.Border.Grid.Border.Grid.Slot1.FindChild(PropertyNames, PropertyValues, 6, true).Click();
    }
    if (SlotNum == 2) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500M.Grid.Border.Grid.Border.Grid.Slot2.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 3) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500M.Grid.Border.Grid.Border.Grid.Slot3.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 4) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500M.Grid.Border.Grid.Border.Grid.Slot4.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 5) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500M.Grid.Border.Grid.Border.Grid.Slot5.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 6) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500M.Grid.Border.Grid.Border.Grid.Slot6.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
    if (SlotNum == 7) 
    {Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.SecondNode.Viewbox.SecondNodeView.MappingNode3500M.Grid.Border.Grid.Border.Grid.Slot7.FindChild(PropertyNames, PropertyValues, 6).Click();
    }
  } 
}