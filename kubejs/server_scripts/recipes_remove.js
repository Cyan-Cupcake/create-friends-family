// Remove the item ID by output from any recipe entries.
const removeByOutput = [
  /^createcasing:(.*creative|chorium_ingot)/,
  "create_sa:grapplin_whisk", // Disabled since it crashes when grappling into Aeronautics contraptions,
];

// Remove recipes by their ID.
const removeByRecipeId = [
  "createaddition:compacting/seed_oil",
  "computercraft:computer_advanced_upgrade",
];

ServerEvents.recipes((event) => {
  removeByOutput.forEach((output) => event.remove({ output: output }));
  removeByRecipeId.forEach((recipeId) => event.remove({ id: recipeId }));
});
