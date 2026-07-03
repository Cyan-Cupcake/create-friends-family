// Overhauls CC: Tweaked recipes to require Create andesite + brass.
// Normal tier: stone → andesite. Advanced tier: gold → brass.
// Gold is used as a tag (c:ingots/gold) throughout CC, so standard replaceInput won't catch it — we patch the raw recipe JSON instead.

ServerEvents.recipes((event) => {
  event.replaceInput(
    { mod: "computercraft" },
    "minecraft:stone",
    "minecraft:andesite",
  );

  const BRASS_INGOT = JsonIO.parse('{"item":"create:brass_ingot"}');
  const BRASS_BLOCK = JsonIO.parse('{"item":"create:brass_block"}');

  function patchKeyTag(recipe, keyChar, expectedTag, replacement) {
    const key = recipe.json.get("key").getAsJsonObject();
    const entry = key.get(keyChar);
    if (entry && entry.isJsonObject()) {
      const tagVal = entry.getAsJsonObject().get("tag");
      if (tagVal && tagVal.getAsString() === expectedTag) {
        key.add(keyChar, replacement);
        recipe.save();
      }
    }
  }

  event.forEachRecipe({ mod: "computercraft" }, (recipe) => {
    if (recipe.json && recipe.json.has("key")) {
      patchKeyTag(recipe, "#", "c:ingots/gold", BRASS_INGOT);
      patchKeyTag(recipe, "B", "c:storage_blocks/gold", BRASS_BLOCK);
    }
  });
});
