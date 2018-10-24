function SelectSourcePort(SlotNum, PortID)
{
  var ShelfType, SlotObj,PortNum;
    
  ShelfType = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.Border.Grid.StackPanel.CmbNodeName.DataContext.SourceNode.HwType;
  
  if(ShelfType == 3500)
  {
   PropertyNames = new Array("ClrFullClassName", "WPFControlOrdinalNo");
   PropertyValues = new Array("System.Windows.Controls.StackPanel",PortID);
  
   if (SlotNum == 1) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot1;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 2) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot2;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    
    if (SlotNum == 3) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot3;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 4) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot4;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 5) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot5;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 6) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot6;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 7) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.SlotArea.Slot7;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
      }
    if (SlotNum == 8) 
    {Framer = Aliases.VNMS.MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500.Grid.Border.Grid.Border.Viewbox.WrapPanel.T1E13500.Grid.BdrT1E1;
    mappingBorder.T1E1Grid.BT1E1MappingGrid.ClickR();
    mappingBorder.PopupMenu.Click("Map entire T1/E1 port");
    }
  }
  if(ShelfType == "3500M")
  {
        
   PropertyNames = new Array("ClrFullClassName", "WPFControlOrdinalNo");
   PropertyValues = new Array("System.Windows.Controls.StackPanel",PortID);
   
   if (SlotNum == 1) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot1;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 2) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot2;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 3) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot3;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 4) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot4;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 5) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot5;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 6) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot6;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    }
    if (SlotNum == 7) 
    {SlotObj = Aliases.VNMS.HwndSource_MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border.SlotArea.Slot7;
    SlotObj.ClickR();
    SlotObj.FindChild("WPFControlName","T1E1Grid",5).PopupMenu.Click("Map entire T1/E1 port");
    } 
    if (SlotNum == 8) {
    border = Aliases.VNMS.MappingScreen.MappingScreen.BusyIndicator.Grid.ContentGrid.MappingScrollViewer.Grid.Grid.FirstNode.FirstNodeViewBox.FirstNodeView.MappingNode3500M.Grid.Border.Grid.Border2;
    border.BT1E1MappingGrid.ClickR();
    border.BdrT1E1.PopupMenu.Click("Map entire T1/E1 port");
    }
  } 
}