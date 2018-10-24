function CheckCardsInNodeView(CardType, SlotNumber)
{
  var ShelfType, SlotNumberValue, TimeoutValue;
  ShelfType = "";
  SlotNumberValue = 0;
  TimeoutValue = Options.Run.Timeout;
  Options.Run.Timeout = 5000;
  SlotNumberValue = SlotNumber;
  ShelfType = Aliases.VNMS.NodeView.DataContext.Node.HwType;
  Options.Run.Timeout = TimeoutValue;
  if(ShelfType == "3500M")
  {
    if(SlotNumberValue == 1)
    //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.ModularView.NodeView_3500M.Slot1 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.ModularView.NodeView_3500M.Border.Grid.Slot1.Grid.CardName, "Content", cmpEqual, CardType);
    if(SlotNumberValue == 2)
    {
  //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.ModularView.NodeView_3500M.Slot2 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.ModularView.NodeView_3500M.Border.Grid.Slot2.Grid.CardName, "Content", cmpEqual, CardType);
    }
    if(SlotNumberValue == 3)
    {
       //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.ModularView.NodeView_3500M.Slot3 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.ModularView.NodeView_3500M.Border.Grid.Slot3.Grid.CardName, "Content", cmpEqual, CardType);
    }
    if(SlotNumberValue == 4)
    {
       //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.ModularView.NodeView_3500M.Slot4 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.ModularView.NodeView_3500M.Border.Grid.Slot4.Grid.CardName, "Content", cmpEqual, CardType);
    }
    if(SlotNumberValue == 5)
    {
       //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.ModularView.NodeView_3500M.Slot5 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.ModularView.NodeView_3500M.Border.Grid.Slot5.Grid.CardName, "Content", cmpEqual, CardType);
    }
    if(SlotNumberValue == 6)
    {
       //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.ModularView.NodeView_3500M.Slot6 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.ModularView.NodeView_3500M.Border.Grid.Slot6.Grid.CardName, "Content", cmpEqual, CardType);
    }
    if(SlotNumberValue == 7)
    {
       //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.ModularView.NodeView_3500M.Slot7 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.ModularView.NodeView_3500M.Border.Grid.Slot7.Grid.CardName, "Content", cmpEqual, CardType);
    }
    if(SlotNumberValue == 8)
    {
       //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.ModularView.NodeView_3500M.BdrT1E1 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.Viewbox.BdrT1E1.Rectangle, "Enabled", cmpEqual, true);
    }
  }
  if(ShelfType == "3500")
  {
    if(SlotNumberValue == 1)
    {//Checks whether the 'Content' property of the Aliases.VNMS.NodeView.NonModularView.NodeView_3500.Interface1 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.NodeView3500.NodeView_3500.Grid.Interface1.Grid.Cardname, "Content", cmpEqual, CardType);
    }
    if(SlotNumberValue == 2)
    {//Checks whether the 'Content' property of the Aliases.VNMS.NodeView.NonModularView.NodeView_3500.Interface2 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.NodeView3500.NodeView_3500.Grid.Interface2.Grid.CardName, "Content", cmpEqual, CardType);
    }
    if(SlotNumberValue == 3)
    {//Checks whether the 'Content' property of the Aliases.VNMS.NodeView.NonModularView.NodeView_3500.Interface3 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.NodeView3500.NodeView_3500.Grid.Interface3.Grid.CardName, "Content", cmpEqual, CardType);
    }
    if(SlotNumberValue == 4)
    //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.NonModularView.NodeView_3500.Interface4 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.NodeView3500.NodeView_3500.Grid.Interface4.Grid.CardName, "Content", cmpEqual, CardType);
    if(SlotNumberValue == 5)
    //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.NonModularView.NodeView_3500.Interface5 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.NodeView3500.NodeView_3500.Grid.Interface5.Grid.CardName, "Content", cmpEqual, CardType);
    if(SlotNumberValue == 6)
    //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.NonModularView.NodeView_3500.Interface6 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.NodeView3500.NodeView_3500.Grid.Interface6.Grid.CardName, "Content", cmpEqual, CardType);
    if(SlotNumberValue == 7)
    //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.NonModularView.NodeView_3500.Interface7 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.NodeView3500.NodeView_3500.Grid.Interface7.Grid.CardName, "Content", cmpEqual, CardType);
    if(SlotNumberValue == 8)
       //Checks whether the 'Content' property of the Aliases.VNMS.NodeView.ModularView.NodeView_3500M.BdrT1E1 object equals given Card Type.
    aqObject.CheckProperty(Aliases.VNMS.NodeView.Grid2.Viewbox.BdrT1E1.Rectangle, "Enabled", cmpEqual, true);
  }
}