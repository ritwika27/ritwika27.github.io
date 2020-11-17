// These are generated from the build_latinsquare_trials.py
// on May 21, based on LatinSquared - Longform - May21.csv

// If this were developed in-combination with the website, it could be made
// much more space efficient.

imgSourceDirectory = "FinalImagesALL/"
audioSourceDirectory = "WAVFiles/ExperimentFiles/"

// These are functions so they are not instantiated unless they are called.
// This conserves memory
let lists = [[new QuadPage("CJ were throwing the baseball", "CJ_P_TB.wav",
    [
    new Choice("T", "Boy2_3_Baseball.jpg"),
    new Choice("C1", "Girl1_Baseball.jpg"),
    new Choice("C2", "Girl2_3_Baseball.jpg"),
    new Choice("C3", "Boy1_Baseball.jpg")
    ])
,
new QuadPage("CJ were hanging the clothes", "CJ_P_HC.wav",
    [
    new Choice("T", "Boy2_3_Clothes.jpg"),
    new Choice("C1", "Girl1_Clothes.jpg"),
    new Choice("C2", "Girl2_3_Clothes.jpg"),
    new Choice("C3", "Boy1_Clothes.jpg")
    ])
,
new QuadPage("CJ were blowing the bubbles", "CJ_P_BB.wav",
    [
    new Choice("T", "Boy2_3_Bubbles.jpg"),
    new Choice("C1", "Girl1_Bubbles.jpg"),
    new Choice("C2", "Girl2_3_Bubbles.jpg"),
    new Choice("C3", "Boy1_Bubbles.jpg")
    ])
,
new QuadPage("CJ were sweeping the floor", "CJ_P_SF.wav",
    [
    new Choice("T", "Boy2_3_Floor.jpg"),
    new Choice("C1", "Girl1_Floor.jpg"),
    new Choice("C2", "Girl2_3_Floor.jpg"),
    new Choice("C3", "Boy1_Floor.jpg")
    ])
,
new QuadPage("CJ were fixing the bike", "CJ_P_FB.wav",
    [
    new Choice("T", "Boy2_3_Bike.png"),
    new Choice("C1", "Girl1_Bike.png"),
    new Choice("C2", "Girl2_3_Bike.png"),
    new Choice("C3", "Boy1_Bike.png")
    ])
,
new QuadPage("CJ were pushing the cart", "CJ_P_PC.wav",
    [
    new Choice("T", "Boy2_3_Cart.png"),
    new Choice("C1", "Girl1_Cart.png"),
    new Choice("C2", "Girl2_3_Cart.png"),
    new Choice("C3", "Boy1_Cart.png")
    ])
,
new QuadPage("CJ were brushing the cat", "CJ_P_BCat.wav",
    [
    new Choice("T", "Boy2_3_Cat.png"),
    new Choice("C1", "Girl1_Cat.png"),
    new Choice("C2", "Girl2_3_Cat.png"),
    new Choice("C3", "Boy1_Cat.png")
    ])
,
new QuadPage("J was feeding the rabbit", "J_S_FR.wav",
    [
    new Choice("T", "Boy1_Rabbit.png"),
    new Choice("C1", "Girl1_Rabbit.png"),
    new Choice("C2", "Girl2_3_Rabbit.png"),
    new Choice("C3", "Boy2_3_Rabbit.png")
    ])
,
new QuadPage("J was touching the frog", "J_S_TF.wav",
    [
    new Choice("T", "Boy1_Frog.jpg"),
    new Choice("C1", "Girl1_Frog.jpg"),
    new Choice("C2", "Girl2_3_Frog.jpg"),
    new Choice("C3", "Boy2_3_Frog.jpg")
    ])
,
new QuadPage("J was holding the basket", "J_S_HB.wav",
    [
    new Choice("T", "Boy1_Basket.jpg"),
    new Choice("C1", "Girl1_Basket.jpg"),
    new Choice("C2", "Girl2_3_Basket.jpg"),
    new Choice("C3", "Boy2_3_Basket.jpg")
    ])
,
new QuadPage("J was building the sandcastle", "J_S_BSC.wav",
    [
    new Choice("T", "Boy1_Sandcastle.jpg"),
    new Choice("C1", "Girl1_Sandcastle.jpg"),
    new Choice("C2", "Girl2_3_Sandcastle.jpg"),
    new Choice("C3", "Boy2_3_Sandcastle.jpg")
    ])
,
new QuadPage("J was painting the wall", "J_S_PWall.wav",
    [
    new Choice("T", "Boy1_Wall.jpg"),
    new Choice("C1", "Girl1_Wall.jpg"),
    new Choice("C2", "Girl2_3_Wall.jpg"),
    new Choice("C3", "Boy2_3_Wall.jpg")
    ])
,
new QuadPage("J was jumping the fence", "J_S_JF.wav",
    [
    new Choice("T", "Boy1_Fence.jpg"),
    new Choice("C1", "Girl1_Fence.jpg"),
    new Choice("C2", "Girl2_3_Fence.jpg"),
    new Choice("C3", "Boy2_3_Fence.jpg")
    ])
,
new QuadPage("J was moving the box", "J_S_MB.wav",
    [
    new Choice("T", "Boy1_Box.jpg"),
    new Choice("C1", "Girl1_Box.jpg"),
    new Choice("C2", "Girl2_3_Box.jpg"),
    new Choice("C3", "Boy2_3_Box.jpg")
    ])
,
new QuadPage("CM were drinking the milkshake", "CM_P_DMS.wav",
    [
    new Choice("T", "Girl2_3_Milkshake.jpg"),
    new Choice("C1", "Girl1_Milkshake.jpg"),
    new Choice("C2", "Boy2_3_Milkshake.jpg"),
    new Choice("C3", "Boy1_Milkshake.jpg")
    ])
,
new QuadPage("CM were hugging the teddy bear", "CM_P_HTB.wav",
    [
    new Choice("T", "Girl2_3_Bear.jpg"),
    new Choice("C1", "Girl1_Bear.jpg"),
    new Choice("C2", "Boy2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("CM were picking the apples", "CM_P_PA.wav",
    [
    new Choice("T", "Girl2_3_Apples.jpg"),
    new Choice("C1", "Girl1_Apples.jpg"),
    new Choice("C2", "Boy2_3_Apples.jpg"),
    new Choice("C3", "Boy1_Apples.jpg")
    ])
,
new QuadPage("CM were planting the flowers", "CM_P_PF.wav",
    [
    new Choice("T", "Girl2_3_Flowers.jpg"),
    new Choice("C1", "Girl1_Flowers.jpg"),
    new Choice("C2", "Boy2_3_Flowers.jpg"),
    new Choice("C3", "Boy1_Flowers.jpg")
    ])
,
new QuadPage("CM were eating a pizza", "CM_P_EP.wav",
    [
    new Choice("T", "Girl2_3_Pizza.jpg"),
    new Choice("C1", "Girl1_Pizza.jpg"),
    new Choice("C2", "Boy2_3_Pizza.jpg"),
    new Choice("C3", "Boy1_Pizza.jpg")
    ])
,
new QuadPage("CM were baking a cake", "CM_P_BC.wav",
    [
    new Choice("T", "Girl2_3_Cake.jpg"),
    new Choice("C1", "Girl1_Cake.jpg"),
    new Choice("C2", "Boy2_3_Cake.jpg"),
    new Choice("C3", "Boy1_Cake.jpg")
    ])
,
new QuadPage("CM were walkng a dog", "CM_P_WD.wav",
    [
    new Choice("T", "Girl2_3_Dog.jpg"),
    new Choice("C1", "Girl1_Dog.jpg"),
    new Choice("C2", "Boy2_3_Dog.jpg"),
    new Choice("C3", "Boy1_Dog.jpg")
    ])
,
new QuadPage("CM was washing a car", "CM_S_WC.wav",
    [
    new Choice("T", "Girl1_Car.jpg"),
    new Choice("C1", "Boy2_3_Car.jpg"),
    new Choice("C2", "Girl2_3_Car.jpg"),
    new Choice("C3", "Boy1_Car.jpg")
    ])
,
new QuadPage("CM was reading a book", "CM_S_RBook.wav",
    [
    new Choice("T", "Girl1_Book.jpg"),
    new Choice("C1", "Boy2_3_Book.jpg"),
    new Choice("C2", "Girl2_3_Book.jpg"),
    new Choice("C3", "Boy1_Book.jpg")
    ])
,
new QuadPage("CM was kicking a ball", "CM_S_KB.wav",
    [
    new Choice("T", "Girl1_Ball.jpg"),
    new Choice("C1", "Boy2_3_Ball.jpg"),
    new Choice("C2", "Girl2_3_Ball.jpg"),
    new Choice("C3", "Boy1_Ball.jpg")
    ])
,
new QuadPage("CM was riding a horse", "CM_S_RH.wav",
    [
    new Choice("T", "Girl1_Horse.jpg"),
    new Choice("C1", "Boy2_3_Horse.jpg"),
    new Choice("C2", "Girl2_3_Horse.jpg"),
    new Choice("C3", "Boy1_Horse.jpg")
    ])
,
new QuadPage("CM was pulling a wagon", "CM_S_PW.wav",
    [
    new Choice("T", "Girl1_Wagon.jpg"),
    new Choice("C1", "Boy2_3_Wagon.jpg"),
    new Choice("C2", "Girl2_3_Wagon.jpg"),
    new Choice("C3", "Boy1_Wagon.jpg")
    ])
,
new QuadPage("CM was folding a blanket", "CM_S_FBlanket.wav",
    [
    new Choice("T", "Girl1_Blanket.jpg"),
    new Choice("C1", "Boy2_3_Blanket.jpg"),
    new Choice("C2", "Girl2_3_Blanket.jpg"),
    new Choice("C3", "Boy1_Blanket.jpg")
    ])
,
new QuadPage("CM was climbing a tree", "CM_S_CTree.wav",
    [
    new Choice("T", "Girl1_Tree.jpg"),
    new Choice("C1", "Boy2_3_Tree.jpg"),
    new Choice("C2", "Girl2_3_Tree.jpg"),
    new Choice("C3", "Boy1_Tree.jpg")
    ])
],[new QuadPage("J was throwing the baseball", "J_S_TB.wav",
    [
    new Choice("T", "Boy1_Baseball.jpg"),
    new Choice("C1", "Boy2_3_Baseball.jpg"),
    new Choice("C2", "Girl2_3_Baseball.jpg"),
    new Choice("C3", "Girl1_Baseball.jpg")
    ])
,
new QuadPage("J was hanging the clothes", "J_S_HC.wav",
    [
    new Choice("T", "Boy1_Clothes.jpg"),
    new Choice("C1", "Boy2_3_Clothes.jpg"),
    new Choice("C2", "Girl2_3_Clothes.jpg"),
    new Choice("C3", "Girl1_Clothes.jpg")
    ])
,
new QuadPage("J was blowing the bubbles", "J_S_BB.wav",
    [
    new Choice("T", "Boy1_Bubbles.jpg"),
    new Choice("C1", "Boy2_3_Bubbles.jpg"),
    new Choice("C2", "Girl2_3_Bubbles.jpg"),
    new Choice("C3", "Girl1_Bubbles.jpg")
    ])
,
new QuadPage("J was sweeping the floor", "J_S_SF.wav",
    [
    new Choice("T", "Boy1_Floor.jpg"),
    new Choice("C1", "Boy2_3_Floor.jpg"),
    new Choice("C2", "Girl2_3_Floor.jpg"),
    new Choice("C3", "Girl1_Floor.jpg")
    ])
,
new QuadPage("J was fixing the bike", "J_S_FB.wav",
    [
    new Choice("T", "Boy1_Bike.png"),
    new Choice("C1", "Boy2_3_Bike.png"),
    new Choice("C2", "Girl2_3_Bike.png"),
    new Choice("C3", "Girl1_Bike.png")
    ])
,
new QuadPage("J was pushing the cart", "J_S_PC.wav",
    [
    new Choice("T", "Boy1_Cart.png"),
    new Choice("C1", "Boy2_3_Cart.png"),
    new Choice("C2", "Girl2_3_Cart.png"),
    new Choice("C3", "Girl1_Cart.png")
    ])
,
new QuadPage("J was brushing the cat", "J_S_BCat.wav",
    [
    new Choice("T", "Boy1_Cat.png"),
    new Choice("C1", "Boy2_3_Cat.png"),
    new Choice("C2", "Girl2_3_Cat.png"),
    new Choice("C3", "Girl1_Cat.png")
    ])
,
new QuadPage("CM were feeding the rabbit", "CM_P_FR.wav",
    [
    new Choice("T", "Girl2_3_Rabbit.png"),
    new Choice("C1", "Boy2_3_Rabbit.png"),
    new Choice("C2", "Girl1_Rabbit.png"),
    new Choice("C3", "Boy1_Rabbit.png")
    ])
,
new QuadPage("CM were touching the frog", "CM_P_TF.wav",
    [
    new Choice("T", "Girl2_3_Frog.jpg"),
    new Choice("C1", "Boy2_3_Frog.jpg"),
    new Choice("C2", "Girl1_Frog.jpg"),
    new Choice("C3", "Boy1_Frog.jpg")
    ])
,
new QuadPage("CM were holding the basket", "CM_P_HB.wav",
    [
    new Choice("T", "Girl2_3_Basket.jpg"),
    new Choice("C1", "Boy2_3_Basket.jpg"),
    new Choice("C2", "Girl1_Basket.jpg"),
    new Choice("C3", "Boy1_Basket.jpg")
    ])
,
new QuadPage("CM were building the sandcastle", "CM_P_BSC.wav",
    [
    new Choice("T", "Girl2_3_Sandcastle.jpg"),
    new Choice("C1", "Boy2_3_Sandcastle.jpg"),
    new Choice("C2", "Girl1_Sandcastle.jpg"),
    new Choice("C3", "Boy1_Sandcastle.jpg")
    ])
,
new QuadPage("CM were painting the wall", "CM_P_PWall.wav",
    [
    new Choice("T", "Girl2_3_Wall.jpg"),
    new Choice("C1", "Boy2_3_Wall.jpg"),
    new Choice("C2", "Girl1_Wall.jpg"),
    new Choice("C3", "Boy1_Wall.jpg")
    ])
,
new QuadPage("CM were jumping the fence", "CM_P_JF.wav",
    [
    new Choice("T", "Girl2_3_Fence.jpg"),
    new Choice("C1", "Boy2_3_Fence.jpg"),
    new Choice("C2", "Girl1_Fence.jpg"),
    new Choice("C3", "Boy1_Fence.jpg")
    ])
,
new QuadPage("CM were moving the box", "CM_P_MB.wav",
    [
    new Choice("T", "Girl2_3_Box.jpg"),
    new Choice("C1", "Boy2_3_Box.jpg"),
    new Choice("C2", "Girl1_Box.jpg"),
    new Choice("C3", "Boy1_Box.jpg")
    ])
,
new QuadPage("CM was drinking the milkshake", "CM_S_DMS.wav",
    [
    new Choice("T", "Girl1_Milkshake.jpg"),
    new Choice("C1", "Boy2_3_Milkshake.jpg"),
    new Choice("C2", "Girl2_3_Milkshake.jpg"),
    new Choice("C3", "Boy1_Milkshake.jpg")
    ])
,
new QuadPage("CM was hugging the teddy bear", "CM_S_HTB.wav",
    [
    new Choice("T", "Girl1_Bear.jpg"),
    new Choice("C1", "Boy2_3_Bear.jpg"),
    new Choice("C2", "Girl2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("CM was picking the apples", "CM_S_PA.wav",
    [
    new Choice("T", "Girl1_Apples.jpg"),
    new Choice("C1", "Boy2_3_Apples.jpg"),
    new Choice("C2", "Girl2_3_Apples.jpg"),
    new Choice("C3", "Boy1_Apples.jpg")
    ])
,
new QuadPage("CM was planting the flowers", "CM_S_PF.wav",
    [
    new Choice("T", "Girl1_Flowers.jpg"),
    new Choice("C1", "Boy2_3_Flowers.jpg"),
    new Choice("C2", "Girl2_3_Flowers.jpg"),
    new Choice("C3", "Boy1_Flowers.jpg")
    ])
,
new QuadPage("CM was eating a pizza", "CM_S_EP.wav",
    [
    new Choice("T", "Girl1_Pizza.jpg"),
    new Choice("C1", "Boy2_3_Pizza.jpg"),
    new Choice("C2", "Girl2_3_Pizza.jpg"),
    new Choice("C3", "Boy1_Pizza.jpg")
    ])
,
new QuadPage("CM was baking a cake", "CM_S_BC.wav",
    [
    new Choice("T", "Girl1_Cake.jpg"),
    new Choice("C1", "Boy2_3_Cake.jpg"),
    new Choice("C2", "Girl2_3_Cake.jpg"),
    new Choice("C3", "Boy1_Cake.jpg")
    ])
,
new QuadPage("CM was walkng a dog", "CM_S_WD.wav",
    [
    new Choice("T", "Girl1_Dog.jpg"),
    new Choice("C1", "Boy2_3_Dog.jpg"),
    new Choice("C2", "Girl2_3_Dog.jpg"),
    new Choice("C3", "Boy1_Dog.jpg")
    ])
,
new QuadPage("CJ were washing a car", "CJ_P_WC.wav",
    [
    new Choice("T", "Boy2_3_Car.jpg"),
    new Choice("C1", "Girl1_Car.jpg"),
    new Choice("C2", "Girl2_3_Car.jpg"),
    new Choice("C3", "Boy1_Car.jpg")
    ])
,
new QuadPage("CJ were reading a book", "CJ_P_RBook.wav",
    [
    new Choice("T", "Boy2_3_Book.jpg"),
    new Choice("C1", "Girl1_Book.jpg"),
    new Choice("C2", "Girl2_3_Book.jpg"),
    new Choice("C3", "Boy1_Book.jpg")
    ])
,
new QuadPage("CJ were kicking a ball", "CJ_P_KB.wav",
    [
    new Choice("T", "Boy2_3_Ball.jpg"),
    new Choice("C1", "Girl1_Ball.jpg"),
    new Choice("C2", "Girl2_3_Ball.jpg"),
    new Choice("C3", "Boy1_Ball.jpg")
    ])
,
new QuadPage("CJ were riding a horse", "CJ_P_RH.wav",
    [
    new Choice("T", "Boy2_3_Horse.jpg"),
    new Choice("C1", "Girl1_Horse.jpg"),
    new Choice("C2", "Girl2_3_Horse.jpg"),
    new Choice("C3", "Boy1_Horse.jpg")
    ])
,
new QuadPage("CJ were pulling a wagon", "CJ_P_PW.wav",
    [
    new Choice("T", "Boy2_3_Wagon.jpg"),
    new Choice("C1", "Girl1_Wagon.jpg"),
    new Choice("C2", "Girl2_3_Wagon.jpg"),
    new Choice("C3", "Boy1_Wagon.jpg")
    ])
,
new QuadPage("CJ were folding a blanket", "CJ_P_FBlanket.wav",
    [
    new Choice("T", "Boy2_3_Blanket.jpg"),
    new Choice("C1", "Girl1_Blanket.jpg"),
    new Choice("C2", "Girl2_3_Blanket.jpg"),
    new Choice("C3", "Boy1_Blanket.jpg")
    ])
,
new QuadPage("CJ were climbing a tree", "CJ_P_CTree.wav",
    [
    new Choice("T", "Boy2_3_Tree.jpg"),
    new Choice("C1", "Girl1_Tree.jpg"),
    new Choice("C2", "Girl2_3_Tree.jpg"),
    new Choice("C3", "Boy1_Tree.jpg")
    ])
],[new QuadPage("CM were throwing the baseball", "CM_P_TB.wav",
    [
    new Choice("T", "Girl2_3_Baseball.jpg"),
    new Choice("C1", "Boy2_3_Baseball.jpg"),
    new Choice("C2", "Girl1_Baseball.jpg"),
    new Choice("C3", "Boy1_Baseball.jpg")
    ])
,
new QuadPage("CM were hanging the clothes", "CM_P_HC.wav",
    [
    new Choice("T", "Girl2_3_Clothes.jpg"),
    new Choice("C1", "Boy2_3_Clothes.jpg"),
    new Choice("C2", "Girl1_Clothes.jpg"),
    new Choice("C3", "Boy1_Clothes.jpg")
    ])
,
new QuadPage("CM were blowing the bubbles", "CM_P_BB.wav",
    [
    new Choice("T", "Girl2_3_Bubbles.jpg"),
    new Choice("C1", "Boy2_3_Bubbles.jpg"),
    new Choice("C2", "Girl1_Bubbles.jpg"),
    new Choice("C3", "Boy1_Bubbles.jpg")
    ])
,
new QuadPage("CM was sweeping the floor", "CM_P_SF.wav",
    [
    new Choice("T", "Girl2_3_Floor.jpg"),
    new Choice("C1", "Boy2_3_Floor.jpg"),
    new Choice("C2", "Girl1_Floor.jpg"),
    new Choice("C3", "Boy1_Floor.jpg")
    ])
,
new QuadPage("CM were fixing the bike", "CM_P_FB.wav",
    [
    new Choice("T", "Girl2_3_Bike.png"),
    new Choice("C1", "Boy2_3_Bike.png"),
    new Choice("C2", "Girl1_Bike.png"),
    new Choice("C3", "Boy1_Bike.png")
    ])
,
new QuadPage("CM were pushing the cart", "CM_P_PC.wav",
    [
    new Choice("T", "Girl2_3_Cart.png"),
    new Choice("C1", "Boy2_3_Cart.png"),
    new Choice("C2", "Girl1_Cart.png"),
    new Choice("C3", "Boy1_Cart.png")
    ])
,
new QuadPage("CM were brushing the cat", "CM_P_BCat.wav",
    [
    new Choice("T", "Girl2_3_Cat.png"),
    new Choice("C1", "Boy2_3_Cat.png"),
    new Choice("C2", "Girl1_Cat.png"),
    new Choice("C3", "Boy1_Cat.png")
    ])
,
new QuadPage("CM was feeding the rabbit", "CM_S_FR.wav",
    [
    new Choice("T", "Girl1_Rabbit.png"),
    new Choice("C1", "Boy2_3_Rabbit.png"),
    new Choice("C2", "Girl2_3_Rabbit.png"),
    new Choice("C3", "Boy1_Rabbit.png")
    ])
,
new QuadPage("CM was touching the frog", "CM_S_TF.wav",
    [
    new Choice("T", "Girl1_Frog.jpg"),
    new Choice("C1", "Boy2_3_Frog.jpg"),
    new Choice("C2", "Girl2_3_Frog.jpg"),
    new Choice("C3", "Boy1_Frog.jpg")
    ])
,
new QuadPage("CM was holding the basket", "CM_S_HB.wav",
    [
    new Choice("T", "Girl1_Basket.jpg"),
    new Choice("C1", "Boy2_3_Basket.jpg"),
    new Choice("C2", "Girl2_3_Basket.jpg"),
    new Choice("C3", "Boy1_Basket.jpg")
    ])
,
new QuadPage("CM was building the sandcastle", "CM_S_BSC.wav",
    [
    new Choice("T", "Girl1_Sandcastle.jpg"),
    new Choice("C1", "Boy2_3_Sandcastle.jpg"),
    new Choice("C2", "Girl2_3_Sandcastle.jpg"),
    new Choice("C3", "Boy1_Sandcastle.jpg")
    ])
,
new QuadPage("CM was painting the wall", "CM_S_PWall.wav",
    [
    new Choice("T", "Girl1_Wall.jpg"),
    new Choice("C1", "Boy2_3_Wall.jpg"),
    new Choice("C2", "Girl2_3_Wall.jpg"),
    new Choice("C3", "Boy1_Wall.jpg")
    ])
,
new QuadPage("CM was jumping the fence", "CM_S_JF.wav",
    [
    new Choice("T", "Girl1_Fence.jpg"),
    new Choice("C1", "Boy2_3_Fence.jpg"),
    new Choice("C2", "Girl2_3_Fence.jpg"),
    new Choice("C3", "Boy1_Fence.jpg")
    ])
,
new QuadPage("CM was moving the box", "CM_S_MB.wav",
    [
    new Choice("T", "Girl1_Box.jpg"),
    new Choice("C1", "Boy2_3_Box.jpg"),
    new Choice("C2", "Girl2_3_Box.jpg"),
    new Choice("C3", "Boy1_Box.jpg")
    ])
,
new QuadPage("CJ were drinking the milkshake", "CJ_P_DMS.wav",
    [
    new Choice("T", "Boy2_3_Milkshake.jpg"),
    new Choice("C1", "Girl1_Milkshake.jpg"),
    new Choice("C2", "Girl2_3_Milkshake.jpg"),
    new Choice("C3", "Boy1_Milkshake.jpg")
    ])
,
new QuadPage("CJ were hugging the teddy bear", "CJ_P_HTB.wav",
    [
    new Choice("T", "Boy2_3_Bear.jpg"),
    new Choice("C1", "Girl1_Bear.jpg"),
    new Choice("C2", "Girl2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("CJ were picking the apples", "CJ_P_PA.wav",
    [
    new Choice("T", "Boy2_3_Apples.jpg"),
    new Choice("C1", "Girl1_Apples.jpg"),
    new Choice("C2", "Girl2_3_Apples.jpg"),
    new Choice("C3", "Boy1_Apples.jpg")
    ])
,
new QuadPage("CJ were planting the flowers", "CJ_P_PF.wav",
    [
    new Choice("T", "Boy2_3_Flowers.jpg"),
    new Choice("C1", "Girl1_Flowers.jpg"),
    new Choice("C2", "Girl2_3_Flowers.jpg"),
    new Choice("C3", "Boy1_Flowers.jpg")
    ])
,
new QuadPage("CJ were eating a pizza", "CJ_P_EP.wav",
    [
    new Choice("T", "Boy2_3_Pizza.jpg"),
    new Choice("C1", "Girl1_Pizza.jpg"),
    new Choice("C2", "Girl2_3_Pizza.jpg"),
    new Choice("C3", "Boy1_Pizza.jpg")
    ])
,
new QuadPage("CJ were baking a cake", "CJ_P_BC.wav",
    [
    new Choice("T", "Boy2_3_Cake.jpg"),
    new Choice("C1", "Girl1_Cake.jpg"),
    new Choice("C2", "Girl2_3_Cake.jpg"),
    new Choice("C3", "Boy1_Cake.jpg")
    ])
,
new QuadPage("CJ were walkng a dog", "CJ_P_WD.wav",
    [
    new Choice("T", "Boy2_3_Dog.jpg"),
    new Choice("C1", "Girl1_Dog.jpg"),
    new Choice("C2", "Girl2_3_Dog.jpg"),
    new Choice("C3", "Boy1_Dog.jpg")
    ])
,
new QuadPage("J was washing a car", "J_S_WC.wav",
    [
    new Choice("T", "Boy1_Car.jpg"),
    new Choice("C1", "Boy2_3_Car.jpg"),
    new Choice("C2", "Girl2_3_Car.jpg"),
    new Choice("C3", "Girl1_Car.png")
    ])
,
new QuadPage("J was reading a book", "J_S_RBook.wav",
    [
    new Choice("T", "Boy1_Book.jpg"),
    new Choice("C1", "Boy2_3_Book.jpg"),
    new Choice("C2", "Girl2_3_Book.jpg"),
    new Choice("C3", "Girl1_Book.jpg")
    ])
,
new QuadPage("J was kicking a ball", "J_S_KB.wav",
    [
    new Choice("T", "Boy1_Ball.jpg"),
    new Choice("C1", "Boy2_3_Ball.jpg"),
    new Choice("C2", "Girl2_3_Ball.jpg"),
    new Choice("C3", "Girl1_Ball.jpg")
    ])
,
new QuadPage("J was riding a horse", "J_S_RH.wav",
    [
    new Choice("T", "Boy1_Horse.jpg"),
    new Choice("C1", "Boy2_3_Horse.jpg"),
    new Choice("C2", "Girl2_3_Horse.jpg"),
    new Choice("C3", "Girl1_Horse.jpg")
    ])
,
new QuadPage("J was pulling a wagon", "J_S_PW.wav",
    [
    new Choice("T", "Boy1_Wagon.jpg"),
    new Choice("C1", "Boy2_3_Wagon.jpg"),
    new Choice("C2", "Girl2_3_Wagon.jpg"),
    new Choice("C3", "Girl1_Wagon.jpg")
    ])
,
new QuadPage("J was folding a blanket", "J_S_FBlanket.wav",
    [
    new Choice("T", "Boy1_Blanket.jpg"),
    new Choice("C1", "Boy2_3_Blanket.jpg"),
    new Choice("C2", "Girl2_3_Blanket.jpg"),
    new Choice("C3", "Girl1_Blanket.jpg")
    ])
,
new QuadPage("J was climbing a tree", "J_S_CTree.wav",
    [
    new Choice("T", "Boy1_Tree.jpg"),
    new Choice("C1", "Boy2_3_Tree.jpg"),
    new Choice("C2", "Girl2_3_Tree.jpg"),
    new Choice("C3", "Girl1_Tree.jpg")
    ])
],[new QuadPage("CM was throwing the baseball", "CM_S_TB.wav",
    [
    new Choice("T", "Girl1_Baseball.jpg"),
    new Choice("C1", "Boy2_3_Baseball.jpg"),
    new Choice("C2", "Girl2_3_Baseball.jpg"),
    new Choice("C3", "Boy1_Baseball.jpg")
    ])
,
new QuadPage("CM was hanging the clothes", "CM_S_HC.wav",
    [
    new Choice("T", "Girl1_Clothes.jpg"),
    new Choice("C1", "Boy2_3_Clothes.jpg"),
    new Choice("C2", "Girl2_3_Clothes.jpg"),
    new Choice("C3", "Boy1_Clothes.jpg")
    ])
,
new QuadPage("CM was blowing the bubbles", "CM_S_BB.wav",
    [
    new Choice("T", "Girl1_Bubbles.jpg"),
    new Choice("C1", "Boy2_3_Bubbles.jpg"),
    new Choice("C2", "Girl2_3_Bubbles.jpg"),
    new Choice("C3", "Boy1_Bubbles.jpg")
    ])
,
new QuadPage("CM was sweeping the floor", "CM_S_SF.wav",
    [
    new Choice("T", "Girl1_Floor.jpg"),
    new Choice("C1", "Boy2_3_Floor.jpg"),
    new Choice("C2", "Girl2_3_Floor.jpg"),
    new Choice("C3", "Boy1_Floor.jpg")
    ])
,
new QuadPage("CM was fixing the bike", "CM_S_FB.wav",
    [
    new Choice("T", "Girl1_Bike.png"),
    new Choice("C1", "Boy2_3_Bike.png"),
    new Choice("C2", "Girl2_3_Bike.png"),
    new Choice("C3", "Boy1_Bike.png")
    ])
,
new QuadPage("CM was pushing the cart", "CM_S_PC.wav",
    [
    new Choice("T", "Girl1_Cart.png"),
    new Choice("C1", "Boy2_3_Cart.jpg"),
    new Choice("C2", "Girl2_3_Cart.png"),
    new Choice("C3", "Boy1_Cart.png")
    ])
,
new QuadPage("CM was brushing the cat", "CM_S_BCat.wav",
    [
    new Choice("T", "Girl1_Cat.png"),
    new Choice("C1", "Boy2_3_Cat.png"),
    new Choice("C2", "Girl2_3_Cat.png"),
    new Choice("C3", "Boy1_Cat.png")
    ])
,
new QuadPage("CJ were feeding the rabbit", "CJ_P_FR.wav",
    [
    new Choice("T", "Boy2_3_Rabbit.png"),
    new Choice("C1", "Girl1_Rabbit.png"),
    new Choice("C2", "Girl2_3_Rabbit.png"),
    new Choice("C3", "Boy1_Rabbit.png")
    ])
,
new QuadPage("CJ were touching the frog", "CJ_P_TF.wav",
    [
    new Choice("T", "Boy2_3_Frog.jpg"),
    new Choice("C1", "Girl1_Frog.jpg"),
    new Choice("C2", "Girl2_3_Frog.jpg"),
    new Choice("C3", "Boy1_Frog.jpg")
    ])
,
new QuadPage("CJ were holding the basket", "CJ_P_HB.wav",
    [
    new Choice("T", "Boy2_3_Bear.jpg"),
    new Choice("C1", "Girl1_Bear.jpg"),
    new Choice("C2", "Girl2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("CJ were building the sandcastle", "CJ_P_BSC.wav",
    [
    new Choice("T", "Boy2_3_Sandcastle.jpg"),
    new Choice("C1", "Girl1_Sandcastle.jpg"),
    new Choice("C2", "Girl2_3_Sandcastle.jpg"),
    new Choice("C3", "Boy1_Sandcastle.jpg")
    ])
,
new QuadPage("CJ were painting the wall", "CJ_P_PWall.wav",
    [
    new Choice("T", "Boy2_3_Wall.jpg"),
    new Choice("C1", "Girl1_Wall.jpg"),
    new Choice("C2", "Girl2_3_Wall.jpg"),
    new Choice("C3", "Boy1_Wall.jpg")
    ])
,
new QuadPage("CJ were jumping the fence", "CJ_P_JF.wav",
    [
    new Choice("T", "Boy2_3_Fence.jpg"),
    new Choice("C1", "Girl1_Fence.jpg"),
    new Choice("C2", "Girl2_3_Fence.jpg"),
    new Choice("C3", "Boy1_Fence.jpg")
    ])
,
new QuadPage("CJ were moving the box", "CJ_P_MB.wav",
    [
    new Choice("T", "Boy2_3_Box.jpg"),
    new Choice("C1", "Girl1_Box.jpg"),
    new Choice("C2", "Girl2_3_Box.jpg"),
    new Choice("C3", "Boy1_Box.jpg")
    ])
,
new QuadPage("J was drinking the milkshake", "J_S_DMS.wav",
    [
    new Choice("T", "Boy1_Milkshake.jpg"),
    new Choice("C1", "Girl1_Milkshake.jpg"),
    new Choice("C2", "Girl2_3_Milkshake.jpg"),
    new Choice("C3", "Boy2_3_Milkshake.jpg")
    ])
,
new QuadPage("J was hugging the teddy bear", "J_S_HTB.wav",
    [
    new Choice("T", "Boy1_Bear.jpg"),
    new Choice("C1", "Girl1_Bear.jpg"),
    new Choice("C2", "Girl2_3_Bear.jpg"),
    new Choice("C3", "Boy2_3_Bear.jpg")
    ])
,
new QuadPage("J was picking the apples", "J_S_PA.wav",
    [
    new Choice("T", "Boy1_Apples.jpg"),
    new Choice("C1", "Girl1_Apples.jpg"),
    new Choice("C2", "Girl2_3_Apples.jpg"),
    new Choice("C3", "Boy2_3_Apples.jpg")
    ])
,
new QuadPage("J was planting the flowers", "J_S_PF.wav",
    [
    new Choice("T", "Boy1_Flowers.jpg"),
    new Choice("C1", "Girl1_Flowers.jpg"),
    new Choice("C2", "Girl2_3_Flowers.jpg"),
    new Choice("C3", "Boy2_3_Flowers.jpg")
    ])
,
new QuadPage("J was eating a pizza", "J_S_EP.wav",
    [
    new Choice("T", "Boy1_Pizza.jpg"),
    new Choice("C1", "Girl1_Pizza.jpg"),
    new Choice("C2", "Girl2_3_Pizza.jpg"),
    new Choice("C3", "Boy2_3_Pizza.jpg")
    ])
,
new QuadPage("J was baking a cake", "J_S_BC.wav",
    [
    new Choice("T", "Boy1_Cake.jpg"),
    new Choice("C1", "Girl1_Cake.jpg"),
    new Choice("C2", "Girl2_3_Cake.jpg"),
    new Choice("C3", "Boy2_3_Cake.jpg")
    ])
,
new QuadPage("J was walkng a dog", "J_S_WD.wav",
    [
    new Choice("T", "Boy1_Dog.jpg"),
    new Choice("C1", "Girl1_Dog.jpg"),
    new Choice("C2", "Girl2_3_Dog.jpg"),
    new Choice("C3", "Boy2_3_Dog.jpg")
    ])
,
new QuadPage("CM were washing a car", "CM_P_WC.wav",
    [
    new Choice("T", "Girl2_3_Car.jpg"),
    new Choice("C1", "Boy2_3_Car.jpg"),
    new Choice("C2", "Girl1_Car.jpg"),
    new Choice("C3", "Boy1_Car.jpg")
    ])
,
new QuadPage("CM were reading a book", "CM_P_RBook.wav",
    [
    new Choice("T", "Girl2_3_Book.jpg"),
    new Choice("C1", "Boy2_3_Book.jpg"),
    new Choice("C2", "Girl1_Book.jpg"),
    new Choice("C3", "Boy1_Book.jpg")
    ])
,
new QuadPage("CM were kicking a ball", "CM_P_KB.wav",
    [
    new Choice("T", "Girl2_3_Ball.jpg"),
    new Choice("C1", "Boy2_3_Ball.jpg"),
    new Choice("C2", "Girl1_Ball.jpg"),
    new Choice("C3", "Boy1_Ball.jpg")
    ])
,
new QuadPage("CM were riding a horse", "CM_P_RH.wav",
    [
    new Choice("T", "Girl2_3_Horse.jpg"),
    new Choice("C1", "Boy2_3_Horse.jpg"),
    new Choice("C2", "Girl1_Horse.jpg"),
    new Choice("C3", "Boy1_Horse.jpg")
    ])
,
new QuadPage("CM were pulling a wagon", "CM_P_PW.wav",
    [
    new Choice("T", "Girl2_3_Wagon.jpg"),
    new Choice("C1", "Boy2_3_Wagon.jpg"),
    new Choice("C2", "Girl1_Wagon.jpg"),
    new Choice("C3", "Boy1_Wagon.jpg")
    ])
,
new QuadPage("CM were folding a blanket", "CM_P_FBlanket.wav",
    [
    new Choice("T", "Girl2_3_Blanket.jpg"),
    new Choice("C1", "Boy2_3_Blanket.jpg"),
    new Choice("C2", "Girl1_Blanket.jpg"),
    new Choice("C3", "Boy1_Blanket.jpg")
    ])
,
new QuadPage("CM were climbing a tree", "CM_P_CTree.wav",
    [
    new Choice("T", "Girl2_3_Tree.jpg"),
    new Choice("C1", "Boy2_3_Tree.jpg"),
    new Choice("C2", "Girl1_Tree.jpg"),
    new Choice("C3", "Boy1_Tree.jpg")
    ])
]];


_global_audio_object = {'file': 'AUDIO_SHEET.mp3', 'locations': {'WAVFiles/Reinforcement/Slide8_IncorrectFeedback.mp3': {'start': 0, 'length': 13.871}, 'WAVFiles/Reinforcement/LandingPage1.wav': {'start': 14.371, 'length': 6.148}, 'WAVFiles/Reinforcement/LandingPage3.wav': {'start': 21.019, 'length': 6.884}, 'WAVFiles/Reinforcement/LandingPage2.wav': {'start': 28.403, 'length': 6.676}, 'WAVFiles/Reinforcement/LandingPage6.wav': {'start': 35.579, 'length': 8.722}, 'WAVFiles/Reinforcement/LandingPage7.wav': {'start': 44.801, 'length': 9.688}, 'WAVFiles/Reinforcement/LandingPage5.wav': {'start': 54.989, 'length': 7.843}, 'WAVFiles/Reinforcement/LandingPage4.wav': {'start': 63.332, 'length': 6.948}, 'WAVFiles/Reinforcement/Slide6_9_CorrectFeedback.mp3': {'start': 70.78, 'length': 6.713}, 'WAVFiles/Reinforcement/Slide6_IncorrectFeedback.mp3': {'start': 77.993, 'length': 13.871}, 'WAVFiles/Reinforcement/Slide6_9_CorrectFeedbackOLD.mp3': {'start': 92.364, 'length': 13.871}, 'WAVFiles/Reinforcement/Slide12_LandingPage1.wav': {'start': 106.735, 'length': 6.611}, 'WAVFiles/Reinforcement/Slide9_IncorrectFeedback.mp3': {'start': 113.846, 'length': 13.871}, 'WAVFiles/Reinforcement/Slide10_IncorrectFeedback.mp3': {'start': 128.217, 'length': 14.916}, 'WAVFiles/Reinforcement/Slide7_IncorrectFeedback.mp3': {'start': 143.633, 'length': 13.871}, 'WAVFiles/Introduction_Instructions/slide11_LetsBegin.wav': {'start': 158.004, 'length': 18.039}, 'WAVFiles/Introduction_Instructions/Slide6_CMtable.wav': {'start': 176.543, 'length': 4.283}, 'WAVFiles/Introduction_Instructions/Slide7_IntrotoEX.wav': {'start': 181.326, 'length': 28.972}, 'WAVFiles/Introduction_Instructions/Slide4_WearHeadphones.wav': {'start': 210.798, 'length': 6.744}, 'WAVFiles/Introduction_Instructions/Slide6_CJ.wav': {'start': 218.042, 'length': 3.975}, 'WAVFiles/Introduction_Instructions/Slide5_StoryIntro.wav': {'start': 222.517, 'length': 40.463}, 'WAVFiles/Introduction_Instructions/Slide6_Jeremiah.wav': {'start': 263.48, 'length': 3.941}, 'WAVFiles/Introduction_Instructions/Slide3CGInstructions.wav': {'start': 267.921, 'length': 47.8}, 'WAVFiles/Introduction_Instructions/Slide6_IntroToNames.wav': {'start': 316.221, 'length': 45.753}, 'WAVFiles/Introduction_Instructions/Slide6_CMmovie.wav': {'start': 362.474, 'length': 4.019}, 'WAVFiles/Examples/Slide9_CM_S_Movie.wav': {'start': 366.993, 'length': 3.226}, 'WAVFiles/Examples/Slide8_CM_S_Table.wav': {'start': 370.719, 'length': 4.151}, 'WAVFiles/Examples/slide10_CM_P_Paper.wav': {'start': 375.37, 'length': 4.063}, 'WAVFiles/ExperimentFiles/J_S_CT.wav': {'start': 379.933, 'length': 2.126}, 'WAVFiles/ExperimentFiles/CJ_P_WM.wav': {'start': 382.559, 'length': 2.094}, 'WAVFiles/ExperimentFiles/CM_S_WD.wav': {'start': 385.153, 'length': 2.029}, 'WAVFiles/ExperimentFiles/J_S_PWall.wav': {'start': 387.682, 'length': 2.089}, 'WAVFiles/ExperimentFiles/CJ_P_MB.wav': {'start': 390.271, 'length': 2.213}, 'WAVFiles/ExperimentFiles/CJ_P_RBook.wav': {'start': 392.984, 'length': 1.928}, 'WAVFiles/ExperimentFiles/CM_S_CT.wav': {'start': 395.412, 'length': 2.038}, 'WAVFiles/ExperimentFiles/CJ_P_TB.wav': {'start': 397.95, 'length': 2.422}, 'WAVFiles/ExperimentFiles/CM_P_FB.wav': {'start': 400.872, 'length': 1.931}, 'WAVFiles/ExperimentFiles/CM_S_BSC.wav': {'start': 403.303, 'length': 2.412}, 'WAVFiles/ExperimentFiles/J_S_WD.wav': {'start': 406.215, 'length': 2.118}, 'WAVFiles/ExperimentFiles/CM_P_SF.wav': {'start': 408.833, 'length': 1.927}, 'WAVFiles/ExperimentFiles/CM_S_BB.wav': {'start': 411.26, 'length': 2.204}, 'WAVFiles/ExperimentFiles/CM_S_WC.wav': {'start': 413.964, 'length': 1.974}, 'WAVFiles/ExperimentFiles/J_S_DMS.wav': {'start': 416.438, 'length': 2.3}, 'WAVFiles/ExperimentFiles/CM_P_PWall.wav': {'start': 419.238, 'length': 1.981}, 'WAVFiles/ExperimentFiles/CM_P_FBlanket.wav': {'start': 421.719, 'length': 1.897}, 'WAVFiles/ExperimentFiles/CM_S_RBook.wav': {'start': 424.116, 'length': 1.927}, 'WAVFiles/ExperimentFiles/CJ_P_TF.wav': {'start': 426.543, 'length': 2.085}, 'WAVFiles/ExperimentFiles/CJ_P_BSC.wav': {'start': 429.128, 'length': 2.478}, 'WAVFiles/ExperimentFiles/CM_S_BC.wav': {'start': 432.106, 'length': 1.996}, 'WAVFiles/ExperimentFiles/J_S_BB.wav': {'start': 434.602, 'length': 2.292}, 'WAVFiles/ExperimentFiles/J_S_WC.wav': {'start': 437.394, 'length': 2.062}, 'WAVFiles/ExperimentFiles/J_S_FBlanket.wav': {'start': 439.956, 'length': 2.116}, 'WAVFiles/ExperimentFiles/CM_P_DMS.wav': {'start': 442.572, 'length': 2.186}, 'WAVFiles/ExperimentFiles/CM_P_FR.wav': {'start': 445.258, 'length': 1.887}, 'WAVFiles/ExperimentFiles/CM_P_KB.wav': {'start': 447.645, 'length': 1.747}, 'WAVFiles/ExperimentFiles/CM_P_JF.wav': {'start': 449.892, 'length': 2.137}, 'WAVFiles/ExperimentFiles/J_S_BC.wav': {'start': 452.529, 'length': 2.084}, 'WAVFiles/ExperimentFiles/CJ_P_FBlanket.wav': {'start': 455.113, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CM_P_BSC.wav': {'start': 457.618, 'length': 2.384}, 'WAVFiles/ExperimentFiles/CJ_P_SF.wav': {'start': 460.502, 'length': 2.021}, 'WAVFiles/ExperimentFiles/J_S_PA.wav': {'start': 463.023, 'length': 2.247}, 'WAVFiles/ExperimentFiles/CM_S_BCat.wav': {'start': 465.77, 'length': 1.983}, 'WAVFiles/ExperimentFiles/J_S_PW.wav': {'start': 468.253, 'length': 2.162}, 'WAVFiles/ExperimentFiles/J_S_RH.wav': {'start': 470.915, 'length': 2.167}, 'WAVFiles/ExperimentFiles/CM_S_PC.wav': {'start': 473.582, 'length': 2.012}, 'WAVFiles/ExperimentFiles/CM_P_TF.wav': {'start': 476.094, 'length': 1.991}, 'WAVFiles/ExperimentFiles/CM_S_PA.wav': {'start': 478.585, 'length': 2.157}, 'WAVFiles/ExperimentFiles/CM_S_CTree.wav': {'start': 481.242, 'length': 1.917}, 'WAVFiles/ExperimentFiles/CJ_P_DMS.wav': {'start': 483.659, 'length': 2.354}, 'WAVFiles/ExperimentFiles/J_S_PC.wav': {'start': 486.513, 'length': 2.101}, 'WAVFiles/ExperimentFiles/CM_S_RH.wav': {'start': 489.114, 'length': 2.078}, 'WAVFiles/ExperimentFiles/J_S_BSC.wav': {'start': 491.692, 'length': 2.5}, 'WAVFiles/ExperimentFiles/CM_S_PW.wav': {'start': 494.692, 'length': 2.073}, 'WAVFiles/ExperimentFiles/CJ_P_FR.wav': {'start': 497.265, 'length': 1.981}, 'WAVFiles/ExperimentFiles/CJ_P_KB.wav': {'start': 499.746, 'length': 1.842}, 'WAVFiles/ExperimentFiles/CJ_P_JF.wav': {'start': 502.088, 'length': 2.232}, 'WAVFiles/ExperimentFiles/CM_S_HB.wav': {'start': 504.82, 'length': 2.054}, 'WAVFiles/ExperimentFiles/CM_P_WM.wav': {'start': 507.374, 'length': 2.0}, 'WAVFiles/ExperimentFiles/CJ_P_CTree.wav': {'start': 509.874, 'length': 1.941}, 'WAVFiles/ExperimentFiles/CM_S_DMS.wav': {'start': 512.315, 'length': 2.212}, 'WAVFiles/ExperimentFiles/J_S_PF.wav': {'start': 515.027, 'length': 2.352}, 'WAVFiles/ExperimentFiles/CM_P_MB.wav': {'start': 517.879, 'length': 2.119}, 'WAVFiles/ExperimentFiles/J_S_EP.wav': {'start': 520.498, 'length': 2.163}, 'WAVFiles/ExperimentFiles/CM_S_HC.wav': {'start': 523.161, 'length': 2.14}, 'WAVFiles/ExperimentFiles/CM_P_TB.wav': {'start': 525.801, 'length': 2.327}, 'WAVFiles/ExperimentFiles/CJ_P_FB.wav': {'start': 528.628, 'length': 2.025}, 'WAVFiles/ExperimentFiles/J_S_HB.wav': {'start': 531.153, 'length': 2.143}, 'WAVFiles/ExperimentFiles/CM_S_PF.wav': {'start': 533.796, 'length': 2.263}, 'WAVFiles/ExperimentFiles/CM_S_EP.wav': {'start': 536.559, 'length': 2.075}, 'WAVFiles/ExperimentFiles/J_S_HC.wav': {'start': 539.134, 'length': 2.229}, 'WAVFiles/ExperimentFiles/CJ_P_BCat.wav': {'start': 541.863, 'length': 2.058}, 'WAVFiles/ExperimentFiles/J_S_FR.wav': {'start': 544.421, 'length': 2.241}, 'WAVFiles/ExperimentFiles/J_S_KB.wav': {'start': 547.162, 'length': 1.998}, 'WAVFiles/ExperimentFiles/J_S_JF.wav': {'start': 549.66, 'length': 2.07}, 'WAVFiles/ExperimentFiles/CJ_P_PC.wav': {'start': 552.23, 'length': 1.865}, 'WAVFiles/ExperimentFiles/CM_P_BC.wav': {'start': 554.595, 'length': 1.94}, 'WAVFiles/ExperimentFiles/CM_P_BB.wav': {'start': 557.035, 'length': 2.186}, 'WAVFiles/ExperimentFiles/CM_S_SF.wav': {'start': 559.721, 'length': 1.96}, 'WAVFiles/ExperimentFiles/CM_P_WC.wav': {'start': 562.181, 'length': 1.952}, 'WAVFiles/ExperimentFiles/CM_S_JF.wav': {'start': 564.633, 'length': 1.982}, 'WAVFiles/ExperimentFiles/CM_S_KB.wav': {'start': 567.115, 'length': 1.905}, 'WAVFiles/ExperimentFiles/CM_S_FR.wav': {'start': 569.52, 'length': 2.153}, 'WAVFiles/ExperimentFiles/CJ_P_PW.wav': {'start': 572.173, 'length': 2.231}, 'WAVFiles/ExperimentFiles/CJ_P_RH.wav': {'start': 574.904, 'length': 2.123}, 'WAVFiles/ExperimentFiles/CJ_P_HTB.wav': {'start': 577.527, 'length': 2.137}, 'WAVFiles/ExperimentFiles/CM_P_CTree.wav': {'start': 580.164, 'length': 1.846}, 'WAVFiles/ExperimentFiles/J_S_SF.wav': {'start': 582.51, 'length': 2.049}, 'WAVFiles/ExperimentFiles/CJ_P_PA.wav': {'start': 585.059, 'length': 2.249}, 'WAVFiles/ExperimentFiles/CJ_P_HC.wav': {'start': 587.808, 'length': 2.144}, 'WAVFiles/ExperimentFiles/CM_P_WD.wav': {'start': 590.452, 'length': 2.134}, 'WAVFiles/ExperimentFiles/CM_S_HTB.wav': {'start': 593.086, 'length': 2.136}, 'WAVFiles/ExperimentFiles/J_S_FB.wav': {'start': 595.722, 'length': 2.182}, 'WAVFiles/ExperimentFiles/CJ_P_HB.wav': {'start': 598.404, 'length': 2.142}, 'WAVFiles/ExperimentFiles/CJ_P_EP.wav': {'start': 601.046, 'length': 2.114}, 'WAVFiles/ExperimentFiles/CJ_P_PF.wav': {'start': 603.66, 'length': 2.37}, 'WAVFiles/ExperimentFiles/J_S_BCat.wav': {'start': 606.53, 'length': 2.072}, 'WAVFiles/ExperimentFiles/CM_P_CT.wav': {'start': 609.102, 'length': 2.023}, 'WAVFiles/ExperimentFiles/J_S_CTree.wav': {'start': 611.625, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CM_S_FB.wav': {'start': 614.13, 'length': 2.093}, 'WAVFiles/ExperimentFiles/CM_S_MB.wav': {'start': 616.723, 'length': 2.082}, 'WAVFiles/ExperimentFiles/CM_P_HC.wav': {'start': 619.305, 'length': 2.05}, 'WAVFiles/ExperimentFiles/CJ_P_WD.wav': {'start': 621.855, 'length': 2.229}, 'WAVFiles/ExperimentFiles/J_S_RBook.wav': {'start': 624.584, 'length': 2.015}, 'WAVFiles/ExperimentFiles/J_S_TB.wav': {'start': 627.099, 'length': 2.411}, 'WAVFiles/ExperimentFiles/CM_S_WM.wav': {'start': 630.01, 'length': 2.08}, 'WAVFiles/ExperimentFiles/CM_P_HB.wav': {'start': 632.59, 'length': 2.047}, 'WAVFiles/ExperimentFiles/CM_P_PF.wav': {'start': 635.137, 'length': 2.276}, 'WAVFiles/ExperimentFiles/J_S_MB.wav': {'start': 637.913, 'length': 2.171}, 'WAVFiles/ExperimentFiles/CM_P_EP.wav': {'start': 640.584, 'length': 2.02}, 'WAVFiles/ExperimentFiles/CJ_P_PWall.wav': {'start': 643.104, 'length': 2.075}, 'WAVFiles/ExperimentFiles/J_S_WM.wav': {'start': 645.679, 'length': 2.168}, 'WAVFiles/ExperimentFiles/CM_S_TB.wav': {'start': 648.347, 'length': 2.323}, 'WAVFiles/ExperimentFiles/CJ_P_CT.wav': {'start': 651.17, 'length': 2.118}, 'WAVFiles/ExperimentFiles/CM_S_FBlanket.wav': {'start': 653.788, 'length': 2.028}, 'WAVFiles/ExperimentFiles/CM_P_PC.wav': {'start': 656.316, 'length': 1.771}, 'WAVFiles/ExperimentFiles/CJ_P_BC.wav': {'start': 658.587, 'length': 2.034}, 'WAVFiles/ExperimentFiles/CM_P_RBook.wav': {'start': 661.121, 'length': 1.834}, 'WAVFiles/ExperimentFiles/CM_S_TF.wav': {'start': 663.455, 'length': 1.926}, 'WAVFiles/ExperimentFiles/J_S_HTB.wav': {'start': 665.881, 'length': 2.224}, 'WAVFiles/ExperimentFiles/CM_S_PWall.wav': {'start': 668.605, 'length': 2.0}, 'WAVFiles/ExperimentFiles/CJ_P_WC.wav': {'start': 671.105, 'length': 2.046}, 'WAVFiles/ExperimentFiles/CJ_P_BB.wav': {'start': 673.651, 'length': 2.28}, 'WAVFiles/ExperimentFiles/CM_P_PW.wav': {'start': 676.431, 'length': 2.137}, 'WAVFiles/ExperimentFiles/CM_P_RH.wav': {'start': 679.068, 'length': 2.029}, 'WAVFiles/ExperimentFiles/J_S_TF.wav': {'start': 681.597, 'length': 2.014}, 'WAVFiles/ExperimentFiles/CM_P_HTB.wav': {'start': 684.111, 'length': 2.043}, 'WAVFiles/ExperimentFiles/CM_P_BCat.wav': {'start': 686.654, 'length': 1.964}, 'WAVFiles/ExperimentFiles/CM_P_PA.wav': {'start': 689.118, 'length': 2.154}}};

