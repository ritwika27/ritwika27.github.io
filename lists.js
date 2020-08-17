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
    new Choice("C3", "Boy1_Apples.png")
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
    new Choice("C3", "Boy1_Apples.png")
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
    new Choice("C3", "Boy1_Apples.png")
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
    new Choice("T", "Boy1_Apples.png"),
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
