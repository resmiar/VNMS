function SelectSourcePort(SlotNum, PortID)
{
  var ShelfType, SlotObj,PortNum;
    
  ShelfType = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.Border.Grid.StackPanel.CmbNodeName.DataContext.SourceNode.HwType;
  
  if(ShelfType == 3500)
  {
   PropertyNames = new Array("ClrFullClassName", "WPFControlOrdinalNo");
   PropertyValues = new Array("System.Windows.Controls.StackPanel",PortID);
  
   if (SlotNum == 1) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot1.FindChild(PropertyNames, PropertyValues, 6, true);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 2) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot2.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 3) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot3.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 4) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot4.FindChild(PropertyNames, PropertyValues, 8);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 5) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot5.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 6) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot6.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 7) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot7.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
  }
  if(ShelfType == "3500M")
  {
    if (PortID == 1)PortNum = 3;
    if (PortID == 2)PortNum = 1;
    if (PortID == 3)PortNum = 4;
    if (PortID == 4)PortNum = 2;
    
   PropertyNames = new Array("ClrFullClassName", "WPFControlOrdinalNo");
   PropertyValues = new Array("System.Windows.Controls.StackPanel",PortNum);
   
   if (SlotNum == 1) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot1.FindChild(PropertyNames, PropertyValues, 6, true);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 2) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot2.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 3) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot3.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 4) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot4.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 5) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot5.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 6) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot6.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    }
    if (SlotNum == 7) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot7.FindChild(PropertyNames, PropertyValues, 6);
    SlotObj.ClickR();
    SlotObj.FindChild("ClrFullClassName","RFL.PortGrid",2).PopupMenu.Click("Map this port");
    } 
  
  } 
}