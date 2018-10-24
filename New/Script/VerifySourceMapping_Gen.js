function VerifySourcePort(SlotNum, PortID)
{
  var ShelfType, SlotObj,BorderObj,PortNum;
    
    
  ShelfType = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.Border.Grid.StackPanel.CmbNodeName.DataContext.SourceNode.HwType;
  
  if(ShelfType == 3500)
  {
  PropertyNames = new Array("ClrFullClassName", "WPFControlOrdinalNo");
  PropertyValues = new Array("System.Windows.Controls.StackPanel",PortID);
  
   if (SlotNum == 1) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot1.FindChild(PropertyNames, PropertyValues, 6, true);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 2) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot2.FindChild(PropertyNames, PropertyValues, 6);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 3) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot3.FindChild(PropertyNames, PropertyValues, 6);
      BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
      aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 4) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot4.FindChild(PropertyNames, PropertyValues, 8);
      BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
      aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 5) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot5.FindChild(PropertyNames, PropertyValues, 6);
      BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
      aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 6) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot6.FindChild(PropertyNames, PropertyValues, 6);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 7) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot7.FindChild(PropertyNames, PropertyValues, 6);
      BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
      aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
  }
  if(ShelfType == "3500M")
  {
    
    PropertyNames = new Array("ClrFullClassName", "WPFControlOrdinalNo");
    PropertyValues = new Array("System.Windows.Controls.StackPanel",PortID);
  
   if (SlotNum == 1) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot1.FindChild(PropertyNames, PropertyValues, 6, true);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 2) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot2.FindChild(PropertyNames, PropertyValues, 6);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 3) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot3.FindChild(PropertyNames, PropertyValues, 6);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 4) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot4.FindChild(PropertyNames, PropertyValues, 6);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 5) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot5.FindChild(PropertyNames, PropertyValues, 6);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 6) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot6.FindChild(PropertyNames, PropertyValues, 6);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    }
    if (SlotNum == 7) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot7.FindChild(PropertyNames, PropertyValues, 6);
     BorderObj = SlotObj.FindChild("ClrFullClassName","RFLFramework.Classes.MappingBorder",2);
     aqObject.CheckProperty(BorderObj.BorderBrush.Color, "G", cmpEqual, 0);
    } 
  
  } 
}