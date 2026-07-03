RecipeViewerEvents.removeEntries("item", (event) => {
  const toRemove = [
    // Remove all entries of createcasing:* for creative,chorium,shadow,refined radiant, and refined obsidian casings
    /^createcasing:.*(creative|chorium|shadow|refined_radiance)/,
    // Remove create addition seed oil (replaced with Diesel's seed oil)
    /^createaddition:seed_oil.*/,
    /^kubejs:incomplete_.*/,
    "create_sa:grapplin_whisk",
  ];

  event.remove(toRemove);
});

RecipeViewerEvents.removeEntries("fluid", (event) => {
  // TODO Idk if I'm doing something wrong, but this doesn't seem to work. I can see the fluid in JEI, but it doesn't show up in the recipe viewer.
  const fluidsToHide = ["createaddition:seed_oil"];

  event.remove(fluidsToHide);
});
