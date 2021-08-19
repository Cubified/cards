const csv = `Issuer,Name,Fee,Type,Credit,Dining,Gas,Groceries,Travel,Online,All,Conversion,Rotating/Custom,TSA,Insurance,Builder,Notes,Image
Discover It,Student Cash Back,0,Cash back,300,0.01,0.01,0.01,0.01,0.01,0.01,1,Yes,No,No,Yes,5% rotating cash back,https://m.foolcdn.com/media/affiliates/credit-card-art/discover-it-student-cash-back_5mNPw7i.png
Discover It,Chrome for Students,0,Cash back,300,0.02,0.02,0.01,0.01,0.01,0.01,1,No,No,No,Yes,,https://cdn.wallethub.com/common/product/images/creditcards/500/discover-it-chrome-for-students-credit-card-1003548c.png
Chase,Freedom Flex,0,Cash back,690,0.03,0.01,0.01,0.05,0.01,0.01,1,Yes,No,No,No,5% on travel is only if booked through Chase's portal,https://creditcards.chase.com/K-Marketplace/images/modals/freedom_cal_freedom_flex_card.png
Chase,Freedom Unlimited,0,Cash back,700,0.03,0.01,0.015,0.05,0.01,0.015,1,No,No,No,No,5% on travel is only if booked through Chase's portal,https://creditcards.chase.com/K-Marketplace/images/cardart/freedom_unlimited_card.png
Chase,Freedom Student,0,Cash back,300,0.01,0.01,0.01,0.01,0.01,0.01,1,No,No,No,Yes,,https://creditcards.chase.com/K-Marketplace/images/cardart/freedom_student_card.png
Chase,Sapphire Preferred,95,Travel,760,3,1,1,5,1,1,0.01,No,No,Yes,No,5x on travel is only if booked through Chase,https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_preferred_card.png
Chase,Sapphire Reserve,550,Travel,760,3,1,1,3,1,1,0.01,No,Yes,Yes,No,$300 annual travel credit,https://creditcards.chase.com/K-Marketplace/images/cardart/sapphire_reserve_card.png
Citi,Double Cash,0,Cash back,760,0.02,0.02,0.02,0.02,0.02,0.02,1,No,No,No,No,,https://www.citi.com/CRD/images/card_no_reflection/citi-double-cash-credit-card.jpg
Citi,Premier,95,Travel,760,3,3,3,3,1,1,0.01,No,No,No,No,,https://www.citi.com/CRD/images/citi-premier/citi-premier_222x140.png
Citi,Custom Cash,0,Cash back,760,0.01,0.01,0.01,0.01,0.01,0.01,1,Yes,No,No,No,5% cash back in top spend category,https://mms.businesswire.com/media/20210610005221/en/884310/5/Custom_Cash.jpg
Capital One,VentureOne,0,Travel,760,1.25,1.25,1.25,1.25,1.25,1.25,0.01,No,No,No,No,,https://ecm.capitalone.com/WCM/card/products/ventureone-card-art/tablet.png
Capital One,Venture,95,Travel,760,2,2,2,2,2,2,0.01,No,Yes,Yes,No,,https://ecm.capitalone.com/WCM/card/products/venture-card-art/tablet.png
Capital One,SavorOne,0,Cash back,760,0.03,0.01,0.03,0.01,0.01,0.01,1,No,No,No,No,,https://ecm.capitalone.com/WCM/card/products/savorone-card-art/tablet.png
Capital One,Savor,95,Cash back,760,0.04,0.01,0.03,0.01,0.01,0.01,1,No,No,No,No,,https://ecm.capitalone.com/WCM/card/products/savor-card-art/tablet.png
Capital One,SavorOne for Students,0,Cash back,580,0.03,0.01,0.03,0.01,0.01,0.01,1,No,No,No,Yes,,https://ecm.capitalone.com/WCM/card/products/savorone-card-art.png
American Express,Blue Cash Everyday,0,Cash back,700,0.01,0.02,0.03,0.01,0.01,0.01,1,No,No,No,No,,https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/blue-cash-everyday.png
American Express,Blue Cash Preferred,95,Cash back,700,0.01,0.03,0.06,0.01,0.01,0.01,1,No,No,No,No,6% cash back is only up to $6k in spend,https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/blue-cash-preferred.png
American Express,Green Card,150,Travel,760,3,1,1,3,1,1,0.01,No,No,Yes,No,,https://cdn.wallethub.com/common/product/images/creditcards/500/american-express-green-card-1340467c.jpg
American Express,Gold Card,250,Travel,760,4,1,4,3,1,1,0.01,No,No,Yes,No,$120 Uber cash,https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/gold-card.png
American Express,Platinum Card,695,Travel,760,1,1,1,5,1,1,0.01,No,Yes,Yes,No,$200 Uber cash + $200 travel credit + other benefits,https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/category/cardarts/platinum-card.png
Bank of America,Travel Rewards,0,Travel,750,1.5,1.5,1.5,1.5,1.5,1.5,0.01,No,No,No,No,,https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8blm_trvsigcm_v_250x158.png
Bank of America,Customized Cash Rewards,0,Cash back,750,0.01,0.01,0.02,0.01,0.01,0.01,1,Yes,No,No,No,3% cash back on user-selected category,https://www.nerdwallet.com/cdn/images/marketplace/credit_cards/56683306-5399-4ad5-873f-925ac4b61e9a/4abab28bcdaf1889a87cb0d20d72f1ca670e86145d1da744a1ffe2797b117174.jpg
Chase,Amazon Prime Rewards,0,Cash back,750,0.02,0.02,0.01,0.01,0.05,0.01,1,No,No,No,No,Requires Prime membership + 5% cash back at Whole Foods as well,https://creditcards.chase.com/K-Marketplace/images/cardart/amazon_card.png
Citi,Rewards+,0,Travel,760,1,2,2,1,1,1,0.01,No,No,No,No,Purchases round points up to the nearest 10,https://www.citi.com/CRD/images/citi-rewards-plus/citi-rewards-plus_222x140.png
Bank of America,Unlimited Cash Rewards,0,Cash back,750,0.015,0.015,0.015,0.015,0.015,0.015,1,No,No,No,No,,https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cty_cshsigcm_v_250x157.png
Bank of America,Premium Rewards,95,Travel,750,2,1.5,2,2,1.5,1.5,0.01,No,Yes,Yes,No,2x on groceries is only until end of 2021,https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8cal_prmsigcm_v_250x158.png
Bank of America,Travel Rewards for Students,0,Travel,300,1.5,1.5,1.5,1.5,1.5,1.5,0.01,No,No,No,Yes,,https://www.forbes.com/advisor/wp-content/uploads/2020/02/8blm_trvsigcm_v_250x158-1.png
Visa,Petal 2,0,Cash back,300,0.01,0.01,0.01,0.01,0.01,0.01,1,Yes,No,No,Yes,1.5% cash back after 12 months of payments + higher cash back at select merchants,https://ck-content.imgix.net/pcm/content/127176e9afc411dce2e8-Petal-2-Card_Art__1_.png
Wells Fargo,Active Cash,0,Cash back,700,0.02,0.02,0.02,0.02,0.02,0.02,1,No,No,No,No,,https://www.creditcards.com/ext/cdn.prodstatic.com/shared/images/cards/336x211/04601840-e56b-11eb-99d8-ddd3faec9ad4.png
Capital One,Quicksilver,0,Cash back,760,0.015,0.015,0.015,0.015,0.015,0.015,1,No,No,No,No,,https://www.creditcards.com/ext/cdn.prodstatic.com/shared/images/cards/336x211/capital-one-quicksilver-cash-rewards-credit-card-041217.png
Discover It,Miles,0,Travel,670,1.5,1.5,1.5,1.5,1.5,1.5,0.01,No,No,No,No,,https://www.creditcards.com/ext/cdn.prodstatic.com/shared/images/cards/336x211/7c8fe9c0-bb9c-11ea-bf12-c7437d5726b0.png
Citi,AAdvantage MileUp,0,Travel,700,1,1,2,2,1,1,0.01,No,No,No,No,2x on travel is only for American Airlines purchases,https://www.creditcards.com/ext/cdn.prodstatic.com/shared/images/cards/336x211/72fe5080-fb22-11e9-9794-5d95042ca5c0.png
Barclays,AAdvantage Aviator,0,Travel,700,0.5,0.5,0.5,1,0.5,0.5,0.01,No,No,No,No,1x on travel is only for American Airlines purchases,https://creditcards.aa.com/wp-content/uploads/2019/01/aviator_mastercard.png
Barclays,AAdvantage Aviator Red,99,Travel,700,1,1,1,2,1,1,0.01,No,No,Yes,No,Free checked bag + priority boarding,https://cards.barclaycardus.com/content/dam/bcuspublic/card-plastic/card-front/AA2_card_rRGB_AviatorRed_WE_359x246_4074_072418.png
Barclays,AAdvantage Aviator Silver,195,Travel,700,1,1,1,3,1,1,0.01,No,Yes,Yes,No,Free checked bag + priority boarding + $25 inflight food credit + $50 inflight WiFi credit,https://creditcards.aa.com/wp-content/uploads/2019/01/aviator_silver.png
Mastercard,Sam's Club Member Card,0,Cash back,700,0.03,0.05,0.01,0.01,0.01,0.01,1,No,No,No,No,5% cash back on all Sam's Club purchases,https://www.creditcards.com/ext/cdn.prodstatic.com/shared/images/cards/336x211/1e82f980-64cf-11eb-be9c-9790947db9db.png
Capital One,Quicksilver Student,0,Cash back,300,0.015,0.015,0.015,0.015,0.015,0.015,1,No,No,No,No,,https://www.creditcards.com/ext/cdn.prodstatic.com/shared/images/cards/336x211/f583a350-0063-11ec-97b1-37a1bb7c2537.png
Citi,AAdvantage Platinum Select,99,Travel,700,2,2,1,2,1,1,0.01,No,No,Yes,No,Free checked bag + priority boarding,https://creditcards.aa.com/wp-content/uploads/2018/07/platinum_card-hires.png`;

let categories = [],
    cards = [];
csv.split('\n').forEach((line, ind)=>{
  if(ind === 0){
    categories = line.split(',');
  } else {
    let tmp = {};
    line.split(',').forEach((item, item_ind)=>{
      tmp[categories[item_ind]] = ((!isNaN(parseFloat(item)) && categories[item_ind] !== 'Notes') ? parseFloat(item) : item);
    });
    cards.push(tmp);
  }
});

export default cards;
