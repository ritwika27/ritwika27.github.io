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
    new Choice("C3", "Boy1_Ball.jpg.jpg")
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
    new Choice("C3", "Girl1_Cart.png")
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
    new Choice("C1", "Boy2_3Cart.jpg"),
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


_global_audio_object = {'file': 'AUDIO_SHEET.mp3', 'locations': {'WAVFiles/Reinforcement/Slide9_IncorrectFeedback.wav': {'start': 0, 'length': 12.744}, 'WAVFiles/Reinforcement/LandingPage3.wav': {'start': 13.244, 'length': 7.648}, 'WAVFiles/Reinforcement/LandingPage2.wav': {'start': 21.392, 'length': 8.007}, 'WAVFiles/Reinforcement/LandingPage6.wav': {'start': 29.899, 'length': 10.052}, 'WAVFiles/Reinforcement/LandingPage7.wav': {'start': 40.451, 'length': 11.23}, 'WAVFiles/Reinforcement/LandingPage5.wav': {'start': 52.181, 'length': 8.107}, 'WAVFiles/Reinforcement/Slide8_Incorrect_JRtable.mp3': {'start': 60.788, 'length': 14.916}, 'WAVFiles/Reinforcement/LandingPage4.wav': {'start': 76.204, 'length': 8.334}, 'WAVFiles/Reinforcement/Slide10_Incorrect_JRpaper.mp3': {'start': 85.038, 'length': 13.714}, 'WAVFiles/Reinforcement/Slide6_IncorrectFeedback.mp3': {'start': 99.252, 'length': 11.938}, 'WAVFiles/Reinforcement/Slide9_Incorrect_JRmovie.mp3': {'start': 111.69, 'length': 14.916}, 'WAVFiles/Reinforcement/Slide72_IncorrectFeedback.wav': {'start': 127.106, 'length': 12.345}, 'WAVFiles/Reinforcement/Slide8_IncorrectFeedback.wav': {'start': 139.951, 'length': 12.578}, 'WAVFiles/Reinforcement/Slide12_LandingPage1.wav': {'start': 153.029, 'length': 6.611}, 'WAVFiles/Reinforcement/Slide7_Incorrect_Jpiano.mp3': {'start': 160.14, 'length': 13.714}, 'WAVFiles/Reinforcement/Slide71_IncorrectFeedback.wav': {'start': 174.354, 'length': 12.096}, 'WAVFiles/Reinforcement/Slide6_9_CorrectFeedback.wav': {'start': 186.95, 'length': 5.213}, 'WAVFiles/Introduction_Instructions/Slide7_EvalName.wav': {'start': 192.663, 'length': 13.92}, 'WAVFiles/Introduction_Instructions/Slide6_TouchJR_S.wav': {'start': 207.083, 'length': 3.562}, 'WAVFiles/Introduction_Instructions/Slide7_IntrotoEX.wav': {'start': 211.145, 'length': 25.757}, 'WAVFiles/Introduction_Instructions/Slide4_WearHeadphones.wav': {'start': 237.402, 'length': 5.469}, 'WAVFiles/Introduction_Instructions/Slide5_StoryIntro.wav': {'start': 243.371, 'length': 35.572}, 'WAVFiles/Introduction_Instructions/Slide6_Touch_JR_P.wav': {'start': 279.443, 'length': 3.837}, 'WAVFiles/Introduction_Instructions/Slide6_TouchJerimiah.wav': {'start': 283.78, 'length': 4.528}, 'WAVFiles/Introduction_Instructions/Slide8_IntroToExperiment.wav': {'start': 288.808, 'length': 19.804}, 'WAVFiles/Introduction_Instructions/Slide3CGInstructions.wav': {'start': 309.112, 'length': 47.8}, 'WAVFiles/Introduction_Instructions/Slide6_IntroToNames.wav': {'start': 357.412, 'length': 48.213}, 'WAVFiles/Introduction_Instructions/Slide10_LetsBegin.wav': {'start': 406.125, 'length': 19.309}, 'WAVFiles/Introduction_Instructions/Slide6_TouchCJ.wav': {'start': 425.934, 'length': 3.841}, 'WAVFiles/Examples/Slide72_JR_S_WM.wav': {'start': 430.275, 'length': 3.25}, 'WAVFiles/Examples/Slide8_CJ_P_CP.wav': {'start': 434.025, 'length': 2.929}, 'WAVFiles/Examples/Slide71_J_S_PP.wav': {'start': 437.454, 'length': 3.246}, 'WAVFiles/Examples/Slide9_JR_P_CT.wav': {'start': 441.2, 'length': 2.973}, 'WAVFiles/Examples/Slide9_JR_Asing_movie.wav': {'start': 444.673, 'length': 2.932}, 'WAVFiles/Examples/Slide10_JRAplural_paper.wav': {'start': 448.105, 'length': 3.238}, 'WAVFiles/Examples/Slide8_JR_Asing_table.wav': {'start': 451.843, 'length': 3.183}, 'WAVFiles/Examples/Slide7_J_UA_Piano.wav': {'start': 455.526, 'length': 2.473}, 'WAVFiles/ExperimentFiles/J_S_CT.wav': {'start': 458.499, 'length': 2.126}, 'WAVFiles/ExperimentFiles/CJ_P_WM.wav': {'start': 461.125, 'length': 2.094}, 'WAVFiles/ExperimentFiles/CM_S_WD.wav': {'start': 463.719, 'length': 2.029}, 'WAVFiles/ExperimentFiles/J_S_PWall.wav': {'start': 466.248, 'length': 2.089}, 'WAVFiles/ExperimentFiles/CJ_P_MB.wav': {'start': 468.837, 'length': 2.213}, 'WAVFiles/ExperimentFiles/CJ_P_RBook.wav': {'start': 471.55, 'length': 1.928}, 'WAVFiles/ExperimentFiles/CM_S_CT.wav': {'start': 473.978, 'length': 2.038}, 'WAVFiles/ExperimentFiles/CJ_P_TB.wav': {'start': 476.516, 'length': 2.422}, 'WAVFiles/ExperimentFiles/CM_P_FB.wav': {'start': 479.438, 'length': 1.931}, 'WAVFiles/ExperimentFiles/CM_S_BSC.wav': {'start': 481.869, 'length': 2.412}, 'WAVFiles/ExperimentFiles/J_S_WD.wav': {'start': 484.781, 'length': 2.118}, 'WAVFiles/ExperimentFiles/CM_P_SF.wav': {'start': 487.399, 'length': 1.927}, 'WAVFiles/ExperimentFiles/CM_S_BB.wav': {'start': 489.826, 'length': 2.204}, 'WAVFiles/ExperimentFiles/CM_S_WC.wav': {'start': 492.53, 'length': 1.974}, 'WAVFiles/ExperimentFiles/J_S_DMS.wav': {'start': 495.004, 'length': 2.3}, 'WAVFiles/ExperimentFiles/CM_P_PWall.wav': {'start': 497.804, 'length': 1.981}, 'WAVFiles/ExperimentFiles/CM_P_FBlanket.wav': {'start': 500.285, 'length': 1.897}, 'WAVFiles/ExperimentFiles/CM_S_RBook.wav': {'start': 502.682, 'length': 1.927}, 'WAVFiles/ExperimentFiles/CJ_P_TF.wav': {'start': 505.109, 'length': 2.085}, 'WAVFiles/ExperimentFiles/CJ_P_BSC.wav': {'start': 507.694, 'length': 2.478}, 'WAVFiles/ExperimentFiles/CM_S_BC.wav': {'start': 510.672, 'length': 1.996}, 'WAVFiles/ExperimentFiles/J_S_BB.wav': {'start': 513.168, 'length': 2.292}, 'WAVFiles/ExperimentFiles/J_S_WC.wav': {'start': 515.96, 'length': 2.062}, 'WAVFiles/ExperimentFiles/J_S_FBlanket.wav': {'start': 518.522, 'length': 2.116}, 'WAVFiles/ExperimentFiles/CM_P_DMS.wav': {'start': 521.138, 'length': 2.186}, 'WAVFiles/ExperimentFiles/CM_P_FR.wav': {'start': 523.824, 'length': 1.887}, 'WAVFiles/ExperimentFiles/CM_P_KB.wav': {'start': 526.211, 'length': 1.747}, 'WAVFiles/ExperimentFiles/CM_P_JF.wav': {'start': 528.458, 'length': 2.137}, 'WAVFiles/ExperimentFiles/J_S_BC.wav': {'start': 531.095, 'length': 2.084}, 'WAVFiles/ExperimentFiles/CJ_P_FBlanket.wav': {'start': 533.679, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CM_P_BSC.wav': {'start': 536.184, 'length': 2.384}, 'WAVFiles/ExperimentFiles/CJ_P_SF.wav': {'start': 539.068, 'length': 2.021}, 'WAVFiles/ExperimentFiles/J_S_PA.wav': {'start': 541.589, 'length': 2.247}, 'WAVFiles/ExperimentFiles/CM_S_BCat.wav': {'start': 544.336, 'length': 1.983}, 'WAVFiles/ExperimentFiles/J_S_PW.wav': {'start': 546.819, 'length': 2.162}, 'WAVFiles/ExperimentFiles/J_S_RH.wav': {'start': 549.481, 'length': 2.167}, 'WAVFiles/ExperimentFiles/CM_S_PC.wav': {'start': 552.148, 'length': 2.012}, 'WAVFiles/ExperimentFiles/CM_P_TF.wav': {'start': 554.66, 'length': 1.991}, 'WAVFiles/ExperimentFiles/CM_S_PA.wav': {'start': 557.151, 'length': 2.157}, 'WAVFiles/ExperimentFiles/CM_S_CTree.wav': {'start': 559.808, 'length': 1.917}, 'WAVFiles/ExperimentFiles/CJ_P_DMS.wav': {'start': 562.225, 'length': 2.354}, 'WAVFiles/ExperimentFiles/J_S_PC.wav': {'start': 565.079, 'length': 2.101}, 'WAVFiles/ExperimentFiles/CM_S_RH.wav': {'start': 567.68, 'length': 2.078}, 'WAVFiles/ExperimentFiles/J_S_BSC.wav': {'start': 570.258, 'length': 2.5}, 'WAVFiles/ExperimentFiles/CM_S_PW.wav': {'start': 573.258, 'length': 2.073}, 'WAVFiles/ExperimentFiles/CJ_P_FR.wav': {'start': 575.831, 'length': 1.981}, 'WAVFiles/ExperimentFiles/CJ_P_KB.wav': {'start': 578.312, 'length': 1.842}, 'WAVFiles/ExperimentFiles/CJ_P_JF.wav': {'start': 580.654, 'length': 2.232}, 'WAVFiles/ExperimentFiles/CM_S_HB.wav': {'start': 583.386, 'length': 2.054}, 'WAVFiles/ExperimentFiles/CM_P_WM.wav': {'start': 585.94, 'length': 2.0}, 'WAVFiles/ExperimentFiles/CJ_P_CTree.wav': {'start': 588.44, 'length': 1.941}, 'WAVFiles/ExperimentFiles/CM_S_DMS.wav': {'start': 590.881, 'length': 2.212}, 'WAVFiles/ExperimentFiles/J_S_PF.wav': {'start': 593.593, 'length': 2.352}, 'WAVFiles/ExperimentFiles/CM_P_MB.wav': {'start': 596.445, 'length': 2.119}, 'WAVFiles/ExperimentFiles/J_S_EP.wav': {'start': 599.064, 'length': 2.163}, 'WAVFiles/ExperimentFiles/CM_S_HC.wav': {'start': 601.727, 'length': 2.14}, 'WAVFiles/ExperimentFiles/CM_P_TB.wav': {'start': 604.367, 'length': 2.327}, 'WAVFiles/ExperimentFiles/CJ_P_FB.wav': {'start': 607.194, 'length': 2.025}, 'WAVFiles/ExperimentFiles/J_S_HB.wav': {'start': 609.719, 'length': 2.143}, 'WAVFiles/ExperimentFiles/CM_S_PF.wav': {'start': 612.362, 'length': 2.263}, 'WAVFiles/ExperimentFiles/CM_S_EP.wav': {'start': 615.125, 'length': 2.075}, 'WAVFiles/ExperimentFiles/J_S_HC.wav': {'start': 617.7, 'length': 2.229}, 'WAVFiles/ExperimentFiles/CJ_P_BCat.wav': {'start': 620.429, 'length': 2.058}, 'WAVFiles/ExperimentFiles/J_S_FR.wav': {'start': 622.987, 'length': 2.241}, 'WAVFiles/ExperimentFiles/J_S_KB.wav': {'start': 625.728, 'length': 1.998}, 'WAVFiles/ExperimentFiles/J_S_JF.wav': {'start': 628.226, 'length': 2.07}, 'WAVFiles/ExperimentFiles/CJ_P_PC.wav': {'start': 630.796, 'length': 1.865}, 'WAVFiles/ExperimentFiles/CM_P_BC.wav': {'start': 633.161, 'length': 1.94}, 'WAVFiles/ExperimentFiles/CM_P_BB.wav': {'start': 635.601, 'length': 2.186}, 'WAVFiles/ExperimentFiles/CM_S_SF.wav': {'start': 638.287, 'length': 1.96}, 'WAVFiles/ExperimentFiles/CM_P_WC.wav': {'start': 640.747, 'length': 1.952}, 'WAVFiles/ExperimentFiles/CM_S_JF.wav': {'start': 643.199, 'length': 1.982}, 'WAVFiles/ExperimentFiles/CM_S_KB.wav': {'start': 645.681, 'length': 1.905}, 'WAVFiles/ExperimentFiles/CM_S_FR.wav': {'start': 648.086, 'length': 2.153}, 'WAVFiles/ExperimentFiles/CJ_P_PW.wav': {'start': 650.739, 'length': 2.231}, 'WAVFiles/ExperimentFiles/CJ_P_RH.wav': {'start': 653.47, 'length': 2.123}, 'WAVFiles/ExperimentFiles/CJ_P_HTB.wav': {'start': 656.093, 'length': 2.137}, 'WAVFiles/ExperimentFiles/CM_P_CTree.wav': {'start': 658.73, 'length': 1.846}, 'WAVFiles/ExperimentFiles/J_S_SF.wav': {'start': 661.076, 'length': 2.049}, 'WAVFiles/ExperimentFiles/CJ_P_PA.wav': {'start': 663.625, 'length': 2.249}, 'WAVFiles/ExperimentFiles/CJ_P_HC.wav': {'start': 666.374, 'length': 2.144}, 'WAVFiles/ExperimentFiles/CM_P_WD.wav': {'start': 669.018, 'length': 2.134}, 'WAVFiles/ExperimentFiles/CM_S_HTB.wav': {'start': 671.652, 'length': 2.136}, 'WAVFiles/ExperimentFiles/J_S_FB.wav': {'start': 674.288, 'length': 2.182}, 'WAVFiles/ExperimentFiles/CJ_P_HB.wav': {'start': 676.97, 'length': 2.142}, 'WAVFiles/ExperimentFiles/CJ_P_EP.wav': {'start': 679.612, 'length': 2.114}, 'WAVFiles/ExperimentFiles/CJ_P_PF.wav': {'start': 682.226, 'length': 2.37}, 'WAVFiles/ExperimentFiles/J_S_BCat.wav': {'start': 685.096, 'length': 2.072}, 'WAVFiles/ExperimentFiles/CM_P_CT.wav': {'start': 687.668, 'length': 2.023}, 'WAVFiles/ExperimentFiles/J_S_CTree.wav': {'start': 690.191, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CM_S_FB.wav': {'start': 692.696, 'length': 2.093}, 'WAVFiles/ExperimentFiles/CM_S_MB.wav': {'start': 695.289, 'length': 2.082}, 'WAVFiles/ExperimentFiles/CM_P_HC.wav': {'start': 697.871, 'length': 2.05}, 'WAVFiles/ExperimentFiles/CJ_P_WD.wav': {'start': 700.421, 'length': 2.229}, 'WAVFiles/ExperimentFiles/J_S_RBook.wav': {'start': 703.15, 'length': 2.015}, 'WAVFiles/ExperimentFiles/J_S_TB.wav': {'start': 705.665, 'length': 2.411}, 'WAVFiles/ExperimentFiles/CM_S_WM.wav': {'start': 708.576, 'length': 2.08}, 'WAVFiles/ExperimentFiles/CM_P_HB.wav': {'start': 711.156, 'length': 2.047}, 'WAVFiles/ExperimentFiles/CM_P_PF.wav': {'start': 713.703, 'length': 2.276}, 'WAVFiles/ExperimentFiles/J_S_MB.wav': {'start': 716.479, 'length': 2.171}, 'WAVFiles/ExperimentFiles/CM_P_EP.wav': {'start': 719.15, 'length': 2.02}, 'WAVFiles/ExperimentFiles/CJ_P_PWall.wav': {'start': 721.67, 'length': 2.075}, 'WAVFiles/ExperimentFiles/J_S_WM.wav': {'start': 724.245, 'length': 2.168}, 'WAVFiles/ExperimentFiles/CM_S_TB.wav': {'start': 726.913, 'length': 2.323}, 'WAVFiles/ExperimentFiles/CJ_P_CT.wav': {'start': 729.736, 'length': 2.118}, 'WAVFiles/ExperimentFiles/CM_S_FBlanket.wav': {'start': 732.354, 'length': 2.028}, 'WAVFiles/ExperimentFiles/CM_P_PC.wav': {'start': 734.882, 'length': 1.771}, 'WAVFiles/ExperimentFiles/CJ_P_BC.wav': {'start': 737.153, 'length': 2.034}, 'WAVFiles/ExperimentFiles/CM_P_RBook.wav': {'start': 739.687, 'length': 1.834}, 'WAVFiles/ExperimentFiles/CM_S_TF.wav': {'start': 742.021, 'length': 1.926}, 'WAVFiles/ExperimentFiles/J_S_HTB.wav': {'start': 744.447, 'length': 2.224}, 'WAVFiles/ExperimentFiles/CM_S_PWall.wav': {'start': 747.171, 'length': 2.0}, 'WAVFiles/ExperimentFiles/CJ_P_WC.wav': {'start': 749.671, 'length': 2.046}, 'WAVFiles/ExperimentFiles/CJ_P_BB.wav': {'start': 752.217, 'length': 2.28}, 'WAVFiles/ExperimentFiles/CM_P_PW.wav': {'start': 754.997, 'length': 2.137}, 'WAVFiles/ExperimentFiles/CM_P_RH.wav': {'start': 757.634, 'length': 2.029}, 'WAVFiles/ExperimentFiles/J_S_TF.wav': {'start': 760.163, 'length': 2.014}, 'WAVFiles/ExperimentFiles/CM_P_HTB.wav': {'start': 762.677, 'length': 2.043}, 'WAVFiles/ExperimentFiles/CM_P_BCat.wav': {'start': 765.22, 'length': 1.964}, 'WAVFiles/ExperimentFiles/CM_P_PA.wav': {'start': 767.684, 'length': 2.154}}}
