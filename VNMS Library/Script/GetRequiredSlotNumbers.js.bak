function GetRequiredSlotNumbers(NodeIP, CardType)
{
  var CurrentSlotNumber;
   Project.Variables.SlotDetails.Reset();
   Project.Variables.SlotNumbers.RemoveColumn("Slots")
  for(; !Project.Variables.SlotDetails.IsEOF();)
  {
    if(Project.Variables.SlotDetails.Value("IP") == NodeIP)
    {
     Project.Variables.SlotNumbers.AddColumn("Slots")
      CurrentSlotNumber = 0;
      if(Project.Variables.SlotDetails.Value("Slot 1") == CardType)
      {
        Project.Variables.VariableByName("SlotNumbers").$set("Slots", CurrentSlotNumber, 1);
        CurrentSlotNumber = CurrentSlotNumber+ 1;
      }
      if(Project.Variables.SlotDetails.Value("Slot 2") == CardType)
      {
        Project.Variables.VariableByName("SlotNumbers").$set("Slots", CurrentSlotNumber, 2);
        CurrentSlotNumber = CurrentSlotNumber+ 1;
      }
      if(Project.Variables.SlotDetails.Value("Slot 3") == CardType)
      {
        Project.Variables.VariableByName("SlotNumbers").$set("Slots", CurrentSlotNumber, 3);
        CurrentSlotNumber = CurrentSlotNumber+1;
      }
      if(Project.Variables.SlotDetails.Value("Slot 4") == CardType)
      {
        Project.Variables.VariableByName("SlotNumbers").$set("Slots", CurrentSlotNumber, 4);
        CurrentSlotNumber = CurrentSlotNumber+1;
      }
      if(Project.Variables.SlotDetails.Value("Slot 5") == CardType)
      {
        Project.Variables.VariableByName("SlotNumbers").$set("Slots", CurrentSlotNumber, 5);
        CurrentSlotNumber = CurrentSlotNumber+ 1;
      }
      if(Project.Variables.SlotDetails.Value("Slot 6") == CardType)
      {
        Project.Variables.VariableByName("SlotNumbers").$set("Slots", CurrentSlotNumber, 6);
        CurrentSlotNumber = CurrentSlotNumber+ 1 ;
      }
      if(Project.Variables.SlotDetails.Value("Slot 7") == CardType)
      {
        Project.Variables.VariableByName("SlotNumbers").$set("Slots", CurrentSlotNumber, 7);
        CurrentSlotNumber = CurrentSlotNumber+ 1 ;
        }
    }
    Project.Variables.SlotDetails.Next();
  }
  Log.Message(CurrentSlotNumber);
  Log.Message("Number of slots given above")
  return CurrentSlotNumber;
}