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
new QuadPage("JR were drinking the milkshake", "JR_P_DMS.wav",
    [
    new Choice("T", "Girl2_3_Milkshake.jpg"),
    new Choice("C1", "Girl1_Milkshake.jpg"),
    new Choice("C2", "Boy2_3_Milkshake.jpg"),
    new Choice("C3", "Boy1_Milkshake.jpg")
    ])
,
new QuadPage("JR were hugging the teddy bear", "JR_P_HTB.wav",
    [
    new Choice("T", "Girl2_3_Bear.jpg"),
    new Choice("C1", "Girl1_Bear.jpg"),
    new Choice("C2", "Boy2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("JR were picking the apples", "JR_P_PA.wav",
    [
    new Choice("T", "Girl2_3_Apples.jpg"),
    new Choice("C1", "Girl1_Apples.jpg"),
    new Choice("C2", "Boy2_3_Apples.jpg"),
    new Choice("C3", "Boy1_Apples.jpg")
    ])
,
new QuadPage("JR were planting the flowers", "JR_P_PF.wav",
    [
    new Choice("T", "Girl2_3_Flowers.jpg"),
    new Choice("C1", "Girl1_Flowers.jpg"),
    new Choice("C2", "Boy2_3_Flowers.jpg"),
    new Choice("C3", "Boy1_Flowers.jpg")
    ])
,
new QuadPage("JR were eating a pizza", "JR_P_EP.wav",
    [
    new Choice("T", "Girl2_3_Pizza.jpg"),
    new Choice("C1", "Girl1_Pizza.jpg"),
    new Choice("C2", "Boy2_3_Pizza.jpg"),
    new Choice("C3", "Boy1_Pizza.jpg")
    ])
,
new QuadPage("JR were baking a cake", "JR_P_BC.wav",
    [
    new Choice("T", "Girl2_3_Cake.jpg"),
    new Choice("C1", "Girl1_Cake.jpg"),
    new Choice("C2", "Boy2_3_Cake.jpg"),
    new Choice("C3", "Boy1_Cake.jpg")
    ])
,
new QuadPage("JR were walkng a dog", "JR_P_WD.wav",
    [
    new Choice("T", "Girl2_3_Dog.jpg"),
    new Choice("C1", "Girl1_Dog.jpg"),
    new Choice("C2", "Boy2_3_Dog.jpg"),
    new Choice("C3", "Boy1_Dog.jpg")
    ])
,
new QuadPage("JR was washing a car", "JR_S_WC.wav",
    [
    new Choice("T", "Girl1_Car.jpg"),
    new Choice("C1", "Boy2_3_Car.jpg"),
    new Choice("C2", "Girl2_3_Car.jpg"),
    new Choice("C3", "Boy1_Car.jpg")
    ])
,
new QuadPage("JR was reading a book", "JR_S_RBook.wav",
    [
    new Choice("T", "Girl1_Book.jpg"),
    new Choice("C1", "Boy2_3_Book.jpg"),
    new Choice("C2", "Girl2_3_Book.jpg"),
    new Choice("C3", "Boy1_Book.jpg")
    ])
,
new QuadPage("JR was kicking a ball", "JR_S_KB.wav",
    [
    new Choice("T", "Girl1_Ball.jpg"),
    new Choice("C1", "Boy2_3_Ball.jpg"),
    new Choice("C2", "Girl2_3_Ball.jpg"),
    new Choice("C3", "Boy1_Ball.jpg")
    ])
,
new QuadPage("JR was riding a horse", "JR_S_RH.wav",
    [
    new Choice("T", "Girl1_Horse.jpg"),
    new Choice("C1", "Boy2_3_Horse.jpg"),
    new Choice("C2", "Girl2_3_Horse.jpg"),
    new Choice("C3", "Boy1_Horse.jpg")
    ])
,
new QuadPage("JR was pulling a wagon", "JR_S_PW.wav",
    [
    new Choice("T", "Girl1_Wagon.jpg"),
    new Choice("C1", "Boy2_3_Wagon.jpg"),
    new Choice("C2", "Girl2_3_Wagon.jpg"),
    new Choice("C3", "Boy1_Wagon.jpg")
    ])
,
new QuadPage("JR was folding a blanket", "JR_S_FBlanket.wav",
    [
    new Choice("T", "Girl1_Blanket.jpg"),
    new Choice("C1", "Boy2_3_Blanket.jpg"),
    new Choice("C2", "Girl2_3_Blanket.jpg"),
    new Choice("C3", "Boy1_Blanket.jpg")
    ])
,
new QuadPage("JR was climbing a tree", "JR_S_CTree.wav",
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
new QuadPage("JR were feeding the rabbit", "JR_P_FR.wav",
    [
    new Choice("T", "Girl2_3_Rabbit.png"),
    new Choice("C1", "Boy2_3_Rabbit.png"),
    new Choice("C2", "Girl1_Rabbit.png"),
    new Choice("C3", "Boy1_Rabbit.png")
    ])
,
new QuadPage("JR were touching the frog", "JR_P_TF.wav",
    [
    new Choice("T", "Girl2_3_Frog.jpg"),
    new Choice("C1", "Boy2_3_Frog.jpg"),
    new Choice("C2", "Girl1_Frog.jpg"),
    new Choice("C3", "Boy1_Frog.jpg")
    ])
,
new QuadPage("JR were holding the basket", "JR_P_HB.wav",
    [
    new Choice("T", "Girl2_3_Basket.jpg"),
    new Choice("C1", "Boy2_3_Basket.jpg"),
    new Choice("C2", "Girl1_Basket.jpg"),
    new Choice("C3", "Boy1_Basket.jpg")
    ])
,
new QuadPage("JR were building the sandcastle", "JR_P_BSC.wav",
    [
    new Choice("T", "Girl2_3_Sandcastle.jpg"),
    new Choice("C1", "Boy2_3_Sandcastle.jpg"),
    new Choice("C2", "Girl1_Sandcastle.jpg"),
    new Choice("C3", "Boy1_Sandcastle.jpg")
    ])
,
new QuadPage("JR were painting the wall", "JR_P_PWall.wav",
    [
    new Choice("T", "Girl2_3_Wall.jpg"),
    new Choice("C1", "Boy2_3_Wall.jpg"),
    new Choice("C2", "Girl1_Wall.jpg"),
    new Choice("C3", "Boy1_Wall.jpg")
    ])
,
new QuadPage("JR were jumping the fence", "JR_P_JF.wav",
    [
    new Choice("T", "Girl2_3_Fence.jpg"),
    new Choice("C1", "Boy2_3_Fence.jpg"),
    new Choice("C2", "Girl1_Fence.jpg"),
    new Choice("C3", "Boy1_Fence.jpg")
    ])
,
new QuadPage("JR were moving the box", "JR_P_MB.wav",
    [
    new Choice("T", "Girl2_3_Box.jpg"),
    new Choice("C1", "Boy2_3_Box.jpg"),
    new Choice("C2", "Girl1_Box.jpg"),
    new Choice("C3", "Boy1_Box.jpg")
    ])
,
new QuadPage("JR was drinking the milkshake", "JR_S_DMS.wav",
    [
    new Choice("T", "Girl1_Milkshake.jpg"),
    new Choice("C1", "Boy2_3_Milkshake.jpg"),
    new Choice("C2", "Girl2_3_Milkshake.jpg"),
    new Choice("C3", "Boy1_Milkshake.jpg")
    ])
,
new QuadPage("JR was hugging the teddy bear", "JR_S_HTB.wav",
    [
    new Choice("T", "Girl1_Bear.jpg"),
    new Choice("C1", "Boy2_3_Bear.jpg"),
    new Choice("C2", "Girl2_3_Bear.jpg"),
    new Choice("C3", "Boy1_Bear.jpg")
    ])
,
new QuadPage("JR was picking the apples", "JR_S_PA.wav",
    [
    new Choice("T", "Girl1_Apples.jpg"),
    new Choice("C1", "Boy2_3_Apples.jpg"),
    new Choice("C2", "Girl2_3_Apples.jpg"),
    new Choice("C3", "Boy1_Apples.jpg")
    ])
,
new QuadPage("JR was planting the flowers", "JR_S_PF.wav",
    [
    new Choice("T", "Girl1_Flowers.jpg"),
    new Choice("C1", "Boy2_3_Flowers.jpg"),
    new Choice("C2", "Girl2_3_Flowers.jpg"),
    new Choice("C3", "Boy1_Flowers.jpg")
    ])
,
new QuadPage("JR was eating a pizza", "JR_S_EP.wav",
    [
    new Choice("T", "Girl1_Pizza.jpg"),
    new Choice("C1", "Boy2_3_Pizza.jpg"),
    new Choice("C2", "Girl2_3_Pizza.jpg"),
    new Choice("C3", "Boy1_Pizza.jpg")
    ])
,
new QuadPage("JR was baking a cake", "JR_S_BC.wav",
    [
    new Choice("T", "Girl1_Cake.jpg"),
    new Choice("C1", "Boy2_3_Cake.jpg"),
    new Choice("C2", "Girl2_3_Cake.jpg"),
    new Choice("C3", "Boy1_Cake.jpg")
    ])
,
new QuadPage("JR was walkng a dog", "JR_S_WD.wav",
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
],[new QuadPage("JR were throwing the baseball", "JR_P_TB.wav",
    [
    new Choice("T", "Girl2_3_Baseball.jpg"),
    new Choice("C1", "Boy2_3_Baseball.jpg"),
    new Choice("C2", "Girl1_Baseball.jpg"),
    new Choice("C3", "Boy1_Baseball.jpg")
    ])
,
new QuadPage("JR were hanging the clothes", "JR_P_HC.wav",
    [
    new Choice("T", "Girl2_3_Clothes.jpg"),
    new Choice("C1", "Boy2_3_Clothes.jpg"),
    new Choice("C2", "Girl1_Clothes.jpg"),
    new Choice("C3", "Boy1_Clothes.jpg")
    ])
,
new QuadPage("JR were blowing the bubbles", "JR_P_BB.wav",
    [
    new Choice("T", "Girl2_3_Bubbles.jpg"),
    new Choice("C1", "Boy2_3_Bubbles.jpg"),
    new Choice("C2", "Girl1_Bubbles.jpg"),
    new Choice("C3", "Boy1_Bubbles.jpg")
    ])
,
new QuadPage("JR were sweeping the floor", "JR_P_SF.wav",
    [
    new Choice("T", "Girl2_3_Floor.jpg"),
    new Choice("C1", "Boy2_3_Floor.jpg"),
    new Choice("C2", "Girl1_Floor.jpg"),
    new Choice("C3", "Boy1_Floor.jpg")
    ])
,
new QuadPage("JR were fixing the bike", "JR_P_FB.wav",
    [
    new Choice("T", "Girl2_3_Bike.png"),
    new Choice("C1", "Boy2_3_Bike.png"),
    new Choice("C2", "Girl1_Bike.png"),
    new Choice("C3", "Boy1_Bike.png")
    ])
,
new QuadPage("JR were pushing the cart", "JR_P_PC.wav",
    [
    new Choice("T", "Girl2_3_Cart.png"),
    new Choice("C1", "Boy2_3_Cart.png"),
    new Choice("C2", "Girl1_Cart.png"),
    new Choice("C3", "Boy1_Cart.png")
    ])
,
new QuadPage("JR were brushing the cat", "JR_P_BCat.wav",
    [
    new Choice("T", "Girl2_3_Cat.png"),
    new Choice("C1", "Boy2_3_Cat.png"),
    new Choice("C2", "Girl1_Cat.png"),
    new Choice("C3", "Boy1_Cat.png")
    ])
,
new QuadPage("JR was feeding the rabbit", "JR_S_FR.wav",
    [
    new Choice("T", "Girl1_Rabbit.png"),
    new Choice("C1", "Boy2_3_Rabbit.png"),
    new Choice("C2", "Girl2_3_Rabbit.png"),
    new Choice("C3", "Boy1_Rabbit.png")
    ])
,
new QuadPage("JR was touching the frog", "JR_S_TF.wav",
    [
    new Choice("T", "Girl1_Frog.jpg"),
    new Choice("C1", "Boy2_3_Frog.jpg"),
    new Choice("C2", "Girl2_3_Frog.jpg"),
    new Choice("C3", "Boy1_Frog.jpg")
    ])
,
new QuadPage("JR was holding the basket", "JR_S_HB.wav",
    [
    new Choice("T", "Girl1_Basket.jpg"),
    new Choice("C1", "Boy2_3_Basket.jpg"),
    new Choice("C2", "Girl2_3_Basket.jpg"),
    new Choice("C3", "Boy1_Basket.jpg")
    ])
,
new QuadPage("JR was building the sandcastle", "JR_S_BSC.wav",
    [
    new Choice("T", "Girl1_Sandcastle.jpg"),
    new Choice("C1", "Boy2_3_Sandcastle.jpg"),
    new Choice("C2", "Girl2_3_Sandcastle.jpg"),
    new Choice("C3", "Boy1_Sandcastle.jpg")
    ])
,
new QuadPage("JR was painting the wall", "JR_S_PWall.wav",
    [
    new Choice("T", "Girl1_Wall.jpg"),
    new Choice("C1", "Boy2_3_Wall.jpg"),
    new Choice("C2", "Girl2_3_Wall.jpg"),
    new Choice("C3", "Boy1_Wall.jpg")
    ])
,
new QuadPage("JR was jumping the fence", "JR_S_JF.wav",
    [
    new Choice("T", "Girl1_Fence.jpg"),
    new Choice("C1", "Boy2_3_Fence.jpg"),
    new Choice("C2", "Girl2_3_Fence.jpg"),
    new Choice("C3", "Boy1_Fence.jpg")
    ])
,
new QuadPage("JR was moving the box", "JR_S_MB.wav",
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
    new Choice("C3", "Girl1_Car.jpg")
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
],[new QuadPage("JR was throwing the baseball", "JR_S_TB.wav",
    [
    new Choice("T", "Girl1_Baseball.jpg"),
    new Choice("C1", "Boy2_3_Baseball.jpg"),
    new Choice("C2", "Girl2_3_Baseball.jpg"),
    new Choice("C3", "Boy1_Baseball.jpg")
    ])
,
new QuadPage("JR was hanging the clothes", "JR_S_HC.wav",
    [
    new Choice("T", "Girl1_Clothes.jpg"),
    new Choice("C1", "Boy2_3_Clothes.jpg"),
    new Choice("C2", "Girl2_3_Clothes.jpg"),
    new Choice("C3", "Boy1_Clothes.jpg")
    ])
,
new QuadPage("JR was blowing the bubbles", "JR_S_BB.wav",
    [
    new Choice("T", "Girl1_Bubbles.jpg"),
    new Choice("C1", "Boy2_3_Bubbles.jpg"),
    new Choice("C2", "Girl2_3_Bubbles.jpg"),
    new Choice("C3", "Boy1_Bubbles.jpg")
    ])
,
new QuadPage("JR was sweeping the floor", "JR_S_SF.wav",
    [
    new Choice("T", "Girl1_Floor.jpg"),
    new Choice("C1", "Boy2_3_Floor.jpg"),
    new Choice("C2", "Girl2_3_Floor.jpg"),
    new Choice("C3", "Boy1_Floor.jpg")
    ])
,
new QuadPage("JR was fixing the bike", "JR_S_FB.wav",
    [
    new Choice("T", "Girl1_Bike.png"),
    new Choice("C1", "Boy2_3_Bike.png"),
    new Choice("C2", "Girl2_3_Bike.png"),
    new Choice("C3", "Boy1_Bike.png")
    ])
,
new QuadPage("JR was pushing the cart", "JR_S_PC.wav",
    [
    new Choice("T", "Girl1_Cart.png"),
    new Choice("C1", "Boy2_3_Cart.png"),
    new Choice("C2", "Girl2_3_Cart.png"),
    new Choice("C3", "Boy1_Cart.png")
    ])
,
new QuadPage("JR was brushing the cat", "JR_S_BCat.wav",
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
    new Choice("T", "Boy2_3_Basket.jpg"),
    new Choice("C1", "Girl1_Basket.jpg"),
    new Choice("C2", "Girl2_3_Basket.jpg"),
    new Choice("C3", "Boy1_Basket.jpg")
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
new QuadPage("JR were washing a car", "JR_P_WC.wav",
    [
    new Choice("T", "Girl2_3_Car.jpg"),
    new Choice("C1", "Boy2_3_Car.jpg"),
    new Choice("C2", "Girl1_Car.jpg"),
    new Choice("C3", "Boy1_Car.jpg")
    ])
,
new QuadPage("JR were reading a book", "JR_P_RBook.wav",
    [
    new Choice("T", "Girl2_3_Book.jpg"),
    new Choice("C1", "Boy2_3_Book.jpg"),
    new Choice("C2", "Girl1_Book.jpg"),
    new Choice("C3", "Boy1_Book.jpg")
    ])
,
new QuadPage("JR were kicking a ball", "JR_P_KB.wav",
    [
    new Choice("T", "Girl2_3_Ball.jpg"),
    new Choice("C1", "Boy2_3_Ball.jpg"),
    new Choice("C2", "Girl1_Ball.jpg"),
    new Choice("C3", "Boy1_Ball.jpg")
    ])
,
new QuadPage("JR were riding a horse", "JR_P_RH.wav",
    [
    new Choice("T", "Girl2_3_Horse.jpg"),
    new Choice("C1", "Boy2_3_Horse.jpg"),
    new Choice("C2", "Girl1_Horse.jpg"),
    new Choice("C3", "Boy1_Horse.jpg")
    ])
,
new QuadPage("JR were pulling a wagon", "JR_P_PW.wav",
    [
    new Choice("T", "Girl2_3_Wagon.jpg"),
    new Choice("C1", "Boy2_3_Wagon.jpg"),
    new Choice("C2", "Girl1_Wagon.jpg"),
    new Choice("C3", "Boy1_Wagon.jpg")
    ])
,
new QuadPage("JR were folding a blanket", "JR_P_FBlanket.wav",
    [
    new Choice("T", "Girl2_3_Blanket.jpg"),
    new Choice("C1", "Boy2_3_Blanket.jpg"),
    new Choice("C2", "Girl1_Blanket.jpg"),
    new Choice("C3", "Boy1_Blanket.jpg")
    ])
,
new QuadPage("JR were climbing a tree", "JR_P_CTree.wav",
    [
    new Choice("T", "Girl2_3_Tree.jpg"),
    new Choice("C1", "Boy2_3_Tree.jpg"),
    new Choice("C2", "Girl1_Tree.jpg"),
    new Choice("C3", "Boy1_Tree.jpg")
    ])
]];




_global_audio_object = {'file': 'AUDIO_SHEET.mp3', 'locations': {'WAVFiles/Reinforcement/Slide9_IncorrectFeedback.wav': {'start': 0, 'length': 12.744}, 'WAVFiles/Reinforcement/LandingPage3.wav': {'start': 12.944, 'length': 7.648}, 'WAVFiles/Reinforcement/LandingPage2.wav': {'start': 20.792, 'length': 8.007}, 'WAVFiles/Reinforcement/LandingPage6.wav': {'start': 28.999, 'length': 10.052}, 'WAVFiles/Reinforcement/LandingPage7.wav': {'start': 39.251, 'length': 11.23}, 'WAVFiles/Reinforcement/LandingPage5.wav': {'start': 50.681, 'length': 8.107}, 'WAVFiles/Reinforcement/Slide8_Incorrect_JRtable.mp3': {'start': 58.988, 'length': 14.916}, 'WAVFiles/Reinforcement/LandingPage4.wav': {'start': 74.104, 'length': 8.334}, 'WAVFiles/Reinforcement/Slide10_Incorrect_JRpaper.mp3': {'start': 82.638, 'length': 13.714}, 'WAVFiles/Reinforcement/Slide6_IncorrectFeedback.mp3': {'start': 96.552, 'length': 11.938}, 'WAVFiles/Reinforcement/Slide9_Incorrect_JRmovie.mp3': {'start': 108.69, 'length': 14.916}, 'WAVFiles/Reinforcement/Slide72_IncorrectFeedback.wav': {'start': 123.806, 'length': 12.345}, 'WAVFiles/Reinforcement/Slide8_IncorrectFeedback.wav': {'start': 136.351, 'length': 12.578}, 'WAVFiles/Reinforcement/Slide12_LandingPage1.wav': {'start': 149.129, 'length': 6.611}, 'WAVFiles/Reinforcement/Slide7_Incorrect_Jpiano.mp3': {'start': 155.94, 'length': 13.714}, 'WAVFiles/Reinforcement/Slide71_IncorrectFeedback.wav': {'start': 169.854, 'length': 12.096}, 'WAVFiles/Reinforcement/Slide6_9_CorrectFeedback.wav': {'start': 182.15, 'length': 5.213}, 'WAVFiles/Introduction_Instructions/Slide7_EvalName.wav': {'start': 187.563, 'length': 13.92}, 'WAVFiles/Introduction_Instructions/Slide6_TouchJR_S.wav': {'start': 201.683, 'length': 3.562}, 'WAVFiles/Introduction_Instructions/Slide7_IntrotoEX.wav': {'start': 205.445, 'length': 25.757}, 'WAVFiles/Introduction_Instructions/Slide4_WearHeadphones.wav': {'start': 231.402, 'length': 5.469}, 'WAVFiles/Introduction_Instructions/Slide5_StoryIntro.wav': {'start': 237.071, 'length': 35.572}, 'WAVFiles/Introduction_Instructions/Slide6_Touch_JR_P.wav': {'start': 272.843, 'length': 3.837}, 'WAVFiles/Introduction_Instructions/Slide6_TouchJerimiah.wav': {'start': 276.88, 'length': 4.528}, 'WAVFiles/Introduction_Instructions/Slide8_IntroToExperiment.wav': {'start': 281.608, 'length': 19.804}, 'WAVFiles/Introduction_Instructions/Slide3CGInstructions.wav': {'start': 301.612, 'length': 47.8}, 'WAVFiles/Introduction_Instructions/Slide6_IntroToNames.wav': {'start': 349.612, 'length': 48.213}, 'WAVFiles/Introduction_Instructions/Slide10_LetsBegin.wav': {'start': 398.025, 'length': 19.309}, 'WAVFiles/Introduction_Instructions/Slide6_TouchCJ.wav': {'start': 417.534, 'length': 3.841}, 'WAVFiles/Examples/Slide72_JR_S_WM.wav': {'start': 421.575, 'length': 3.25}, 'WAVFiles/Examples/Slide8_CJ_P_CP.wav': {'start': 425.025, 'length': 2.929}, 'WAVFiles/Examples/Slide71_J_S_PP.wav': {'start': 428.154, 'length': 3.246}, 'WAVFiles/Examples/Slide9_JR_P_CT.wav': {'start': 431.6, 'length': 2.973}, 'WAVFiles/Examples/Slide9_JR_Asing_movie.wav': {'start': 434.773, 'length': 2.932}, 'WAVFiles/Examples/Slide10_JRAplural_paper.wav': {'start': 437.905, 'length': 3.238}, 'WAVFiles/Examples/Slide8_JR_Asing_table.wav': {'start': 441.343, 'length': 3.183}, 'WAVFiles/Examples/Slide7_J_UA_Piano.wav': {'start': 444.726, 'length': 2.473}, 'WAVFiles/ExperimentFiles/J_S_CT.wav': {'start': 447.399, 'length': 2.126}, 'WAVFiles/ExperimentFiles/CJ_P_WM.wav': {'start': 449.725, 'length': 2.094}, 'WAVFiles/ExperimentFiles/JR_P_WC.wav': {'start': 452.019, 'length': 2.0}, 'WAVFiles/ExperimentFiles/JR_S_SF.wav': {'start': 454.219, 'length': 2.008}, 'WAVFiles/ExperimentFiles/JR_P_BB.wav': {'start': 456.427, 'length': 2.233}, 'WAVFiles/ExperimentFiles/JR_P_BC.wav': {'start': 458.86, 'length': 1.987}, 'WAVFiles/ExperimentFiles/JR_P_HTB.wav': {'start': 461.047, 'length': 2.091}, 'WAVFiles/ExperimentFiles/J_S_PWall.wav': {'start': 463.338, 'length': 2.089}, 'WAVFiles/ExperimentFiles/CJ_P_MB.wav': {'start': 465.627, 'length': 2.213}, 'WAVFiles/ExperimentFiles/CJ_P_RBook.wav': {'start': 468.04, 'length': 1.928}, 'WAVFiles/ExperimentFiles/CJ_P_TB.wav': {'start': 470.168, 'length': 2.422}, 'WAVFiles/ExperimentFiles/JR_S_FBlanket.wav': {'start': 472.79, 'length': 2.075}, 'WAVFiles/ExperimentFiles/JR_S_FR.wav': {'start': 475.065, 'length': 2.2}, 'WAVFiles/ExperimentFiles/JR_S_JF.wav': {'start': 477.465, 'length': 2.029}, 'WAVFiles/ExperimentFiles/JR_S_KB.wav': {'start': 479.694, 'length': 1.957}, 'WAVFiles/ExperimentFiles/J_S_WD.wav': {'start': 481.851, 'length': 2.118}, 'WAVFiles/ExperimentFiles/J_S_DMS.wav': {'start': 484.169, 'length': 2.3}, 'WAVFiles/ExperimentFiles/JR_P_CTree.wav': {'start': 486.669, 'length': 1.894}, 'WAVFiles/ExperimentFiles/JR_P_WD.wav': {'start': 488.763, 'length': 2.182}, 'WAVFiles/ExperimentFiles/CJ_P_TF.wav': {'start': 491.145, 'length': 2.085}, 'WAVFiles/ExperimentFiles/CJ_P_BSC.wav': {'start': 493.43, 'length': 2.478}, 'WAVFiles/ExperimentFiles/J_S_BB.wav': {'start': 496.108, 'length': 2.292}, 'WAVFiles/ExperimentFiles/J_S_WC.wav': {'start': 498.6, 'length': 2.062}, 'WAVFiles/ExperimentFiles/JR_S_FB.wav': {'start': 500.862, 'length': 2.075}, 'WAVFiles/ExperimentFiles/JR_P_CT.wav': {'start': 503.137, 'length': 2.071}, 'WAVFiles/ExperimentFiles/J_S_FBlanket.wav': {'start': 505.408, 'length': 2.116}, 'WAVFiles/ExperimentFiles/J_S_BC.wav': {'start': 507.724, 'length': 2.084}, 'WAVFiles/ExperimentFiles/CJ_P_FBlanket.wav': {'start': 510.008, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CJ_P_SF.wav': {'start': 512.213, 'length': 2.021}, 'WAVFiles/ExperimentFiles/J_S_PA.wav': {'start': 514.434, 'length': 2.247}, 'WAVFiles/ExperimentFiles/JR_S_WM.wav': {'start': 516.881, 'length': 2.127}, 'WAVFiles/ExperimentFiles/JR_P_HB.wav': {'start': 519.208, 'length': 2.095}, 'WAVFiles/ExperimentFiles/JR_P_BCat.wav': {'start': 521.503, 'length': 2.012}, 'WAVFiles/ExperimentFiles/JR_P_HC.wav': {'start': 523.715, 'length': 2.098}, 'WAVFiles/ExperimentFiles/JR_S_MB.wav': {'start': 526.013, 'length': 2.13}, 'WAVFiles/ExperimentFiles/J_S_PW.wav': {'start': 528.343, 'length': 2.162}, 'WAVFiles/ExperimentFiles/J_S_RH.wav': {'start': 530.705, 'length': 2.167}, 'WAVFiles/ExperimentFiles/CJ_P_DMS.wav': {'start': 533.072, 'length': 2.354}, 'WAVFiles/ExperimentFiles/JR_S_TB.wav': {'start': 535.626, 'length': 2.37}, 'WAVFiles/ExperimentFiles/JR_P_EP.wav': {'start': 538.196, 'length': 2.067}, 'WAVFiles/ExperimentFiles/JR_S_PWall.wav': {'start': 540.463, 'length': 2.048}, 'WAVFiles/ExperimentFiles/JR_P_PF.wav': {'start': 542.711, 'length': 2.324}, 'WAVFiles/ExperimentFiles/J_S_PC.wav': {'start': 545.235, 'length': 2.101}, 'WAVFiles/ExperimentFiles/J_S_BSC.wav': {'start': 547.536, 'length': 2.5}, 'WAVFiles/ExperimentFiles/CJ_P_FR.wav': {'start': 550.236, 'length': 1.981}, 'WAVFiles/ExperimentFiles/CJ_P_KB.wav': {'start': 552.417, 'length': 1.842}, 'WAVFiles/ExperimentFiles/CJ_P_JF.wav': {'start': 554.459, 'length': 2.232}, 'WAVFiles/ExperimentFiles/JR_S_HTB.wav': {'start': 556.891, 'length': 2.184}, 'WAVFiles/ExperimentFiles/JR_P_RBook.wav': {'start': 559.275, 'length': 1.881}, 'WAVFiles/ExperimentFiles/CJ_P_CTree.wav': {'start': 561.356, 'length': 1.941}, 'WAVFiles/ExperimentFiles/JR_S_TF.wav': {'start': 563.497, 'length': 1.973}, 'WAVFiles/ExperimentFiles/JR_P_PC.wav': {'start': 565.67, 'length': 1.818}, 'WAVFiles/ExperimentFiles/J_S_PF.wav': {'start': 567.688, 'length': 2.352}, 'WAVFiles/ExperimentFiles/J_S_EP.wav': {'start': 570.24, 'length': 2.163}, 'WAVFiles/ExperimentFiles/CJ_P_FB.wav': {'start': 572.603, 'length': 2.025}, 'WAVFiles/ExperimentFiles/J_S_HB.wav': {'start': 574.828, 'length': 2.143}, 'WAVFiles/ExperimentFiles/JR_P_PA.wav': {'start': 577.171, 'length': 2.202}, 'WAVFiles/ExperimentFiles/JR_P_PW.wav': {'start': 579.573, 'length': 2.185}, 'WAVFiles/ExperimentFiles/JR_P_RH.wav': {'start': 581.958, 'length': 2.076}, 'WAVFiles/ExperimentFiles/J_S_HC.wav': {'start': 584.234, 'length': 2.229}, 'WAVFiles/ExperimentFiles/CJ_P_BCat.wav': {'start': 586.663, 'length': 2.058}, 'WAVFiles/ExperimentFiles/J_S_FR.wav': {'start': 588.921, 'length': 2.241}, 'WAVFiles/ExperimentFiles/J_S_KB.wav': {'start': 591.362, 'length': 1.998}, 'WAVFiles/ExperimentFiles/J_S_JF.wav': {'start': 593.56, 'length': 2.07}, 'WAVFiles/ExperimentFiles/CJ_P_PC.wav': {'start': 595.83, 'length': 1.865}, 'WAVFiles/ExperimentFiles/JR_S_WD.wav': {'start': 597.895, 'length': 2.077}, 'WAVFiles/ExperimentFiles/JR_S_RBook.wav': {'start': 600.172, 'length': 1.974}, 'WAVFiles/ExperimentFiles/CJ_P_PW.wav': {'start': 602.346, 'length': 2.231}, 'WAVFiles/ExperimentFiles/CJ_P_RH.wav': {'start': 604.777, 'length': 2.123}, 'WAVFiles/ExperimentFiles/CJ_P_HTB.wav': {'start': 607.1, 'length': 2.137}, 'WAVFiles/ExperimentFiles/JR_P_PWall.wav': {'start': 609.437, 'length': 2.028}, 'WAVFiles/ExperimentFiles/JR_P_FB.wav': {'start': 611.665, 'length': 1.979}, 'WAVFiles/ExperimentFiles/JR_S_CT.wav': {'start': 613.844, 'length': 2.085}, 'WAVFiles/ExperimentFiles/J_S_SF.wav': {'start': 616.129, 'length': 2.049}, 'WAVFiles/ExperimentFiles/CJ_P_PA.wav': {'start': 618.378, 'length': 2.249}, 'WAVFiles/ExperimentFiles/JR_S_DMS.wav': {'start': 620.827, 'length': 2.252}, 'WAVFiles/ExperimentFiles/CJ_P_HC.wav': {'start': 623.279, 'length': 2.144}, 'WAVFiles/ExperimentFiles/JR_S_BC.wav': {'start': 625.623, 'length': 2.043}, 'WAVFiles/ExperimentFiles/JR_S_WC.wav': {'start': 627.866, 'length': 2.021}, 'WAVFiles/ExperimentFiles/JR_S_BB.wav': {'start': 630.087, 'length': 2.252}, 'WAVFiles/ExperimentFiles/JR_P_SF.wav': {'start': 632.539, 'length': 1.974}, 'WAVFiles/ExperimentFiles/J_S_FB.wav': {'start': 634.713, 'length': 2.182}, 'WAVFiles/ExperimentFiles/CJ_P_HB.wav': {'start': 637.095, 'length': 2.142}, 'WAVFiles/ExperimentFiles/CJ_P_EP.wav': {'start': 639.437, 'length': 2.114}, 'WAVFiles/ExperimentFiles/JR_P_BSC.wav': {'start': 641.751, 'length': 2.432}, 'WAVFiles/ExperimentFiles/CJ_P_PF.wav': {'start': 644.383, 'length': 2.37}, 'WAVFiles/ExperimentFiles/J_S_BCat.wav': {'start': 646.953, 'length': 2.072}, 'WAVFiles/ExperimentFiles/JR_P_KB.wav': {'start': 649.225, 'length': 1.795}, 'WAVFiles/ExperimentFiles/JR_P_JF.wav': {'start': 651.22, 'length': 2.185}, 'WAVFiles/ExperimentFiles/JR_P_FR.wav': {'start': 653.605, 'length': 1.934}, 'WAVFiles/ExperimentFiles/J_S_CTree.wav': {'start': 655.739, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CJ_P_WD.wav': {'start': 657.944, 'length': 2.229}, 'WAVFiles/ExperimentFiles/JR_P_TF.wav': {'start': 660.373, 'length': 2.038}, 'WAVFiles/ExperimentFiles/JR_S_PC.wav': {'start': 662.611, 'length': 2.06}, 'WAVFiles/ExperimentFiles/J_S_RBook.wav': {'start': 664.871, 'length': 2.015}, 'WAVFiles/ExperimentFiles/JR_P_DMS.wav': {'start': 667.086, 'length': 2.233}, 'WAVFiles/ExperimentFiles/J_S_TB.wav': {'start': 669.519, 'length': 2.411}, 'WAVFiles/ExperimentFiles/J_S_MB.wav': {'start': 672.13, 'length': 2.171}, 'WAVFiles/ExperimentFiles/JR_S_RH.wav': {'start': 674.501, 'length': 2.126}, 'WAVFiles/ExperimentFiles/JR_S_PW.wav': {'start': 676.827, 'length': 2.121}, 'WAVFiles/ExperimentFiles/JR_S_PA.wav': {'start': 679.148, 'length': 2.206}, 'WAVFiles/ExperimentFiles/CJ_P_PWall.wav': {'start': 681.554, 'length': 2.075}, 'WAVFiles/ExperimentFiles/J_S_WM.wav': {'start': 683.829, 'length': 2.168}, 'WAVFiles/ExperimentFiles/CJ_P_CT.wav': {'start': 686.197, 'length': 2.118}, 'WAVFiles/ExperimentFiles/JR_P_FBlanket.wav': {'start': 688.515, 'length': 1.958}, 'WAVFiles/ExperimentFiles/CJ_P_BC.wav': {'start': 690.673, 'length': 2.034}, 'WAVFiles/ExperimentFiles/JR_S_HC.wav': {'start': 692.907, 'length': 2.188}, 'WAVFiles/ExperimentFiles/JR_S_BSC.wav': {'start': 695.295, 'length': 2.459}, 'WAVFiles/ExperimentFiles/JR_P_MB.wav': {'start': 697.954, 'length': 2.166}, 'WAVFiles/ExperimentFiles/J_S_HTB.wav': {'start': 700.32, 'length': 2.224}, 'WAVFiles/ExperimentFiles/JR_S_CTree.wav': {'start': 702.744, 'length': 1.965}, 'WAVFiles/ExperimentFiles/JR_S_HB.wav': {'start': 704.909, 'length': 2.102}, 'WAVFiles/ExperimentFiles/JR_P_WM.wav': {'start': 707.211, 'length': 2.048}, 'WAVFiles/ExperimentFiles/CJ_P_WC.wav': {'start': 709.459, 'length': 2.046}, 'WAVFiles/ExperimentFiles/CJ_P_BB.wav': {'start': 711.705, 'length': 2.28}, 'WAVFiles/ExperimentFiles/J_S_TF.wav': {'start': 714.185, 'length': 2.014}, 'WAVFiles/ExperimentFiles/JR_S_EP.wav': {'start': 716.399, 'length': 2.123}, 'WAVFiles/ExperimentFiles/JR_S_PF.wav': {'start': 718.722, 'length': 2.311}, 'WAVFiles/ExperimentFiles/JR_S_BCat.wav': {'start': 721.233, 'length': 2.029}, 'WAVFiles/ExperimentFiles/JR_P_TB.wav': {'start': 723.462, 'length': 2.375}}}
