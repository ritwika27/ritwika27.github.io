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



_global_audio_object = {'file': 'AUDIO_SHEET.mp3', 'locations': {'AUDIO_SHEET.mp3': {'start': 0, 'length': 629.472}, 'WAVFiles/Reinforcement/Slide9_IncorrectFeedback.wav': {'start': 629.672, 'length': 12.744}, 'WAVFiles/Reinforcement/LandingPage3.wav': {'start': 642.616, 'length': 7.648}, 'WAVFiles/Reinforcement/LandingPage2.wav': {'start': 650.464, 'length': 8.007}, 'WAVFiles/Reinforcement/LandingPage6.wav': {'start': 658.671, 'length': 10.052}, 'WAVFiles/Reinforcement/LandingPage7.wav': {'start': 668.923, 'length': 11.23}, 'WAVFiles/Reinforcement/LandingPage5.wav': {'start': 680.353, 'length': 8.107}, 'WAVFiles/Reinforcement/LandingPage4.wav': {'start': 688.66, 'length': 8.334}, 'WAVFiles/Reinforcement/Slide6_IncorrectFeedback.mp3': {'start': 697.194, 'length': 11.938}, 'WAVFiles/Reinforcement/Slide72_IncorrectFeedback.wav': {'start': 709.332, 'length': 12.345}, 'WAVFiles/Reinforcement/Slide8_IncorrectFeedback.wav': {'start': 721.877, 'length': 12.578}, 'WAVFiles/Reinforcement/Slide12_LandingPage1.wav': {'start': 734.655, 'length': 6.611}, 'WAVFiles/Reinforcement/Slide71_IncorrectFeedback.wav': {'start': 741.466, 'length': 12.096}, 'WAVFiles/Reinforcement/Slide6_9_CorrectFeedback.wav': {'start': 753.762, 'length': 5.213}, 'WAVFiles/Introduction_Instructions/Slide7_EvalName.wav': {'start': 759.175, 'length': 13.92}, 'WAVFiles/Introduction_Instructions/Slide6_TouchJR_S.wav': {'start': 773.295, 'length': 3.562}, 'WAVFiles/Introduction_Instructions/Slide4_WearHeadphones.wav': {'start': 777.057, 'length': 5.469}, 'WAVFiles/Introduction_Instructions/Slide5_StoryIntro.wav': {'start': 782.726, 'length': 35.572}, 'WAVFiles/Introduction_Instructions/Slide6_Touch_JR_P.wav': {'start': 818.498, 'length': 3.837}, 'WAVFiles/Introduction_Instructions/Slide6_TouchJerimiah.wav': {'start': 822.535, 'length': 4.528}, 'WAVFiles/Introduction_Instructions/Slide8_IntroToExperiment.wav': {'start': 827.263, 'length': 19.804}, 'WAVFiles/Introduction_Instructions/Slide3CGInstructions.wav': {'start': 847.267, 'length': 47.8}, 'WAVFiles/Introduction_Instructions/Slide6_IntroToNames.wav': {'start': 895.267, 'length': 48.213}, 'WAVFiles/Introduction_Instructions/Slide10_LetsBegin.wav': {'start': 943.68, 'length': 19.309}, 'WAVFiles/Introduction_Instructions/Slide6_TouchCJ.wav': {'start': 963.189, 'length': 3.841}, 'WAVFiles/Examples/Slide72_JR_S_WM.wav': {'start': 967.23, 'length': 3.25}, 'WAVFiles/Examples/Slide8_CJ_P_CP.wav': {'start': 970.68, 'length': 2.929}, 'WAVFiles/Examples/Slide71_J_S_PP.wav': {'start': 973.809, 'length': 3.246}, 'WAVFiles/Examples/Slide9_JR_P_CT.wav': {'start': 977.255, 'length': 2.973}, 'WAVFiles/ExperimentFiles/J_S_CT.wav': {'start': 980.428, 'length': 2.126}, 'WAVFiles/ExperimentFiles/CJ_P_WM.wav': {'start': 982.754, 'length': 2.094}, 'WAVFiles/ExperimentFiles/JR_P_WC.wav': {'start': 985.048, 'length': 2.0}, 'WAVFiles/ExperimentFiles/JR_S_SF.wav': {'start': 987.248, 'length': 2.008}, 'WAVFiles/ExperimentFiles/JR_P_BB.wav': {'start': 989.456, 'length': 2.233}, 'WAVFiles/ExperimentFiles/JR_P_BC.wav': {'start': 991.889, 'length': 1.987}, 'WAVFiles/ExperimentFiles/JR_P_HTB.wav': {'start': 994.076, 'length': 2.091}, 'WAVFiles/ExperimentFiles/J_S_PWall.wav': {'start': 996.367, 'length': 2.089}, 'WAVFiles/ExperimentFiles/CJ_P_MB.wav': {'start': 998.656, 'length': 2.213}, 'WAVFiles/ExperimentFiles/CJ_P_RBook.wav': {'start': 1001.069, 'length': 1.928}, 'WAVFiles/ExperimentFiles/CJ_P_TB.wav': {'start': 1003.197, 'length': 2.422}, 'WAVFiles/ExperimentFiles/JR_S_FBlanket.wav': {'start': 1005.819, 'length': 2.075}, 'WAVFiles/ExperimentFiles/JR_S_FR.wav': {'start': 1008.094, 'length': 2.2}, 'WAVFiles/ExperimentFiles/JR_S_JF.wav': {'start': 1010.494, 'length': 2.029}, 'WAVFiles/ExperimentFiles/JR_S_KB.wav': {'start': 1012.723, 'length': 1.957}, 'WAVFiles/ExperimentFiles/J_S_WD.wav': {'start': 1014.88, 'length': 2.118}, 'WAVFiles/ExperimentFiles/J_S_DMS.wav': {'start': 1017.198, 'length': 2.3}, 'WAVFiles/ExperimentFiles/JR_P_CTree.wav': {'start': 1019.698, 'length': 1.894}, 'WAVFiles/ExperimentFiles/JR_P_WD.wav': {'start': 1021.792, 'length': 2.182}, 'WAVFiles/ExperimentFiles/CJ_P_TF.wav': {'start': 1024.174, 'length': 2.085}, 'WAVFiles/ExperimentFiles/CJ_P_BSC.wav': {'start': 1026.459, 'length': 2.478}, 'WAVFiles/ExperimentFiles/J_S_BB.wav': {'start': 1029.137, 'length': 2.292}, 'WAVFiles/ExperimentFiles/J_S_WC.wav': {'start': 1031.629, 'length': 2.062}, 'WAVFiles/ExperimentFiles/JR_S_FB.wav': {'start': 1033.891, 'length': 2.131}, 'WAVFiles/ExperimentFiles/JR_P_CT.wav': {'start': 1036.222, 'length': 2.071}, 'WAVFiles/ExperimentFiles/J_S_FBlanket.wav': {'start': 1038.493, 'length': 2.116}, 'WAVFiles/ExperimentFiles/J_S_BC.wav': {'start': 1040.809, 'length': 2.084}, 'WAVFiles/ExperimentFiles/CJ_P_FBlanket.wav': {'start': 1043.093, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CJ_P_SF.wav': {'start': 1045.298, 'length': 2.021}, 'WAVFiles/ExperimentFiles/J_S_PA.wav': {'start': 1047.519, 'length': 2.247}, 'WAVFiles/ExperimentFiles/JR_S_WM.wav': {'start': 1049.966, 'length': 2.127}, 'WAVFiles/ExperimentFiles/JR_P_HB.wav': {'start': 1052.293, 'length': 2.095}, 'WAVFiles/ExperimentFiles/JR_P_BCat.wav': {'start': 1054.588, 'length': 2.012}, 'WAVFiles/ExperimentFiles/JR_P_HC.wav': {'start': 1056.8, 'length': 2.098}, 'WAVFiles/ExperimentFiles/JR_S_MB.wav': {'start': 1059.098, 'length': 2.13}, 'WAVFiles/ExperimentFiles/J_S_PW.wav': {'start': 1061.428, 'length': 2.162}, 'WAVFiles/ExperimentFiles/J_S_RH.wav': {'start': 1063.79, 'length': 2.167}, 'WAVFiles/ExperimentFiles/CJ_P_DMS.wav': {'start': 1066.157, 'length': 2.354}, 'WAVFiles/ExperimentFiles/JR_S_TB.wav': {'start': 1068.711, 'length': 2.37}, 'WAVFiles/ExperimentFiles/JR_P_EP.wav': {'start': 1071.281, 'length': 2.067}, 'WAVFiles/ExperimentFiles/JR_S_PWall.wav': {'start': 1073.548, 'length': 2.048}, 'WAVFiles/ExperimentFiles/JR_P_PF.wav': {'start': 1075.796, 'length': 2.324}, 'WAVFiles/ExperimentFiles/J_S_PC.wav': {'start': 1078.32, 'length': 2.101}, 'WAVFiles/ExperimentFiles/J_S_BSC.wav': {'start': 1080.621, 'length': 2.5}, 'WAVFiles/ExperimentFiles/CJ_P_FR.wav': {'start': 1083.321, 'length': 1.981}, 'WAVFiles/ExperimentFiles/CJ_P_KB.wav': {'start': 1085.502, 'length': 1.842}, 'WAVFiles/ExperimentFiles/CJ_P_JF.wav': {'start': 1087.544, 'length': 2.232}, 'WAVFiles/ExperimentFiles/JR_S_HTB.wav': {'start': 1089.976, 'length': 2.184}, 'WAVFiles/ExperimentFiles/JR_P_RBook.wav': {'start': 1092.36, 'length': 1.881}, 'WAVFiles/ExperimentFiles/CJ_P_CTree.wav': {'start': 1094.441, 'length': 1.941}, 'WAVFiles/ExperimentFiles/JR_S_TF.wav': {'start': 1096.582, 'length': 1.973}, 'WAVFiles/ExperimentFiles/JR_P_PC.wav': {'start': 1098.755, 'length': 1.818}, 'WAVFiles/ExperimentFiles/J_S_PF.wav': {'start': 1100.773, 'length': 2.352}, 'WAVFiles/ExperimentFiles/J_S_EP.wav': {'start': 1103.325, 'length': 2.163}, 'WAVFiles/ExperimentFiles/CJ_P_FB.wav': {'start': 1105.688, 'length': 2.025}, 'WAVFiles/ExperimentFiles/J_S_HB.wav': {'start': 1107.913, 'length': 2.143}, 'WAVFiles/ExperimentFiles/JR_P_PA.wav': {'start': 1110.256, 'length': 2.202}, 'WAVFiles/ExperimentFiles/JR_P_PW.wav': {'start': 1112.658, 'length': 2.185}, 'WAVFiles/ExperimentFiles/JR_P_RH.wav': {'start': 1115.043, 'length': 2.076}, 'WAVFiles/ExperimentFiles/J_S_HC.wav': {'start': 1117.319, 'length': 2.229}, 'WAVFiles/ExperimentFiles/CJ_P_BCat.wav': {'start': 1119.748, 'length': 2.058}, 'WAVFiles/ExperimentFiles/J_S_FR.wav': {'start': 1122.006, 'length': 2.241}, 'WAVFiles/ExperimentFiles/J_S_KB.wav': {'start': 1124.447, 'length': 1.998}, 'WAVFiles/ExperimentFiles/J_S_JF.wav': {'start': 1126.645, 'length': 2.07}, 'WAVFiles/ExperimentFiles/CJ_P_PC.wav': {'start': 1128.915, 'length': 1.865}, 'WAVFiles/ExperimentFiles/JR_S_WD.wav': {'start': 1130.98, 'length': 2.077}, 'WAVFiles/ExperimentFiles/JR_S_RBook.wav': {'start': 1133.257, 'length': 1.974}, 'WAVFiles/ExperimentFiles/CJ_P_PW.wav': {'start': 1135.431, 'length': 2.231}, 'WAVFiles/ExperimentFiles/CJ_P_RH.wav': {'start': 1137.862, 'length': 2.123}, 'WAVFiles/ExperimentFiles/CJ_P_HTB.wav': {'start': 1140.185, 'length': 2.137}, 'WAVFiles/ExperimentFiles/JR_P_PWall.wav': {'start': 1142.522, 'length': 2.028}, 'WAVFiles/ExperimentFiles/JR_P_FB.wav': {'start': 1144.75, 'length': 1.979}, 'WAVFiles/ExperimentFiles/JR_S_CT.wav': {'start': 1146.929, 'length': 2.085}, 'WAVFiles/ExperimentFiles/J_S_SF.wav': {'start': 1149.214, 'length': 2.049}, 'WAVFiles/ExperimentFiles/CJ_P_PA.wav': {'start': 1151.463, 'length': 2.249}, 'WAVFiles/ExperimentFiles/JR_S_DMS.wav': {'start': 1153.912, 'length': 2.252}, 'WAVFiles/ExperimentFiles/CJ_P_HC.wav': {'start': 1156.364, 'length': 2.144}, 'WAVFiles/ExperimentFiles/JR_S_BC.wav': {'start': 1158.708, 'length': 2.043}, 'WAVFiles/ExperimentFiles/JR_S_WC.wav': {'start': 1160.951, 'length': 2.021}, 'WAVFiles/ExperimentFiles/JR_S_BB.wav': {'start': 1163.172, 'length': 2.252}, 'WAVFiles/ExperimentFiles/JR_P_SF.wav': {'start': 1165.624, 'length': 1.974}, 'WAVFiles/ExperimentFiles/J_S_FB.wav': {'start': 1167.798, 'length': 2.182}, 'WAVFiles/ExperimentFiles/CJ_P_HB.wav': {'start': 1170.18, 'length': 2.142}, 'WAVFiles/ExperimentFiles/CJ_P_EP.wav': {'start': 1172.522, 'length': 2.114}, 'WAVFiles/ExperimentFiles/JR_P_BSC.wav': {'start': 1174.836, 'length': 2.432}, 'WAVFiles/ExperimentFiles/CJ_P_PF.wav': {'start': 1177.468, 'length': 2.37}, 'WAVFiles/ExperimentFiles/J_S_BCat.wav': {'start': 1180.038, 'length': 2.072}, 'WAVFiles/ExperimentFiles/JR_P_KB.wav': {'start': 1182.31, 'length': 1.795}, 'WAVFiles/ExperimentFiles/JR_P_JF.wav': {'start': 1184.305, 'length': 2.185}, 'WAVFiles/ExperimentFiles/JR_P_FR.wav': {'start': 1186.69, 'length': 1.934}, 'WAVFiles/ExperimentFiles/J_S_CTree.wav': {'start': 1188.824, 'length': 2.005}, 'WAVFiles/ExperimentFiles/CJ_P_WD.wav': {'start': 1191.029, 'length': 2.229}, 'WAVFiles/ExperimentFiles/JR_P_TF.wav': {'start': 1193.458, 'length': 2.038}, 'WAVFiles/ExperimentFiles/JR_S_PC.wav': {'start': 1195.696, 'length': 2.06}, 'WAVFiles/ExperimentFiles/J_S_RBook.wav': {'start': 1197.956, 'length': 2.015}, 'WAVFiles/ExperimentFiles/JR_P_DMS.wav': {'start': 1200.171, 'length': 2.233}, 'WAVFiles/ExperimentFiles/J_S_TB.wav': {'start': 1202.604, 'length': 2.411}, 'WAVFiles/ExperimentFiles/J_S_MB.wav': {'start': 1205.215, 'length': 2.171}, 'WAVFiles/ExperimentFiles/JR_S_RH.wav': {'start': 1207.586, 'length': 2.126}, 'WAVFiles/ExperimentFiles/JR_S_PW.wav': {'start': 1209.912, 'length': 2.121}, 'WAVFiles/ExperimentFiles/JR_S_PA.wav': {'start': 1212.233, 'length': 2.206}, 'WAVFiles/ExperimentFiles/CJ_P_PWall.wav': {'start': 1214.639, 'length': 2.075}, 'WAVFiles/ExperimentFiles/J_S_WM.wav': {'start': 1216.914, 'length': 2.168}, 'WAVFiles/ExperimentFiles/CJ_P_CT.wav': {'start': 1219.282, 'length': 2.118}, 'WAVFiles/ExperimentFiles/JR_P_FBlanket.wav': {'start': 1221.6, 'length': 1.958}, 'WAVFiles/ExperimentFiles/CJ_P_BC.wav': {'start': 1223.758, 'length': 2.034}, 'WAVFiles/ExperimentFiles/JR_S_HC.wav': {'start': 1225.992, 'length': 2.188}, 'WAVFiles/ExperimentFiles/JR_S_BSC.wav': {'start': 1228.38, 'length': 2.459}, 'WAVFiles/ExperimentFiles/JR_P_MB.wav': {'start': 1231.039, 'length': 2.166}, 'WAVFiles/ExperimentFiles/J_S_HTB.wav': {'start': 1233.405, 'length': 2.224}, 'WAVFiles/ExperimentFiles/JR_S_CTree.wav': {'start': 1235.829, 'length': 1.965}, 'WAVFiles/ExperimentFiles/JR_S_HB.wav': {'start': 1237.994, 'length': 2.102}, 'WAVFiles/ExperimentFiles/JR_P_WM.wav': {'start': 1240.296, 'length': 2.048}, 'WAVFiles/ExperimentFiles/CJ_P_WC.wav': {'start': 1242.544, 'length': 2.046}, 'WAVFiles/ExperimentFiles/CJ_P_BB.wav': {'start': 1244.79, 'length': 2.28}, 'WAVFiles/ExperimentFiles/J_S_TF.wav': {'start': 1247.27, 'length': 2.014}, 'WAVFiles/ExperimentFiles/JR_S_EP.wav': {'start': 1249.484, 'length': 2.123}, 'WAVFiles/ExperimentFiles/JR_S_PF.wav': {'start': 1251.807, 'length': 2.311}, 'WAVFiles/ExperimentFiles/JR_S_BCat.wav': {'start': 1254.318, 'length': 2.029}, 'WAVFiles/ExperimentFiles/JR_P_TB.wav': {'start': 1256.547, 'length': 2.375}}}
