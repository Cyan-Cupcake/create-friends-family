ServerEvents.recipes((event) => {
  const lava_compacting_recipes = [
    {
      output: "create:ochrum",
      inputs: ["minecraft:sandstone", "2x minecraft:flint"],
    },
    {
      output: "create:asurine",
      inputs: ["minecraft:blackstone", "1x minecraft:prismarine_crystals"],
    },
    {
      output: "create:crimsite",
      inputs: ["minecraft:nether_bricks", "2x minecraft:flint"],
    },
    {
      output: "create:veridium",
      inputs: ["minecraft:deepslate", "2x minecraft:prismarine_shard"],
    },
  ];

  lava_compacting_recipes.forEach((recipe) => {
    event.recipes
      .createCompacting(
        recipe.output,
        recipe.inputs.concat([Fluid.of("minecraft:lava", 100)]),
      )
      .heated();
  });

  // Pointed dripstone crushing recipe
  event.recipes.createCrushing(
    CreateItem.of("minecraft:pointed_dripstone", 0.25),
    "minecraft:dripstone_block",
  );

  // Skull recipes
  event.recipes
    .createSequencedAssembly(
      ["minecraft:skeleton_skull"],
      "minecraft:bone_block",
      [
        event.recipes.createFilling("kubejs:incomplete_skeleton_skull", [
          "kubejs:incomplete_skeleton_skull",
          Fluid.of("create_enchantment_industry:experience", 3),
        ]),
        event.recipes
          .createCutting(
            "kubejs:incomplete_skeleton_skull",
            "kubejs:incomplete_skeleton_skull",
          )
          .processingTime(100),
        event.recipes.createPressing(
          "kubejs:incomplete_skeleton_skull",
          "kubejs:incomplete_skeleton_skull",
        ),
      ],
    )
    .transitionalItem("kubejs:incomplete_skeleton_skull")
    .loops(3);

  const skullOptions = [
    { output: "minecraft:wither_skeleton_skull", dye: "black_dye" },
    { output: "minecraft:zombie_head", dye: "green_dye" },
    { output: "minecraft:creeper_head", dye: "lime_dye" },
    { output: "minecraft:piglin_head", dye: "pink_dye" },
    { output: Item.playerHead("BigJim713"), dye: "purple_dye" },
  ];
  skullOptions.forEach((filling) => {
    const { output, dye } = filling;
    event.recipes.createFilling(output, [
      "minecraft:skeleton_skull",
      Fluid.of(`create_dragons_plus:${dye}`, 250),
    ]);
  });
});
