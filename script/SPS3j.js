var nmfs = [ 
  //{"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Chinook River Fall-run","popid": 2,"popcode": "CKLCRfaCHK","cname": "Chinook River","species": 1,"run": 2,locations: ["Chinook"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Grays River Fall-run","popid": 8,"popcode": "CKLCRfaGRY","cname": "Grays River","species": 1,"run": 2,locations: ["Grays"]},
  //{"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Youngs Bay Fall-run","popid": 33,"popcode": "CKLCRfaYNG","cname": "Youngs Bay","species": 1,"run": 2,locations: ["Youngs"]},
  //{"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Big Creek Fall-run","popid": 1,"popcode": "CKLCRfaBIG","cname": "Big Creek","species": 1,"run": 2,locations: ["BigCreek"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Elochoman River Fall-run","popid": 7,"popcode": "CKLCRfaELO","cname": "Elochoman River","species": 1,"run": 2,locations: ["Elochoman"]},
  //{"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Clatskanie River Fall-run","popid": 5,"popcode": "CKLCRfaCLT","cname": "Clatskanie River","species": 1,"run": 2,locations: ["Clatskanie"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Mill Creek Fall-run","popid": 17,"popcode": "CKLCRfaMIL","cname": "Mill Creek","species": 1,"run": 2,locations: ["Mill"]},
  //{"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Scappoose River Fall-run","popid": 23,"popcode": "CKLCRfaSCP","cname": "Scappoose River","species": 1,"run": 2,locations: ["Scappoose"]},
  {"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Grays & Chinook Rivers","popid": 115,"popcode": "CMCOLxxGRC","cname": "Grays & Chinook Rivers","species": 2,"run": 1,locations: ["Chinook","Grays"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Youngs Bay","popid": 125,"popcode": "CMCOLxxYNG","cname": "Youngs Bay","species": 2,"run": 1,locations: ["Youngs"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Big Creek","popid": 110,"popcode": "CMCOLxxBIG","cname": "Big Creek","species": 2,"run": 1,locations: ["BigCreek"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Elochoman River","popid": 114,"popcode": "CMCOLxxELO","cname": "Elochoman River","species": 2,"run": 1,locations: ["Elochoman"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Clatskanie River","popid": 112,"popcode": "CMCOLxxCLT","cname": "Clatskanie River","species": 2,"run": 1,locations: ["Clatskanie"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Mill Creek","popid": 119,"popcode": "CMCOLxxMIL","cname": "Mill Creek","species": 2,"run": 1,locations: ["Mill"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Scappoose River","popid": 122,"popcode": "CMCOLxxSCP","cname": "Scappoose River","species": 2,"run": 1,locations: ["Scappoose"]},
  //{"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Grays & Chinook Rivers","popid": 135,"popcode": "COLCRxxGRC","cname": "Grays & Chinook Rivers","species": 3,"run": 1,locations: ["Chinook","Grays"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Youngs Bay","popid": 152,"popcode": "COLCRxxYNG","cname": "Youngs Bay","species": 3,"run": 1,locations: ["Youngs"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Big Creek","popid": 128,"popcode": "COLCRxxBIG","cname": "Big Creek","species": 3,"run": 1,locations: ["BigCreek"]},
  //{"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Elochoman River","popid": 134,"popcode": "COLCRxxELO","cname": "Elochoman River","species": 3,"run": 1,locations: ["Elochoman"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Clatskanie River","popid": 131,"popcode": "COLCRxxCLT","cname": "Clatskanie River","species": 3,"run": 1,locations: ["Clatskanie"]},
  //{"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Mill Creek","popid": 140,"popcode": "COLCRxxMIL","cname": "Mill Creek","species": 3,"run": 1,locations: ["Mill"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Scappoose River","popid": 146,"popcode": "COLCRxxSCP","cname": "Scappoose River","species": 3,"run": 1,locations: ["Scappoose"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Coweeman River Fall-run","popid": 6,"popcode": "CKLCRfaCOW","cname": "Coweeman River","species": 1,"run": 2,locations: ["Coweeman"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Lower Cowlitz River Fall-run","popid": 15,"popcode": "CKLCRfaLCZ","cname": "Lower Cowlitz River","species": 1,"run": 2,locations: ["LCowlitz"]},
  //{"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Toutle River Spring-run","popid": 26,"popcode": "CKLCRspTOU","cname": "Toutle River","species": 1,"run": 3,locations: ["NFToutle","SFToutle"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Toutle River Fall-run","popid": 25,"popcode": "CKLCRfaTOU","cname": "Toutle River","species": 1,"run": 2,locations: ["NFToutle","SFToutle"]},
  //{"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Tilton River Spring-run","popid": 24,"popcode": "CKLCRspTIL","cname": "Tilton River","species": 1,"run": 3,locations: ["Tilton"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Upper Cowlitz River Spring-run","popid": 28,"popcode": "CKLCRspUCW","cname": "Upper Cowlitz River","species": 1,"run": 3,locations: ["UCowlitz"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Upper Cowlitz River Fall-run","popid": 27,"popcode": "CKLCRfaUCW","cname": "Upper Cowlitz River","species": 1,"run": 2,locations: ["UCowlitz"]},
  //{"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Cispus River Spring-run","popid": 3,"popcode": "CKLCRspCSP","cname": "Cispus River","species": 1,"run": 3,locations: ["Cispus"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Kalama River Spring-run","popid": 12,"popcode": "CKLCRspKAL","cname": "Kalama River","species": 1,"run": 3,locations: ["Kalama"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Kalama River Fall-run","popid": 11,"popcode": "CKLCRfaKAL","cname": "Kalama River","species": 1,"run": 2,locations: ["Kalama"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Lewis River Bright","popid": 13,"popcode": "CKLCRbtLEW","cname": "Lewis River","species": 1,"run": 2,locations: ["NFLewis","EFLewis"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Lewis River Fall-run","popid": 14,"popcode": "CKLCRfaLEW","cname": "Lewis River","species": 1,"run": 2,locations: ["NFLewis","EFLewis"]},
  //{"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - North Fork Lewis River Spring-run","popid": 18,"popcode": "CKLCRspNFL","cname": "North Fork Lewis River","species": 1,"run": 3,locations: ["NFLewis"]},
  //{"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Salmon Creek Fall-run","popid": 19,"popcode": "CKLCRfaSAL","cname": "Salmon Creek","species": 1,"run": 2,locations: []},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Sandy River Spring-run","popid": 22,"popcode": "CKLCRspSDY","cname": "Sandy River","species": 1,"run": 3,locations: ["Sandy"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Sandy River Bright","popid": 20,"popcode": "CKLCRbtSDY","cname": "Sandy River","species": 1,"run": 2,locations: ["Sandy"]},
  //{"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Sandy River Fall-run","popid": 21,"popcode": "CKLCRfaSDY","cname": "Sandy River","species": 1,"run": 2,locations: ["Sandy"]},
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Washougal River Fall-run","popid": 30,"popcode": "CKLCRfaWSH","cname": "Washougal River","species": 1,"run": 2,locations: ["Washougal"]},
  //{"mpop": 1,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Cowlitz River","popid": 113,"popcode": "CMCOLxxCWZ","cname": "Cowlitz River","species": 2,"run": 1,locations: ["Coweeman","LCowlitz","NFToutle","SFToutle"]},
  //{"mpop": 1,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Kalama River","popid": 116,"popcode": "CMCOLxxKAL","cname": "Kalama River","species": 2,"run": 1,locations: ["Kalama"]},
  //{"mpop": 1,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Lewis River","popid": 117,"popcode": "CMCOLxxLEW","cname": "Lewis River","species": 2,"run": 1,locations: ["NFLewis","EFLewis"]},
  //{"mpop": 1,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Salmon Creek","popid": 120,"popcode": "CMCOLxxSAL","cname": "Salmon Creek","species": 2,"run": 1,locations: []},
  //{"mpop": 1,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Sandy River","popid": 121,"popcode": "CMCOLxxSDY","cname": "Sandy River","species": 2,"run": 1,locations: ["Sandy"]},
  {"mpop": 1,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Washougal River","popid": 124,"popcode": "CMCOLxxWSH","cname": "Washougal River","species": 2,"run": 1,locations: ["Washougal"]},
  //{"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Coweeman River","popid": 132,"popcode": "COLCRxxCOW","cname": "Coweeman River","species": 3,"run": 1,locations: ["Coweeman"]},
  //{"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Lower Cowlitz River","popid": 137,"popcode": "COLCRxxLCZ","cname": "Lower Cowlitz River","species": 3,"run": 1,locations: ["LCowlitz"]},
  //{"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - North Fork Toutle River","popid": 142,"popcode": "COLCRxxNFT","cname": "North Fork Toutle River","species": 3,"run": 1,locations: ["NFToutle"]},
  //{"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - South Fork Toutle River","popid": 147,"popcode": "COLCRxxSFT","cname": "South Fork Toutle River","species": 3,"run": 1,locations: ["SFToutle"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Tilton River","popid": 148,"popcode": "COLCRxxTIL","cname": "Tilton River","species": 3,"run": 1,locations: ["Tilton"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Upper Cowlitz River","popid": 149,"popcode": "COLCRxxUCW","cname": "Upper Cowlitz River","species": 3,"run": 1,locations: ["UCowlitz"]},
  //{"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Cispus River","popid": 129,"popcode": "COLCRxxCSP","cname": "Cispus River","species": 3,"run": 1,locations: ["Cispus"]},
  //{"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Kalama River","popid": 136,"popcode": "COLCRxxKAL","cname": "Kalama River","species": 3,"run": 1,locations: ["Kalama"]},
  //{"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - East Fork Lewis River","popid": 133,"popcode": "COLCRxxEFL","cname": "East Fork Lewis River","species": 3,"run": 1,locations: ["EFLewis"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - North Fork Lewis River","popid": 141,"popcode": "COLCRxxNFL","cname": "North Fork Lewis River","species": 3,"run": 1,locations: ["NFLewis"]},
  //{"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Salmon Creek","popid": 144,"popcode": "COLCRxxSAL","cname": "Salmon Creek","species": 3,"run": 1,locations: []},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Sandy River","popid": 145,"popcode": "COLCRxxSDY","cname": "Sandy River","species": 3,"run": 1,locations: ["Sandy"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Washougal River","popid": 151,"popcode": "COLCRxxWSH","cname": "Washougal River","species": 3,"run": 1,locations: ["Washougal"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Coweeman River Winter-run","popid": 227,"popcode": "STLCRwiCOW","cname": "Coweeman River","species": 5,"run": 7,locations: ["Coweeman"]},
  //{"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Lower Cowlitz River Winter-run","popid": 234,"popcode": "STLCRwiLCZ","cname": "Lower Cowlitz River","species": 5,"run": 7,locations: ["LCowlitz"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - North Fork Toutle River Winter-run","popid": 238,"popcode": "STLCRwiNFT","cname": "North Fork Toutle River","species": 5,"run": 7,locations: ["NFToutle"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - South Fork Toutle River Winter-run","popid": 241,"popcode": "STLCRwiSFT","cname": "South Fork Toutle River","species": 5,"run": 7,locations: ["SFToutle"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Tilton River Winter-run","popid": 242,"popcode": "STLCRwiTIL","cname": "Tilton River","species": 5,"run": 7,locations: ["Tilton"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Upper Cowlitz River Winter-run","popid": 243,"popcode": "STLCRwiUCW","cname": "Upper Cowlitz River","species": 5,"run": 7,locations: ["UCowlitz"]},
  //{"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Cispus River Winter-run","popid": 225,"popcode": "STLCRwiCSP","cname": "Cispus River","species": 5,"run": 7,locations: ["Cispus"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Kalama River Summer-run","popid": 232,"popcode": "STLCRsuKAL","cname": "Kalama River","species": 5,"run": 5,locations: ["Kalama"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Kalama River Winter-run","popid": 233,"popcode": "STLCRwiKAL","cname": "Kalama River","species": 5,"run": 7,locations: ["Kalama"]},
  //{"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - North Fork Lewis River Summer-run","popid": 236,"popcode": "STLCRsuNFL","cname": "North Fork Lewis River","species": 5,"run": 5,locations: ["NFLewis"]},
  //{"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - North Fork Lewis River Winter-run","popid": 237,"popcode": "STLCRwiNFL","cname": "North Fork Lewis River","species": 5,"run": 7,locations: ["NFLewis"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - East Fork Lewis River Summer-run","popid": 228,"popcode": "STLCRsuEFL","cname": "East Fork Lewis River","species": 5,"run": 5,locations: ["EFLewis"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - East Fork Lewis River Winter-run","popid": 229,"popcode": "STLCRwiEFL","cname": "East Fork Lewis River","species": 5,"run": 7,locations: ["EFLewis"]},
  //{"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Salmon Creek Winter-run","popid": 239,"popcode": "STLCRwiSAL","cname": "Salmon Creek","species": 5,"run": 7,locations: []},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Sandy River Winter-run","popid": 240,"popcode": "STLCRwiSDY","cname": "Sandy River","species": 5,"run": 7,locations: ["Sandy"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Washougal River Summer-run","popid": 245,"popcode": "STLCRsuWSH","cname": "Washougal River","species": 5,"run": 5,locations: ["Washougal"]},
  {"mpop": 1,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Washougal River Winter-run","popid": 246,"popcode": "STLCRwiWSH","cname": "Washougal River","species": 5,"run": 7,locations: ["Washougal"]},
  {"mpop": 22,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Clackamas River Fall-run","popid": 4,"popcode": "CKLCRfaCLK","cname": "Clackamas River","species": 1,"run": 2,locations: ["Clackamas"]},
  //{"mpop": 22,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Clackamas River","popid": 111,"popcode": "CMCOLxxCLK","cname": "Clackamas River","species": 2,"run": 1,locations: ["Clackamas"]},
  {"mpop": 22,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Clackamas River","popid": 130,"popcode": "COLCRxxCLK","cname": "Clackamas River","species": 3,"run": 1,locations: ["Clackamas"]},
  {"mpop": 22,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Clackamas River Winter-run","popid": 226,"popcode": "STLCRwiCLK","cname": "Clackamas River","species": 5,"run": 7,locations: ["Clackamas"]},
  {"mpop": 21,"esu": 12,"popname": "Chinook Salmon (Upper Willamette River ESU) - Clackamas River Spring-run","popid": 104,"popcode": "CKUWRspCLK","cname": "Clackamas River","species": 1,"run": 3,locations: ["Clackamas"]},
  //{"mpop": 21,"esu": 12,"popname": "Chinook Salmon (Upper Willamette River ESU) - Molalla River Spring-run","popid": 107,"popcode": "CKUWRspMOL","cname": "Molalla River","species": 1,"run": 3,locations: ["Molalla"]},
  {"mpop": 21,"esu": 12,"popname": "Chinook Salmon (Upper Willamette River ESU) - North Santiam River Spring-run","popid": 108,"popcode": "CKUWRspNST","cname": "North Santiam River","species": 1,"run": 3,locations: ["NSantiam"]},
  {"mpop": 21,"esu": 12,"popname": "Chinook Salmon (Upper Willamette River ESU) - South Santiam River Spring-run","popid": 109,"popcode": "CKUWRspSST","cname": "South Santiam River","species": 1,"run": 3,locations: ["SSantiam"]},
  //{"mpop": 21,"esu": 12,"popname": "Chinook Salmon (Upper Willamette River ESU) - Calapooia River Spring-run","popid": 103,"popcode": "CKUWRspCLP","cname": "Calapooia River","species": 1,"run": 3,locations: ["Calapooia"]},
  {"mpop": 21,"esu": 12,"popname": "Chinook Salmon (Upper Willamette River ESU) - McKenzie River Spring-run","popid": 105,"popcode": "CKUWRspMCK","cname": "McKenzie River","species": 1,"run": 3,locations: ["McKenzie"]},
  //{"mpop": 21,"esu": 12,"popname": "Chinook Salmon (Upper Willamette River ESU) - Middle Fork Willamette River Spring-run","popid": 106,"popcode": "CKUWRspMFW","cname": "Middle Fork Willamette River","species": 1,"run": 3,locations: []},
  {"mpop": 21,"esu": 13,"popname": "Steelhead (Upper Willamette River DPS) - Molalla River Winter-run","popid": 333,"popcode": "STUWRwiMOL","cname": "Molalla River","species": 5,"run": 7,locations: ["Molalla"]},
  {"mpop": 21,"esu": 13,"popname": "Steelhead (Upper Willamette River DPS) - North Santiam River Winter-run","popid": 334,"popcode": "STUWRwiNST","cname": "North Santiam River","species": 5,"run": 7,locations: ["NSantiam"]},
  {"mpop": 21,"esu": 13,"popname": "Steelhead (Upper Willamette River DPS) - South Santiam River Winter-run","popid": 335,"popcode": "STUWRwiSST","cname": "South Santiam River","species": 5,"run": 7,locations: ["SSantiam"]},
  {"mpop": 21,"esu": 13,"popname": "Steelhead (Upper Willamette River DPS) - Calapooia River Winter-run","popid": 332,"popcode": "STUWRwiCLP","cname": "Calapooia River","species": 5,"run": 7,locations: ["Calapooia"]},
  //{"mpop": 21,"esu": 13,"popname": "Steelhead (Upper Willamette River DPS) - West Side Tributaries Winter-run","popid": 336,"popcode": "STUWRwiWST","cname": "West Side Tributaries","species": 5,"run": 7,locations: []},
  //{"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Lower Gorge Tributaries Fall-run","popid": 16,"popcode": "CKLCRfaLGT","cname": "Lower Gorge Tributaries","species": 1,"run": 2,locations: ["LGorge"]},
  {"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Upper Gorge Tributaries Fall-run","popid": 29,"popcode": "CKLCRfaUGT","cname": "Upper Gorge Tributaries","species": 1,"run": 2,locations: ["UGorge","Wind","LWhiteSalmon"]},
  {"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - White Salmon River Spring-run","popid": 32,"popcode": "CKLCRspWSR","cname": "White Salmon River","species": 1,"run": 3,locations: ["WhiteSalmon"]},
  {"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - White Salmon River Fall-run","popid": 31,"popcode": "CKLCRfaWSR","cname": "White Salmon River","species": 1,"run": 2,locations: ["WhiteSalmon"]},
  //{"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Hood River Spring-run","popid": 10,"popcode": "CKLCRspHOO","cname": "Hood River","species": 1,"run": 3,locations: ["Hood"]},
  {"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Hood River Fall-run","popid": 9,"popcode": "CKLCRfaHOO","cname": "Hood River","species": 1,"run": 2,locations: ["Hood"]},
  {"mpop": 5,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Lower Gorge Tributaries","popid": 118,"popcode": "CMCOLxxLGT","cname": "Lower Gorge Tributaries","species": 2,"run": 1,locations: ["LGorge"]},
  {"mpop": 5,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Upper Gorge Tributaries","popid": 123,"popcode": "CMCOLxxUGT","cname": "Upper Gorge Tributaries","species": 2,"run": 1,locations: ["UGorge","UGorge2"]},
  {"mpop": 5,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Lower Gorge Tributaries","popid": 138,"popcode": "COLCRxxLGT","cname": "Lower Gorge Tributaries","species": 3,"run": 1,locations: ["LGorge"]},
  {"mpop": 5,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - OR Upper Gorge tribs and Hood River","popid": 143,"popcode": "COLCRxxUGH","cname": "Oregon Upper Gorge tributaries and Hood River","species": 3,"run": 1,locations: ["UGorge","Hood", "LWhiteSalmon","Wind"]},
  //{"mpop": 5,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Mainstem section of Upper Gorge Tributaries (Hood River and White Salmon River)","popid": 139,"popcode": "COLCRxxUGM","cname": "Mainstem section of Upper Gorge Tributaries (Hood River and White Salmon River)","species": 3,"run": 1,locations: ["UGorge","Hood","WhiteSalmon"]},
  {"mpop": 5,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - WA Upper Gorge tribs and White Salmon R.","popid": 150,"popcode": "COLCRxxUGW","cname": "Washington Upper Gorge tributaries and White Salmon River","species": 3,"run": 1,locations: ["UGorge","WhiteSalmon", "LWhiteSalmon","Wind"]},
  //{"mpop": 5,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Lower Gorge Tributaries Winter-run","popid": 235,"popcode": "STLCRwiLGT","cname": "Lower Gorge Tributaries","species": 5,"run": 7,locations: ["LGorge"]},
  {"mpop": 5,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Upper Gorge Tributaries Winter-run","popid": 244,"popcode": "STLCRwiUGT","cname": "Upper Gorge Tributaries","species": 5,"run": 7,locations: ["UGorge","LWhiteSalmon","Wind"]},
  {"mpop": 5,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Wind River Summer-run","popid": 247,"popcode": "STLCRsuWND","cname": "Wind River","species": 5,"run": 5,locations: ["Wind"]},
  {"mpop": 5,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Hood River Summer-run","popid": 230,"popcode": "STLCRsuHOO","cname": "Hood River","species": 5,"run": 5,locations: ["Hood"]},
  {"mpop": 5,"esu": 4,"popname": "Steelhead (Lower Columbia River DPS) - Hood River Winter-run","popid": 231,"popcode": "STLCRwiHOO","cname": "Hood River","species": 5,"run": 7,locations: ["Hood"]},
  //{"mpop": 2,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - White Salmon River","popid": 265,"popcode": "STMCRsuWSR","cname": "White Salmon River","species": 5,"run": 6,locations: ["WhiteSalmon"]},
  {"mpop": 2,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Klickitat River","popid": 254,"popcode": "STMCRsuKLT","cname": "Klickitat River","species": 5,"run": 6,locations: ["Klickitat"]},
  {"mpop": 2,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Fifteenmile Creek Winter-run","popid": 251,"popcode": "STMCRwiFIF","cname": "Fifteenmile Creek","species": 5,"run": 7,locations: ["Fifteenmile"]},
  {"mpop": 2,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Deschutes River - eastside","popid": 249,"popcode": "STMCRsuDRE","cname": "Deschutes River","species": 5,"run": 5,locations: ["DeschutesE"]},
  {"mpop": 2,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Deschutes River - westside","popid": 250,"popcode": "STMCRsuDRW","cname": "Deschutes River","species": 5,"run": 5,locations: ["DeschutesW"]},
  //{"mpop": 2,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Crooked River","popid": 248,"popcode": "STMCRsuCRK","cname": "Crooked River","species": 5,"run": 5,locations: []},
  //{"mpop": 2,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Rock Creek","popid": 258,"popcode": "STMCRsuRCK","cname": "Rock Creek","species": 5,"run": 5,locations: []},
  {"mpop": 10,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - John Day River Lower Mainstem Tribs","popid": 252,"popcode": "STMCRsuJDL","cname": "John Day River Lower Mainstem Tributaries","species": 5,"run": 5,locations: ["JohnDayLow"]},
  {"mpop": 10,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - North Fork John Day River","popid": 257,"popcode": "STMCRsuNJD","cname": "North Fork John Day River","species": 5,"run": 5,locations: ["JohnDayNF"]},
  {"mpop": 10,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Middle Fork John Day River","popid": 255,"popcode": "STMCRsuMJD","cname": "Middle Fork John Day River","species": 5,"run": 5,locations: ["JohnDayMF"]},
  {"mpop": 10,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - South Fork John Day River","popid": 260,"popcode": "STMCRsuSJD","cname": "South Fork John Day River","species": 5,"run": 5,locations: ["JohnDaySF"]},
  {"mpop": 10,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - John Day River Upper Mainstem","popid": 253,"popcode": "STMCRsuJDU","cname": "John Day River Upper Mainstem","species": 5,"run": 5,locations: ["JohnDayUp"]},
  //{"mpop": 17,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Willow Creek","popid": 266,"popcode": "STMCRsuWLL","cname": "Willow Creek","species": 5,"run": 5,locations: []},
  {"mpop": 17,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Umatilla River","popid": 263,"popcode": "STMCRsuUMA","cname": "Umatilla River","species": 5,"run": 5,locations: ["Umatilla"]},
  {"mpop": 17,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Walla Walla River","popid": 264,"popcode": "STMCRsuWAL","cname": "Walla Walla River","species": 5,"run": 5,locations: ["WallaWalla"]},
  {"mpop": 17,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Touchet River","popid": 262,"popcode": "STMCRsuTOC","cname": "Touchet River","species": 5,"run": 5,locations: ["Touchet"]},
  {"mpop": 11,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Tucannon River","popid": 93,"popcode": "CKSNRssTUC","cname": "Tucannon River","species": 1,"run": 4,locations: ["Tucannon"]},
  //{"mpop": 11,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Asotin Creek","popid": 57,"popcode": "CKSNRssASO","cname": "Asotin Creek","species": 1,"run": 4,locations: []},
  {"mpop": 14,"esu": 7,"popname": "Chinook Salmon (Snake River Fall-run ESU) - Snake River Lower Mainstem","popid": 56,"popcode": "CKSNRfaSRL","cname": "Snake River Lower Mainstem","species": 1,"run": 2,locations: ["FallClearwater","FallGrandRonde","FallLowerSnake","FallTucannon"]},
  {"mpop": 11,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Tucannon River","popid": 325,"popcode": "STSNRsuTUC","cname": "Tucannon River","species": 5,"run": 5,locations: ["Tucannon"]},
    //{"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Clearwater River Lower Mainstem","popid": 303,"popcode": "STSNRsuCWL","cname": "Clearwater River Lower Mainstem","species": 5,"run": 5,locations: []},
  //{"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - North Fork Clearwater River","popid": 316,"popcode": "STSNRsuNCR","cname": "North Fork Clearwater River","species": 5,"run": 5,locations: []},
  {"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Lolo Creek","popid": 314,"popcode": "STSNRsuLOL","cname": "Lolo Creek","species": 5,"run": 5,locations: ["Lolo"]},
  {"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Lochsa River","popid": 313,"popcode": "STSNRsuLCH","cname": "Lochsa River","species": 5,"run": 5,locations: ["Lochsa"]},
  {"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Selway River","popid": 322,"popcode": "STSNRsuSEL","cname": "Selway River","species": 5,"run": 5,locations: ["Selway"]},
  {"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - South Fork Clearwater River","popid": 323,"popcode": "STSNRsuSFC","cname": "South Fork Clearwater River","species": 5,"run": 5,locations: ["SFClearwater"]},
  //{"mpop": 11,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Asotin Creek","popid": 300,"popcode": "STSNRsuASO","cname": "Asotin Creek","species": 5,"run": 5,locations: []},
  {"mpop": 7,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Grande Ronde R. Lower Mainstem Tribs","popid": 305,"popcode": "STSNRsuGRL","cname": "Grande Ronde River Lower Mainstem Tributaries","species": 5,"run": 5,locations: ["GrandeRondeLower"]},
  {"mpop": 7,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Joseph Creek","popid": 310,"popcode": "STSNRsuJOS","cname": "Joseph Creek","species": 5,"run": 5,locations: ["Joseph"]},
  {"mpop": 7,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Grande Ronde River Upper Mainstem","popid": 306,"popcode": "STSNRsuGRU","cname": "Grande Ronde River Upper Mainstem","species": 5,"run": 5,locations: ["GrandeRondeUpper","GrandeRondeMid"]},
  {"mpop": 7,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Wallowa River","popid": 326,"popcode": "STSNRsuWLW","cname": "Wallowa River","species": 5,"run": 5,locations: ["Wallowa"]},
  {"mpop": 20,"esu": 8,"popname": "Sockeye Salmon (Snake River ESU) - Wallowa Lake","popid": 222,"popcode": "SOSNRxxWAL","cname": "Wallowa Lake","species": 4,"run": 1,locations: []},
  {"mpop": 6,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Wenaha River","popid": 98,"popcode": "CKSNRssWNH","cname": "Wenaha River","species": 1,"run": 4,locations: ["Wenaha"]},
  {"mpop": 6,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Lookingglass Creek","popid": 74,"popcode": "CKSNRssLKG","cname": "Lookingglass Creek","species": 1,"run": 4,locations: ["Lookingglass"]},
  {"mpop": 6,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Lostine River","popid": 76,"popcode": "CKSNRssLST","cname": "Lostine River","species": 1,"run": 4,locations: ["Lostine"]},
  {"mpop": 6,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Minam River","popid": 82,"popcode": "CKSNRssMNM","cname": "Minam River","species": 1,"run": 4,locations: ["Minam"]},
  {"mpop": 6,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Catherine Creek","popid": 62,"popcode": "CKSNRssCTH","cname": "Catherine Creek","species": 1,"run": 4,locations: ["Catherine"]},
  {"mpop": 6,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Grande Ronde River Upper Mainstem","popid": 66,"popcode": "CKSNRssGRU","cname": "Grande Ronde River Upper Mainstem","species": 1,"run": 4,locations: ["GrandeRondeUpper"]},
  {"mpop": 6,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Imnaha River Mainstem","popid": 67,"popcode": "CKSNRssIMM","cname": "Imnaha River Mainstem","species": 1,"run": 4,locations: ["Imnaha"]},
  //{"mpop": 6,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Big Sheep Creek","popid": 60,"popcode": "CKSNRssBSC","cname": "Big Sheep Creek","species": 1,"run": 4,locations: ["BigSheep"]},
  {"mpop": 9,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Imnaha River","popid": 309,"popcode": "STSNRsuIMN","cname": "Imnaha River","species": 5,"run": 5,locations: ["Imnaha"]},
  //{"mpop": 9,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Imnaha Camp Creek Index Area","popid": 308,"popcode": 0,"cname": "Imnaha Camp Creek","species": 5,"run": 5,locations: ["Imnaha"]},
  //{"mpop": 8,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Hells Canyon","popid": 307,"popcode": "STSNRsuHEL","cname": "Hells Canyon","species": 5,"run": 5,locations: []},
  //{"mpop": 15,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Little Salmon River","popid": 71,"popcode": "CKSNRssLSM","cname": "Little Salmon River","species": 1,"run": 4,locations: []},
  {"mpop": 15,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - South Fork Salmon River Mainstem","popid": 91,"popcode": "CKSNRssSFM","cname": "South Fork Salmon River Mainstem","species": 1,"run": 4,locations: ["SFSalmon"]},
  {"mpop": 15,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - East Fork South Fork Salmon River","popid": 65,"popcode": "CKSNRssESF","cname": "East Fork South Fork Salmon River","species": 1,"run": 4,locations: ["EFSFSalmon"]},
  {"mpop": 15,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Secesh River","popid": 90,"popcode": "CKSNRssSEC","cname": "Secesh River","species": 1,"run": 4,locations: ["Secesh"]},
  //{"mpop": 15,"esu": 8,"popname": "Sockeye Salmon (Snake River ESU) - Warm Springs","popid": 223,"popcode": "SOSNRxxWRM","cname": "Warm","species": 4,"run": 1,locations: []},
  {"mpop": 12,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Chamberlain Creek","popid": 63,"popcode": "CKSNRssCHB","cname": "Chamberlain Creek","species": 1,"run": 4,locations: ["Chamberlain"]},
  {"mpop": 12,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Big Creek","popid": 59,"popcode": "CKSNRssBIG","cname": "Big Creek","species": 1,"run": 4,locations: ["BigMF"]},
  {"mpop": 12,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Camas Creek","popid": 61,"popcode": "CKSNRssCMS","cname": "Camas Creek","species": 1,"run": 4,locations: ["Camas"]},
  {"mpop": 12,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Loon Creek","popid": 75,"popcode": "CKSNRssLOO","cname": "Loon Creek","species": 1,"run": 4,locations: ["Loon"]},
  {"mpop": 12,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Mid. Fk. Salmon River below Indian Cr.","popid": 81,"popcode": "CKSNRssMSB","cname": "Middle Fork Salmon River below Indian Creek","species": 1,"run": 4,locations: ["MFSalmonLower"]},  
  {"mpop": 12,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Mid. Fk. Salmon River above Indian Cr.","popid": 80,"popcode": "CKSNRssMSA","cname": "Middle Fork Salmon River above Indian Creek","species": 1,"run": 4,locations: ["MFSalmonUpper"]},
  {"mpop": 12,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Sulphur Creek","popid": 92,"popcode": "CKSNRssSPH","cname": "Sulphur Creek","species": 1,"run": 4,locations: ["Sulphur"]},
  {"mpop": 12,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Marsh Creek","popid": 78,"popcode": "CKSNRssMRS","cname": "Marsh Creek","species": 1,"run": 4,locations: ["Marsh"]},
  {"mpop": 12,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Bear Valley Creek","popid": 58,"popcode": "CKSNRssBVC","cname": "Bear Valley Creek","species": 1,"run": 4,locations: ["BearValley"]},
 //{"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Little Salmon and Rapid River","popid": 312,"popcode": "STSNRsuLSR","cname": "Little Salmon and Rapid River","species": 5,"run": 5,locations: []},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - South Fork Salmon River","popid": 324,"popcode": "STSNRsuSFS","cname": "South Fork Salmon River","species": 5,"run": 5,locations: ["SFSalmon"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Secesh River","popid": 321,"popcode": "STSNRsuSEC","cname": "Secesh River","species": 5,"run": 5,locations: ["Secesh"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Chamberlain Creek","popid": 302,"popcode": "STSNRsuCHB","cname": "Chamberlain Creek","species": 5,"run": 5,locations: ["Chamberlain"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Big, Camas, and Loon Creek","popid": 301,"popcode": "STSNRsuBCL","cname": "Big, Camas, and Loon Creek","species": 5,"run": 5,locations: ["BigMF","Camas","Loon"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Middle Fork Salmon River Upper Mainstem","popid": 315,"popcode": "STSNRsuMSM","cname": "Middle Fork Salmon R. Upper Mainstem","species": 5,"run": 5,locations: ["MFSalmonUpper"]},
  //{"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Panther Creek","popid": 319,"popcode": "STSNRsuPAN","cname": "Panther Creek","species": 5,"run": 5,locations: ["Panther"]},
  //{"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - North Fork Salmon River","popid": 317,"popcode": "STSNRsuNFS","cname": "North Fork Salmon River","species": 5,"run": 5,locations: ["NFSalmon"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Lemhi River","popid": 311,"popcode": "STSNRsuLEM","cname": "Lemhi River","species": 5,"run": 5,locations: ["Lemhi"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Pahsimeroi River","popid": 318,"popcode": "STSNRsuPAH","cname": "Pahsimeroi River","species": 5,"run": 5,locations: ["Pahsimeroi"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - East Fork Salmon River","popid": 304,"popcode": "STSNRsuEFS","cname": "East Fork Salmon River","species": 5,"run": 5,locations: ["EFSalmon"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Salmon River Upper Mainstem","popid": 320,"popcode": "STSNRsuSUM","cname": "Salmon River Upper Mainstem","species": 5,"run": 5,locations: ["UpperSalmon"]},
  {"mpop": 16,"esu": 8,"popname": "Sockeye Salmon (Snake River ESU) - Redfish Lake","popid": 220,"popcode": "SOSNRxxRED","cname": "Redfish Lake","species": 4,"run": 1,locations: []},
 //{"mpop": 16,"esu": 8,"popname": "Sockeye Salmon (Snake River ESU) - Alturas Creek","popid": 215,"popcode": "SOSNRxxALT","cname": "Alturas Creek","species": 4,"run": 1,locations: []},
 //{"mpop": 16,"esu": 8,"popname": "Sockeye Salmon (Snake River ESU) - Hellroaring Creek","popid": 216,"popcode": "SOSNRxxHLR","cname": "Hellroaring Creek","species": 4,"run": 1,locations: []},
 //{"mpop": 16,"esu": 8,"popname": "Sockeye Salmon (Snake River ESU) - Petit Lake","popid": 219,"popcode": "SOSNRxxPET","cname": "Petit Lake","species": 4,"run": 1,locations: []},
 //{"mpop": 16,"esu": 8,"popname": "Sockeye Salmon (Snake River ESU) - Stanley Lake","popid": 221,"popcode": "SOSNRxxSTN","cname": "Stanley Lake","species": 4,"run": 1,locations: []},
 //{"mpop": 16,"esu": 8,"popname": "Sockeye Salmon (Snake River ESU) - Yellow Belly Lake","popid": 224,"popcode": "SOSNRxxYLW","cname": "Yellow Belly Lake","species": 4,"run": 1,locations: []},
 //{"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Panther Creek","popid": 86,"popcode": "CKSNRssPAN","cname": "Panther Creek","species": 1,"run": 4,locations: ["Panther"]},
 //{"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - North Fork Salmon River","popid": 84,"popcode": "CKSNRssNFS","cname": "North Fork Salmon River","species": 1,"run": 4,locations: ["NFSalmon"]},
 {"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Salmon R. Lwr. below Redfish Lk","popid": 88,"popcode": "CKSNRssSLM","cname": "Salmon River Lower Mainstem below Redfish Lake","species": 1,"run": 4,locations: ["LowerSalmonMS"]},
  {"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Lemhi River","popid": 70,"popcode": "CKSNRssLEM","cname": "Lemhi River","species": 1,"run": 4,locations: ["Lemhi"]},
  {"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Pahsimeroi River","popid": 85,"popcode": "CKSNRssPAH","cname": "Pahsimeroi River","species": 1,"run": 4,locations: ["Pahsimeroi"]},
  {"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - East Fork Salmon River","popid": 64,"popcode": "CKSNRssEFS","cname": "East Fork Salmon River","species": 1,"run": 4,locations: ["EFSalmon"]},
  {"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Yankee Fork","popid": 99,"popcode": "CKSNRssYNK","cname": "Yankee Fork","species": 1,"run": 4,locations: ["Yankee"]},
  {"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Valley Creek","popid": 97,"popcode": "CKSNRssVAL","cname": "Valley Creek","species": 1,"run": 4,locations: ["Valley"]},
  {"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Salmon R. Upr. above Redfish Lk","popid": 89,"popcode": "CKSNRssSLR","cname": "Salmon River Upper Mainstem above Redfish Lake","species": 1,"run": 4,locations: ["UpperSalmon"]},
  {"mpop": 23,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Satus Creek","popid": 259,"popcode": "STMCRsuSAT","cname": "Satus Creek","species": 5,"run": 5,locations: ["Satus"]},
  {"mpop": 23,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Toppenish Creek","popid": 261,"popcode": "STMCRsuTOP","cname": "Toppenish Creek","species": 5,"run": 5,locations: ["Toppenish"]},
  {"mpop": 23,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Naches River","popid": 256,"popcode": "STMCRsuNCH","cname": "Naches River","species": 5,"run": 5,locations: ["Naches"]},
  {"mpop": 23,"esu": 5,"popname": "Steelhead (Middle Columbia River DPS) - Yakima River upper mainstem","popid": 267,"popcode": "STMCRsuYAK","cname": "Yakima River upper mainstem","species": 5,"run": 5,locations: ["Yakima"]},
  {"mpop": 18,"esu": 10,"popname": "Chinook Salmon (Upper Columbia River Spring-run ESU) - Wenatchee River","popid": 102,"popcode": "CKUCRspWEN","cname": "Wenatchee River","species": 1,"run": 3,locations: ["Wenatchee"]},
  {"mpop": 18,"esu": 10,"popname": "Chinook Salmon (Upper Columbia River Spring-run ESU) - Entiat River","popid": 100,"popcode": "CKUCRspENT","cname": "Entiat River","species": 1,"run": 3,locations: ["Entiat"]},
  {"mpop": 18,"esu": 10,"popname": "Chinook Salmon (Upper Columbia River Spring-run ESU) - Methow River","popid": 101,"popcode": "CKUCRspMET","cname": "Methow River","species": 1,"run": 3,locations: ["Methow"]},
  {"mpop": 18,"esu": 10,"popname": "Chinook Salmon (Upper Columbia River Spring-run ESU) - Okanogan River","popid": 337,"popcode": "CKUCRspOKA","cname": "Okanogan River","species": 1,"run": 5,locations: ["Okanogan"]},
 //{"mpop": 18,"esu": 11,"popname": "Steelhead (Upper Columbia River DPS) - Crab Creek","popid": 327,"popcode": "STUCRsuCRA","cname": "Crab Creek","species": 5,"run": 5,locations: []},
  {"mpop": 18,"esu": 11,"popname": "Steelhead (Upper Columbia River DPS) - Wenatchee River","popid": 331,"popcode": "STUCRsuWEN","cname": "Wenatchee River","species": 5,"run": 5,locations: ["Wenatchee"]},
  {"mpop": 18,"esu": 11,"popname": "Steelhead (Upper Columbia River DPS) - Entiat River","popid": 328,"popcode": "STUCRsuENT","cname": "Entiat River","species": 5,"run": 5,locations: ["Entiat"]},
  {"mpop": 18,"esu": 11,"popname": "Steelhead (Upper Columbia River DPS) - Methow River","popid": 329,"popcode": "STUCRsuMET","cname": "Methow River","species": 5,"run": 5,locations: ["Methow"]},
  {"mpop": 18,"esu": 11,"popname": "Steelhead (Upper Columbia River DPS) - Okanogan River","popid": 330,"popcode": "STUCRsuOKA","cname": "Okanogan River","species": 5,"run": 5,locations: ["Okanogan"]}
];

var states = {"type":"FeatureCollection","features":[
{"type":"Feature","id":"16","properties":{"name":"ID"},"geometry":{"type":"Polygon","coordinates":[[[-116.04751,49.000239],[-116.04751,47.976051],[-115.724371,47.696727],[-115.718894,47.42288],[-115.527201,47.302388],[-115.324554,47.258572],[-115.302646,47.187372],[-114.930214,46.919002],[-114.886399,46.809463],[-114.623506,46.705401],[-114.612552,46.639678],[-114.322274,46.645155],[-114.464674,46.272723],[-114.492059,46.037214],[-114.387997,45.88386],[-114.568736,45.774321],[-114.497536,45.670259],[-114.546828,45.560721],[-114.333228,45.456659],[-114.086765,45.593582],[-113.98818,45.703121],[-113.807441,45.604536],[-113.834826,45.522382],[-113.736241,45.330689],[-113.571933,45.128042],[-113.45144,45.056842],[-113.456917,44.865149],[-113.341901,44.782995],[-113.133778,44.772041],[-113.002331,44.448902],[-112.887315,44.394132],[-112.783254,44.48724],[-112.471068,44.481763],[-112.241036,44.569394],[-112.104113,44.520102],[-111.868605,44.563917],[-111.819312,44.509148],[-111.616665,44.547487],[-111.386634,44.75561],[-111.227803,44.580348],[-111.047063,44.476286],[-111.047063,42.000709],[-112.164359,41.995232],[-114.04295,41.995232],[-117.027882,42.000709],[-117.027882,43.830007],[-116.896436,44.158624],[-116.97859,44.240778],[-117.170283,44.257209],[-117.241483,44.394132],[-117.038836,44.750133],[-116.934774,44.782995],[-116.830713,44.930872],[-116.847143,45.02398],[-116.732128,45.144473],[-116.671881,45.319735],[-116.463758,45.61549],[-116.545912,45.752413],[-116.78142,45.823614],[-116.918344,45.993399],[-116.92382,46.168661],[-117.055267,46.343923],[-117.038836,46.426077],[-117.044313,47.762451],[-117.033359,49.000239],[-116.04751,49.000239]]]}},
{"type":"Feature","id":"41","properties":{"name":"OR"},"geometry":{"type":"Polygon","coordinates":[[[-123.211348,46.174138],[-123.11824,46.185092],[-122.904639,46.08103],[-122.811531,45.960537],[-122.762239,45.659305],[-122.247407,45.549767],[-121.809251,45.708598],[-121.535404,45.725029],[-121.217742,45.670259],[-121.18488,45.604536],[-120.637186,45.746937],[-120.505739,45.697644],[-120.209985,45.725029],[-119.963522,45.823614],[-119.525367,45.911245],[-119.125551,45.933153],[-118.988627,45.998876],[-116.918344,45.993399],[-116.78142,45.823614],[-116.545912,45.752413],[-116.463758,45.61549],[-116.671881,45.319735],[-116.732128,45.144473],[-116.847143,45.02398],[-116.830713,44.930872],[-116.934774,44.782995],[-117.038836,44.750133],[-117.241483,44.394132],[-117.170283,44.257209],[-116.97859,44.240778],[-116.896436,44.158624],[-117.027882,43.830007],[-117.027882,42.000709],[-118.698349,41.989755],[-120.001861,41.995232],[-121.037003,41.995232],[-122.378853,42.011663],[-123.233256,42.006186],[-124.213628,42.000709],[-124.356029,42.115725],[-124.432706,42.438865],[-124.416275,42.663419],[-124.553198,42.838681],[-124.454613,43.002989],[-124.383413,43.271359],[-124.235536,43.55616],[-124.169813,43.8081],[-124.060274,44.657025],[-124.076705,44.772041],[-123.97812,45.144473],[-123.939781,45.659305],[-123.994551,45.944106],[-123.945258,46.113892],[-123.545441,46.261769],[-123.370179,46.146753],[-123.211348,46.174138]]]}},
{"type":"Feature","id":"53","properties":{"name":"WA"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-117.033359,49.000239],[-117.044313,47.762451],[-117.038836,46.426077],[-117.055267,46.343923],[-116.92382,46.168661],[-116.918344,45.993399],[-118.988627,45.998876],[-119.125551,45.933153],[-119.525367,45.911245],[-119.963522,45.823614],[-120.209985,45.725029],[-120.505739,45.697644],[-120.637186,45.746937],[-121.18488,45.604536],[-121.217742,45.670259],[-121.535404,45.725029],[-121.809251,45.708598],[-122.247407,45.549767],[-122.762239,45.659305],[-122.811531,45.960537],[-122.904639,46.08103],[-123.11824,46.185092],[-123.211348,46.174138],[-123.370179,46.146753],[-123.545441,46.261769],[-123.72618,46.300108],[-123.874058,46.239861],[-124.065751,46.327492],[-124.027412,46.464416],[-123.895966,46.535616],[-124.098612,46.74374],[-124.235536,47.285957],[-124.31769,47.357157],[-124.427229,47.740543],[-124.624399,47.88842],[-124.706553,48.184175],[-124.597014,48.381345],[-124.394367,48.288237],[-123.983597,48.162267],[-123.704273,48.167744],[-123.424949,48.118452],[-123.162056,48.167744],[-123.036086,48.080113],[-122.800578,48.08559],[-122.636269,47.866512],[-122.515777,47.882943],[-122.493869,47.587189],[-122.422669,47.318818],[-122.324084,47.346203],[-122.422669,47.576235],[-122.395284,47.800789],[-122.230976,48.030821],[-122.362422,48.123929],[-122.373376,48.288237],[-122.471961,48.468976],[-122.422669,48.600422],[-122.488392,48.753777],[-122.647223,48.775685],[-122.795101,48.8907],[-122.756762,49.000],[-121.756762,49.000],[-120.756762,49.000],[-119.756762,49.000],[-118.756762,49.000],[-118.000000,49.000],[-117.033359,49.000239]]],[[[-122.718423,48.310145],[-122.586977,48.35396],[-122.608885,48.151313],[-122.767716,48.227991],[-122.718423,48.310145]]],[[[-123.025132,48.583992],[-122.915593,48.715438],[-122.767716,48.556607],[-122.811531,48.419683],[-123.041563,48.458022],[-123.025132,48.583992]]]]}}
]};

var rivers = {
"type": "FeatureCollection",                                                                   
"features": [
{ "type": "Feature", "properties": { "Name": "Columbia River" }, "geometry": { "type": "LineString", "coordinates": [ [ -124.0382713706941, 46.247901160146597, 0.0 ], [ -123.9037222970983, 46.211655125566722, 0.0 ], [ -123.76109804464861, 46.244884242007522, 0.0 ], [ -123.6558767572982, 46.247312901841212, 0.0 ], [ -123.5390999889179, 46.259445452648343, 0.0 ], [ -123.4705386811021, 46.265166155440873, 0.0 ], [ -123.4325283361829, 46.231791441477327, 0.0 ], [ -123.39200908308121, 46.190585605381457, 0.0 ], [ -123.33366600527501, 46.155565970932301, 0.0 ], [ -123.3288217687479, 46.151895672430562, 0.0 ], [ -123.2897322962373, 46.140537963809336, 0.0 ], [ -123.2450092805673, 46.150534658042659, 0.0 ], [ -123.24229770156219, 46.151716955681451, 0.0 ], [ -123.2154265789749, 46.165505603945988, 0.0 ], [ -123.18280630141101, 46.180635990368273, 0.0 ], [ -123.143217756577, 46.185266714997269, 0.0 ], [ -123.0899371081416, 46.165772412314929, 0.0 ], [ -123.0256430942482, 46.139944649001237, 0.0 ], [ -122.97715918721011, 46.109195231222571, 0.0 ], [ -122.9197243803503, 46.088915927504523, 0.0 ], [ -122.89315509858081, 46.07361830280221, 0.0 ], [ -122.87849019471599, 46.034309921671962, 0.0 ], [ -122.8480252465323, 45.999276479020359, 0.0 ], [ -122.8136133626178, 45.954568128147457, 0.0 ], [ -122.8085048798158, 45.917755762018189, 0.0 ], [ -122.79019746962609, 45.881540100114343, 0.0 ], [ -122.7936508602814, 45.825217509204712, 0.0 ], [ -122.78875639418339, 45.79852194871826, 0.0 ], [ -122.7646118801861, 45.756039666287329, 0.0 ], [ -122.7680405313961, 45.704820734278911, 0.0 ], [ -122.764833603529, 45.658017210351922, 0.0 ], [ -122.69802162415949, 45.630159936810927, 0.0 ], [ -122.59811440550131, 45.600294196769831, 0.0 ], [ -122.4321712906122, 45.565077114998459, 0.0 ], [ -122.3903665384976, 45.572579911243679, 0.0 ], [ -122.3527554616109, 45.567844569190548, 0.0 ], [ -122.3261573589906, 45.548474934983673, 0.0 ], [ -122.27190652590031, 45.547714771785017, 0.0 ], [ -122.20941998123929, 45.560355255786, 0.0 ], [ -122.14955241864109, 45.584755127191883, 0.0 ], [ -122.0486200580056, 45.609458310400292, 0.0 ], [ -121.9514002641791, 45.647921824100273, 0.0 ], [ -121.91256161855689, 45.656036508753232, 0.0 ], [ -121.8775514559685, 45.686891389348929, 0.0 ], [ -121.8175216491323, 45.703278661217368, 0.0 ], [ -121.74877681778101, 45.694896230159337, 0.0 ], [ -121.710019706053, 45.694023380025229, 0.0 ], [ -121.5660798577683, 45.718791863199918, 0.0 ], [ -121.5204375316104, 45.722218460820052, 0.0 ], [ -121.4663985018362, 45.7051428126818, 0.0 ], [ -121.416496038148, 45.693590686482331, 0.0 ], [ -121.3867580905531, 45.695401978713512, 0.0 ], [ -121.3535048676604, 45.704125077617562, 0.0 ], [ -121.32596383882129, 45.700517495758817, 0.0 ], [ -121.285886099295, 45.686535417146679, 0.0 ], [ -121.25069545375661, 45.678276814563908, 0.0 ], [ -121.2170911477148, 45.670006154826822, 0.0 ], [ -121.202913375888, 45.65675263090133, 0.0 ], [ -121.19592250041001, 45.63016902851745, 0.0 ], [ -121.19308494806489, 45.616346761920617, 0.0 ], [ -121.1688905172437, 45.604511191206562, 0.0 ], [ -121.1406444585124, 45.606887737206549, 0.0 ], [ -121.1129527324244, 45.628202653354457, 0.0 ], [ -121.076464294929, 45.647929061067558, 0.0 ], [ -121.02568563617309, 45.653364401078811, 0.0 ], [ -120.98821254955929, 45.649168145120527, 0.0 ], [ -120.9503869957765, 45.655951508421587, 0.0 ], [ -120.920028535282, 45.636344535082451, 0.0 ], [ -120.90009287216969, 45.636294468233253, 0.0 ], [ -120.8656818756144, 45.66380482771735, 0.0 ], [ -120.82427464443229, 45.677651101318922, 0.0 ], [ -120.757501865533, 45.694630950311847, 0.0 ], [ -120.7174520299947, 45.708393258056418, 0.0 ], [ -120.6789646946453, 45.72512837705289, 0.0 ], [ -120.6529231954727, 45.738331512380867, 0.0 ], [ -120.6093356005325, 45.747327688408603, 0.0 ], [ -120.5758189504387, 45.738794008019759, 0.0 ], [ -120.548980770132, 45.727057685016611, 0.0 ], [ -120.514016176114, 45.699586324534728, 0.0 ], [ -120.4904197755487, 45.693714855904602, 0.0 ], [ -120.4520721089077, 45.692301859652687, 0.0 ], [ -120.3980747410358, 45.699696799694017, 0.0 ], [ -120.323887935084, 45.713723738161647, 0.0 ], [ -120.2439776000538, 45.721151283577889, 0.0 ], [ -120.20019860359029, 45.727939050473118, 0.0 ], [ -120.1597873239763, 45.765625501529627, 0.0 ], [ -120.0683055336049, 45.786732540341973, 0.0 ], [ -119.9709529528582, 45.821356548757379, 0.0 ], [ -119.8903719981371, 45.830433673554843, 0.0 ], [ -119.7915721563221, 45.846014828731697, 0.0 ], [ -119.7084185962901, 45.861056262854738, 0.0 ], [ -119.6478922152495, 45.893097352218788, 0.0 ], [ -119.5888223509822, 45.926026455379173, 0.0 ], [ -119.58326022846531, 45.928211068638952, 0.0 ], [ -119.5471002666218, 45.922503335044759, 0.0 ], [ -119.511670344145, 45.906811567307628, 0.0 ], [ -119.46488179637809, 45.911375794393159, 0.0 ], [ -119.4082090953646, 45.920290983785343, 0.0 ], [ -119.36093982880431, 45.923952135186177, 0.0 ], [ -119.2822098409037, 45.940389857264442, 0.0 ], [ -119.20651676282409, 45.926990709126947, 0.0 ], [ -119.1268651770295, 45.933463987909697, 0.0 ], [ -119.0514989389665, 45.962643217677808, 0.0 ], [ -118.9909534280425, 45.99959801806996, 0.0 ], [ -118.95214769452031, 46.028766517036857, 0.0 ], [ -118.9371805170221, 46.071187075555031, 0.0 ], [ -118.9560547788727, 46.112344871243117, 0.0 ], [ -118.9911008531291, 46.15444680126334, 0.0 ], [ -119.0216072944508, 46.181983262179493, 0.0 ], [ -119.08093822776461, 46.209152553215773, 0.0 ], [ -119.1336219060649, 46.223445027347751, 0.0 ], [ -119.2034629822983, 46.235228301519093, 0.0 ], [ -119.2368758844768, 46.261117643208877, 0.0 ], [ -119.26501272582151, 46.273133504985353, 0.0 ], [ -119.2587273605552, 46.308151891295118, 0.0 ], [ -119.25924706675811, 46.337018489539652, 0.0 ], [ -119.2663499337947, 46.37854409975872, 0.0 ], [ -119.2608218977055, 46.424494838136937, 0.0 ], [ -119.2601016029456, 46.478210574461507, 0.0 ], [ -119.27322053836809, 46.522530939256612, 0.0 ], [ -119.3263575466825, 46.559538378072723, 0.0 ], [ -119.3926432260991, 46.598129128843247, 0.0 ], [ -119.41278168819331, 46.637310134644487, 0.0 ], [ -119.4275604631907, 46.661738193164922, 0.0 ], [ -119.4543870973208, 46.671828533655543, 0.0 ], [ -119.4547607006173, 46.697645873914219, 0.0 ], [ -119.4758783249053, 46.708887380161777, 0.0 ], [ -119.5220587854304, 46.725258465312123, 0.0 ], [ -119.5576293089472, 46.695220511330866, 0.0 ], [ -119.59561442417569, 46.660033172086777, 0.0 ], [ -119.6464193678336, 46.641345946137577, 0.0 ], [ -119.67408289368581, 46.642386012058473, 0.0 ], [ -119.699168835292, 46.647496020134277, 0.0 ], [ -119.7316901903916, 46.641183393174003, 0.0 ], [ -119.7702708505997, 46.634800601647022, 0.0 ], [ -119.8090090058864, 46.628464237438742, 0.0 ], [ -119.8600257105162, 46.627707894141111, 0.0 ], [ -119.8994773822146, 46.635105077408731, 0.0 ], [ -119.9299603766713, 46.668882181281887, 0.0 ], [ -119.9610596678619, 46.710590002058609, 0.0 ], [ -119.97018143951649, 46.746303036855373, 0.0 ], [ -119.9481089035484, 46.779037274623988, 0.0 ], [ -119.92515484764451, 46.80369701711281, 0.0 ], [ -119.931178101401, 46.821551416254493, 0.0 ], [ -119.9662468429775, 46.859089140539929, 0.0 ], [ -119.97467542262901, 46.944807396866942, 0.0 ], [ -119.9926625942969, 46.992063365872269, 0.0 ], [ -120.01709506764379, 47.044907744418502, 0.0 ], [ -120.03694488613741, 47.072965501065731, 0.0 ], [ -120.0159614799815, 47.111479092454857, 0.0 ], [ -120.0024922521314, 47.151807516604727, 0.0 ], [ -120.0095702596211, 47.168428848863087, 0.0 ], [ -119.9980787840514, 47.205632107261529, 0.0 ], [ -120.0096697011948, 47.223065383184903, 0.0 ], [ -120.0515801665123, 47.224559067282712, 0.0 ], [ -120.083091229415, 47.230140141575248, 0.0 ], [ -120.09520404011521, 47.248594211581029, 0.0 ], [ -120.08677393495709, 47.290952105867078, 0.0 ], [ -120.0841103040777, 47.33567499059275, 0.0 ], [ -120.125330647976, 47.363190648203599, 0.0 ], [ -120.1911863250771, 47.37557970728389, 0.0 ], [ -120.26617001913669, 47.386576548138827, 0.0 ], [ -120.29045219522961, 47.395545109359247, 0.0 ], [ -120.3065978964589, 47.428688023781852, 0.0 ], [ -120.3224252464552, 47.457892125263811, 0.0 ], [ -120.30308645166581, 47.505372690813218, 0.0 ], [ -120.2874345087162, 47.544712403301723, 0.0 ], [ -120.26476604689719, 47.554482208869871, 0.0 ], [ -120.24358454532231, 47.599239336596007, 0.0 ], [ -120.23612235811591, 47.632466797773027, 0.0 ], [ -120.19200216784439, 47.684815729091461, 0.0 ], [ -120.20104767105479, 47.703195931425753, 0.0 ], [ -120.22480281174251, 47.720973914961903, 0.0 ], [ -120.20516047511001, 47.749497690426203, 0.0 ], [ -120.1567370322186, 47.77025540697408, 0.0 ], [ -120.1185680262943, 47.77615040255678, 0.0 ], [ -120.0786957633408, 47.760949903038913, 0.0 ], [ -120.01523552351399, 47.779130219195437, 0.0 ], [ -119.98458626807179, 47.797794505008632, 0.0 ], [ -119.95638791949681, 47.846127049242192, 0.0 ], [ -119.9256484582495, 47.854851293340481, 0.0 ], [ -119.9110574467195, 47.877098776206587, 0.0 ], [ -119.9142931989779, 47.899745196412262, 0.0 ], [ -119.87606496483789, 47.926831454074623, 0.0 ], [ -119.8586718548744, 47.944401693727507, 0.0 ], [ -119.8826218857845, 47.970306806142887, 0.0 ], [ -119.8729257346623, 47.997478166526591, 0.0 ], [ -119.8718227923035, 48.019354269137757, 0.0 ], [ -119.8966378539085, 48.050216546488357, 0.0 ], [ -119.8581282753531, 48.070492918454669, 0.0 ], [ -119.79405895751511, 48.088718391272053, 0.0 ], [ -119.747525518665, 48.086460063395151, 0.0 ], [ -119.70700230148, 48.084950903039889, 0.0 ], [ -119.6819617096391, 48.08577173475102, 0.0 ], [ -119.67075283438329, 48.074210696839678, 0.0 ], [ -119.6793308292519, 48.054394299231468, 0.0 ], [ -119.68904268419941, 48.040122815871896, 0.0 ], [ -119.69461624489099, 48.031316838002063, 0.0 ], [ -119.6898696796648, 48.023691386569858, 0.0 ], [ -119.6898481758962, 48.023413658908112, 0.0 ], [ -119.6788569176824, 48.015991494390867, 0.0 ], [ -119.6780265563083, 48.016019877990253, 0.0 ], [ -119.66498033981161, 48.008677885055199, 0.0 ], [ -119.6454896151221, 47.998765431039267, 0.0 ], [ -119.62204999577411, 47.99597332748921, 0.0 ], [ -119.60933765872031, 48.003633010682769, 0.0 ], [ -119.6073550271728, 48.004812808686829, 0.0 ], [ -119.5946259908719, 48.018031568650017, 0.0 ], [ -119.5942801591783, 48.018876759707702, 0.0 ], [ -119.5935415511275, 48.020012999837213, 0.0 ], [ -119.59236307322411, 48.020886484598151, 0.0 ], [ -119.57366506240101, 48.032646347964821, 0.0 ], [ -119.5720501561381, 48.033256276802852, 0.0 ], [ -119.5708278692518, 48.033575165172422, 0.0 ], [ -119.5296997818421, 48.056928521925222, 0.0 ], [ -119.5182206301422, 48.070665650606593, 0.0 ], [ -119.5069571122075, 48.081609040195829, 0.0 ], [ -119.50413840145001, 48.082525257296602, 0.0 ], [ -119.4848011739582, 48.080105523362022, 0.0 ], [ -119.4634334841016, 48.081016832222787, 0.0 ], [ -119.4429554173785, 48.078721660598568, 0.0 ], [ -119.42306969015461, 48.061745469920943, 0.0 ], [ -119.4044068409536, 48.051616695877279, 0.0 ], [ -119.3900055609929, 48.049386676154683, 0.0 ], [ -119.3695971319798, 48.052716649161283, 0.0 ], [ -119.34227167524681, 48.049514569775418, 0.0 ], [ -119.3363471212552, 48.052410668939963, 0.0 ], [ -119.3290392029897, 48.064199789632369, 0.0 ], [ -119.33016319150759, 48.084785099603899, 0.0 ], [ -119.3269928276702, 48.09710272303861, 0.0 ], [ -119.31258228336171, 48.110049534642592, 0.0 ], [ -119.29744512208519, 48.11639569275701, 0.0 ], [ -119.2816479354766, 48.110128738310372, 0.0 ], [ -119.2652134628115, 48.103382815983927, 0.0 ], [ -119.25361985254931, 48.102142907019207, 0.0 ], [ -119.2326120516493, 48.113461201739661, 0.0 ], [ -119.2152358513361, 48.11530779520367, 0.0 ], [ -119.2142320668097, 48.115334908426703, 0.0 ], [ -119.1991224782945, 48.125828587715141, 0.0 ], [ -119.18706538863201, 48.128925827207929, 0.0 ], [ -119.1711326634464, 48.13166078610643, 0.0 ], [ -119.15732500646919, 48.142558405415798, 0.0 ], [ -119.1384660454323, 48.150143717424243, 0.0 ], [ -119.1214450400436, 48.149480226897992, 0.0 ], [ -119.1093817266885, 48.141939607878079, 0.0 ], [ -119.09445273412859, 48.137171581350472, 0.0 ], [ -119.07562929900919, 48.139980894542042, 0.0 ], [ -119.0584739909968, 48.135910832337537, 0.0 ], [ -119.0430769268801, 48.125521871652992, 0.0 ], [ -119.0294225111265, 48.113445291788032, 0.0 ], [ -119.03002161083231, 48.112522766800112, 0.0 ], [ -119.02279497920659, 48.09006292686049, 0.0 ], [ -119.0162716972394, 48.066257878336359, 0.0 ], [ -119.0048944830688, 48.044538877579107, 0.0 ], [ -118.97885914627579, 48.035301273320883, 0.0 ], [ -118.9593305170897, 48.02557810100533, 0.0 ], [ -118.95175855634351, 48.017112770332332, 0.0 ], [ -118.9543329050189, 48.005556490425157, 0.0 ], [ -118.9612685751156, 47.997429393488439, 0.0 ], [ -118.9646528806269, 47.986681020644497, 0.0 ], [ -118.9755287930377, 47.97572833502489, 0.0 ], [ -118.9835367212176, 47.969167840430423, 0.0 ], [ -118.9820527565951, 47.956538800557702, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Snake River"}, "geometry": { "type": "LineString", "coordinates": [ [ -119.0379196215773, 46.194825795331312, 0.0 ], [ -119.0043209167423, 46.229727516109563, 0.0 ], [ -118.862370718465, 46.249448892897313, 0.0 ], [ -118.7800292924458, 46.292070626126488, 0.0 ], [ -118.73906232608989, 46.359514712150002, 0.0 ], [ -118.6394164066179, 46.412552535545302, 0.0 ], [ -118.5974720472643, 46.525959410320269, 0.0 ], [ -118.46933056783961, 46.593655250674907, 0.0 ], [ -118.2517016491781, 46.59956331129802, 0.0 ], [ -118.1622676509739, 46.556897811277501, 0.0 ], [ -118.09035483629739, 46.576607875322452, 0.0 ], [ -117.94377244576989, 46.586438804383533, 0.0 ], [ -117.87690202187579, 46.587882731147992, 0.0 ], [ -117.84939753610659, 46.621028676471582, 0.0 ], [ -117.8403349418267, 46.622516953473102, 0.0 ], [ -117.72527424382039, 46.695247381754847, 0.0 ], [ -117.7179930045566, 46.695412640591861, 0.0 ], [ -117.5728122596892, 46.677557260656293, 0.0 ], [ -117.4495102450911, 46.672988223170087, 0.0 ], [ -117.3650099217373, 46.610819436051891, 0.0 ], [ -117.30078339745999, 46.572192864492692, 0.0 ], [ -117.2429901780839, 46.527127572018202, 0.0 ], [ -117.2314701844807, 46.47095237620124, 0.0 ], [ -117.1970411020217, 46.419298140784981, 0.0 ], [ -117.1282932470418, 46.424016624020652, 0.0 ], [ -117.0508971374318, 46.428034559667999, 0.0 ], [ -117.03253707085899, 46.419640312994218, 0.0 ], [ -117.0610196738668, 46.35559378044416, 0.0 ], [ -116.9935256902819, 46.283138631848381, 0.0 ], [ -116.9564295751299, 46.19652186629277, 0.0 ], [ -116.91735510878399, 46.157264418293437, 0.0 ], [ -116.9652628395102, 46.082949958730502, 0.0 ], [ -116.96342535097369, 46.081749946640983, 0.0 ], [ -116.9137248776297, 45.986010288979237, 0.0 ], [ -116.84442463964631, 45.893022913790873, 0.0 ], [ -116.78729296717761, 45.8482268004215, 0.0 ], [ -116.7580229433227, 45.818991699324272, 0.0 ], [ -116.7191027573533, 45.829348948930203, 0.0 ], [ -116.68268957849671, 45.801100888553073, 0.0 ], [ -116.66073247049781, 45.784023368175937, 0.0 ], [ -116.61958536558291, 45.783366854987548, 0.0 ], [ -116.5615353632447, 45.760592594092728, 0.0 ], [ -116.5339121744846, 45.712219307312353, 0.0 ], [ -116.5222081316968, 45.682527202219532, 0.0 ], [ -116.47308922027921, 45.627044429029617, 0.0 ], [ -116.4636296270797, 45.599775437325214, 0.0 ], [ -116.5328074478175, 45.518076435286687, 0.0 ], [ -116.5592055918778, 45.483200789025503, 0.0 ], [ -116.5923296507677, 45.422669946972682, 0.0 ], [ -116.6436740237269, 45.363193790340702, 0.0 ], [ -116.6777864762612, 45.31173018379355, 0.0 ], [ -116.6736071118125, 45.27635516415198, 0.0 ], [ -116.688808046457, 45.265976232657941, 0.0 ], [ -116.7100021472539, 45.217105301340702, 0.0 ], [ -116.7240938038923, 45.16416203140205, 0.0 ], [ -116.7336578479227, 45.138624450779993, 0.0 ], [ -116.7461188323949, 45.129224363801697, 0.0 ], [ -116.7548616517669, 45.112081166376683, 0.0 ], [ -116.773543057322, 45.103192683483442, 0.0 ], [ -116.78599025948471, 45.093530906314278, 0.0 ], [ -116.78545038139769, 45.079988477437539, 0.0 ], [ -116.8070831702983, 45.053088124140707, 0.0 ], [ -116.8458509057559, 45.021866037350293, 0.0 ], [ -116.8486574982844, 44.996385125454772, 0.0 ], [ -116.85689305848589, 44.982478470509662, 0.0 ], [ -116.84663459515779, 44.974397383873708, 0.0 ], [ -116.83244159302799, 44.983334236652112, 0.0 ], [ -116.82869588581239, 44.977248129795143, 0.0 ], [ -116.8491455675578, 44.964755341784972, 0.0 ], [ -116.849502146961, 44.951994165873693, 0.0 ], [ -116.8317415597194, 44.934945730312648, 0.0 ], [ -116.8657644681484, 44.872244752331703, 0.0 ], [ -116.891882980197, 44.856569286045307, 0.0 ], [ -116.9013394534222, 44.837628600037007, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Salmon River"}, "geometry": { "type": "LineString", "coordinates": [ [ -116.7939918702987, 45.856111139689723, 0.0 ], [ -116.7898167524441, 45.855369372052472, 0.0 ], [ -116.77867753553301, 45.860524166736703, 0.0 ], [ -116.7677683177703, 45.862854230144713, 0.0 ], [ -116.75855078964121, 45.867592743723733, 0.0 ], [ -116.7493724280362, 45.869321597565559, 0.0 ], [ -116.7437276807845, 45.876555659820461, 0.0 ], [ -116.7324213339683, 45.890450136324532, 0.0 ], [ -116.72928311412861, 45.903319353900727, 0.0 ], [ -116.7482687116115, 45.918643110208372, 0.0 ], [ -116.75621483609019, 45.942202898074029, 0.0 ], [ -116.74161191591899, 45.969154217852306, 0.0 ], [ -116.702701190224, 45.99773102350045, 0.0 ], [ -116.662316863985, 45.993176420938163, 0.0 ], [ -116.64260626141839, 46.000593216406472, 0.0 ], [ -116.6440892402851, 46.031899824229718, 0.0 ], [ -116.6267585409725, 46.038017412520048, 0.0 ], [ -116.6116406453646, 46.031431155661167, 0.0 ], [ -116.6184417988223, 46.010365347486498, 0.0 ], [ -116.5974198940123, 46.006840869482332, 0.0 ], [ -116.5629470279026, 45.980650358488838, 0.0 ], [ -116.5225029220114, 45.969877574054742, 0.0 ], [ -116.49940189321229, 45.975630847358111, 0.0 ], [ -116.4610633133456, 45.970627006575548, 0.0 ], [ -116.4403321855914, 45.960012523299717, 0.0 ], [ -116.4304802325717, 45.917477988190029, 0.0 ], [ -116.42165267652609, 45.912182390949553, 0.0 ], [ -116.4107549112755, 45.915767341010152, 0.0 ], [ -116.4075074943289, 45.904379324165767, 0.0 ], [ -116.3931150733959, 45.903382148221297, 0.0 ], [ -116.35084473980019, 45.894645148209129, 0.0 ], [ -116.32818185148371, 45.889870835392287, 0.0 ], [ -116.29811522636081, 45.858854599027453, 0.0 ], [ -116.3254999944446, 45.759661505703811, 0.0 ], [ -116.32330854445939, 45.741338516754482, 0.0 ], [ -116.30217129453339, 45.730303497766812, 0.0 ], [ -116.3144282981834, 45.720090239621413, 0.0 ], [ -116.30958072786041, 45.680793823927381, 0.0 ], [ -116.3170417563956, 45.673380653292831, 0.0 ], [ -116.3085182896174, 45.665142455911919, 0.0 ], [ -116.2890497443472, 45.670915819773057, 0.0 ], [ -116.28337218255049, 45.662037694315771, 0.0 ], [ -116.2933187586993, 45.654763586393457, 0.0 ], [ -116.285962569001, 45.637200959495971, 0.0 ], [ -116.2899861110734, 45.628621756907187, 0.0 ], [ -116.3050725590745, 45.625149503592802, 0.0 ], [ -116.27427898486251, 45.602106493120012, 0.0 ], [ -116.3048916259304, 45.559276513310792, 0.0 ], [ -116.30006582502971, 45.509017487918683, 0.0 ], [ -116.3078475000115, 45.460742822286058, 0.0 ], [ -116.3090071432468, 45.45990746636641, 0.0 ], [ -116.3130402755143, 45.442610552589933, 0.0 ], [ -116.31598411928709, 45.417573224694102, 0.0 ], [ -116.31049408304111, 45.411382186347502, 0.0 ], [ -116.2881186995551, 45.423695831015927, 0.0 ], [ -116.24789821581849, 45.409553810203839, 0.0 ], [ -116.24620017422269, 45.409558511761013, 0.0 ], [ -116.2128696336475, 45.400302666564691, 0.0 ], [ -116.17230352661031, 45.418162433395842, 0.0 ], [ -116.1446236345253, 45.429231750384169, 0.0 ], [ -116.12589966044381, 45.407465688159562, 0.0 ], [ -116.1258755795142, 45.405833556348909, 0.0 ], [ -116.1026550059072, 45.400902903387447, 0.0 ], [ -116.05102272836589, 45.422556537072687, 0.0 ], [ -116.0481024051924, 45.422583119983528, 0.0 ], [ -115.9847660867574, 45.430550614877241, 0.0 ], [ -115.9294987218895, 45.459630840724436, 0.0 ], [ -115.801882316342, 45.469159916877857, 0.0 ], [ -115.7523744701822, 45.444686946521152, 0.0 ], [ -115.6971374683812, 45.444390548080108, 0.0 ], [ -115.60669418089761, 45.395808864559612, 0.0 ], [ -115.55040834562629, 45.383523675474393, 0.0 ], [ -115.5204248371095, 45.382975054958649, 0.0 ], [ -115.50275725274, 45.384240412482619, 0.0 ], [ -115.47493426246859, 45.404620263653527, 0.0 ], [ -115.45135527187669, 45.435444944381501, 0.0 ], [ -115.4312659665076, 45.454519911404503, 0.0 ], [ -115.3971300501363, 45.469484294328453, 0.0 ], [ -115.36998654970721, 45.47299283918418, 0.0 ], [ -115.3694656907504, 45.473036792772447, 0.0 ], [ -115.3490413535862, 45.481206417785202, 0.0 ], [ -115.3352212467893, 45.48929154332145, 0.0 ], [ -115.32454940648191, 45.504949549431871, 0.0 ], [ -115.32318201651211, 45.506580803341677, 0.0 ], [ -115.32184447895661, 45.507929188603534, 0.0 ], [ -115.3169748580648, 45.520155569717531, 0.0 ], [ -115.2948990713097, 45.534745069128448, 0.0 ], [ -115.2545542173675, 45.539226750249448, 0.0 ], [ -115.2534887838722, 45.539931714102622, 0.0 ], [ -115.22956880652499, 45.558506971116827, 0.0 ], [ -115.20786209624811, 45.568652243184417, 0.0 ], [ -115.1752755079978, 45.563258245830788, 0.0 ], [ -115.1397120463696, 45.540890295562143, 0.0 ], [ -115.05983577412781, 45.50979732240971, 0.0 ], [ -115.05859425484741, 45.508190346042007, 0.0 ], [ -115.024480832827, 45.508457046251607, 0.0 ], [ -115.022389699141, 45.508393736340473, 0.0 ], [ -114.9867365664453, 45.493459315019592, 0.0 ], [ -114.9628497472507, 45.472398753386393, 0.0 ], [ -114.9188223094728, 45.447439497900973, 0.0 ], [ -114.84896159243419, 45.409463972543257, 0.0 ], [ -114.8053841939262, 45.390973803030121, 0.0 ], [ -114.722866992544, 45.394709617891728, 0.0 ], [ -114.70811919785309, 45.384177293554657, 0.0 ], [ -114.7076407879765, 45.383347247421852, 0.0 ], [ -114.6768790186287, 45.363995226162778, 0.0 ], [ -114.64381728482201, 45.321770915825986, 0.0 ], [ -114.6021347436848, 45.296543979993181, 0.0 ], [ -114.58396358855261, 45.299030805654603, 0.0 ], [ -114.58298941306541, 45.299296863270968, 0.0 ], [ -114.556850707744, 45.30010998608978, 0.0 ], [ -114.5560629197024, 45.300353287509921, 0.0 ], [ -114.5287068779347, 45.301326618467243, 0.0 ], [ -114.5274991155176, 45.301447529894268, 0.0 ], [ -114.496366336417, 45.308611913484889, 0.0 ], [ -114.4952733520911, 45.308921653748499, 0.0 ], [ -114.4323103950878, 45.324010775386817, 0.0 ], [ -114.3689358187514, 45.329453354035088, 0.0 ], [ -114.36630135012911, 45.329699341258049, 0.0 ], [ -114.2869119770282, 45.372133536239922, 0.0 ], [ -114.28285914739109, 45.374464881516403, 0.0 ], [ -114.21053053712539, 45.400451929398699, 0.0 ], [ -114.1059977722667, 45.382218427232232, 0.0 ], [ -114.0479704573614, 45.38747764181015, 0.0 ], [ -114.0483653143551, 45.3887036095459, 0.0 ], [ -114.04441575407201, 45.391676282537382, 0.0 ], [ -113.9980121174985, 45.406132704096642, 0.0 ], [ -113.9537317380489, 45.36062523487805, 0.0 ], [ -113.897153782987, 45.295633207751713, 0.0 ], [ -113.89688073789679, 45.294402526706463, 0.0 ], [ -113.8954113850467, 45.208240273027052, 0.0 ], [ -113.9011304208021, 45.143970594623973, 0.0 ], [ -113.9070436778141, 45.073882078559294, 0.0 ], [ -113.9579384130279, 44.948074469953752, 0.0 ], [ -113.99086217424529, 44.817172612212673, 0.0 ], [ -113.9971777820511, 44.763989823033022, 0.0 ], [ -114.03991965594111, 44.705688284786369, 0.0 ], [ -114.0905717494403, 44.646438646715367, 0.0 ], [ -114.1618109495643, 44.630966940306863, 0.0 ], [ -114.1669995514699, 44.624692516198188, 0.0 ], [ -114.1676737396283, 44.62004619019261, 0.0 ], [ -114.19044365887299, 44.565759092977551, 0.0 ], [ -114.1970070501398, 44.5582407768064, 0.0 ], [ -114.22425957024601, 44.462340009104089, 0.0 ], [ -114.2253711511656, 44.459924725871048, 0.0 ], [ -114.2561549688502, 44.381976987162837, 0.0 ], [ -114.2841661543592, 44.33777819035253, 0.0 ], [ -114.2938774712341, 44.308227812335417, 0.0 ], [ -114.3111671895746, 44.282166645340133, 0.0 ], [ -114.3288762865035, 44.263169047278659, 0.0 ], [ -114.35242113907761, 44.253918498146653, 0.0 ], [ -114.35481601139141, 44.254318948367732, 0.0 ], [ -114.3999607519609, 44.25923342985714, 0.0 ], [ -114.40128053621859, 44.259093332889996, 0.0 ], [ -114.43807037332481, 44.259089402715553, 0.0 ], [ -114.4656566114631, 44.246805328279571, 0.0 ], [ -114.49244174055811, 44.256841623682412, 0.0 ], [ -114.5337011054216, 44.251465318231297, 0.0 ], [ -114.5832070014399, 44.253895136701637, 0.0 ], [ -114.5872334632153, 44.253784504882219, 0.0 ], [ -114.5959896134905, 44.254775680279302, 0.0 ], [ -114.64388405660939, 44.253480902919136, 0.0 ], [ -114.6735437542918, 44.251555915815842, 0.0 ], [ -114.7238555527852, 44.264662133006667, 0.0 ], [ -114.8102094517386, 44.26448345203368, 0.0 ], [ -114.8756349608916, 44.254234417328867, 0.0 ], [ -114.9239919926099, 44.230288718764221, 0.0 ], [ -114.9365603725673, 44.198389669100621, 0.0 ], [ -114.8922828872829, 44.162608768771122, 0.0 ], [ -114.8637433034454, 44.085021344209231, 0.0 ], [ -114.8630874784525, 44.081932121877912, 0.0 ], [ -114.8628690010983, 44.080902828940623, 0.0 ], [ -114.8350932441269, 44.013329301776437, 0.0 ], [ -114.8446336479129, 43.974172740073833, 0.0 ], [ -114.8128348389242, 43.943526146606622, 0.0 ], [ -114.78238216118061, 43.887502429194782, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Yakima River"}, "geometry": { "type": "LineString", "coordinates": [ [ -119.23038338929619, 46.251209293421063, 0.0 ], [ -119.2532295106314, 46.252095631963407, 0.0 ], [ -119.2707442509289, 46.245428074701017, 0.0 ], [ -119.3108929983408, 46.262894680174561, 0.0 ], [ -119.32895214101789, 46.287834659303137, 0.0 ], [ -119.3525426509363, 46.313551495406969, 0.0 ], [ -119.3568685220155, 46.315831658967817, 0.0 ], [ -119.3915227729259, 46.335517613068447, 0.0 ], [ -119.398903559895, 46.360339205398724, 0.0 ], [ -119.4064041621085, 46.3724050986999, 0.0 ], [ -119.43030833733999, 46.378529753824722, 0.0 ], [ -119.4533834147886, 46.356819706972018, 0.0 ], [ -119.45340406589359, 46.354563706198448, 0.0 ], [ -119.49171345094069, 46.329912259721439, 0.0 ], [ -119.47883605589671, 46.308811886029083, 0.0 ], [ -119.4788745310322, 46.304302736105683, 0.0 ], [ -119.47261669812229, 46.273469111404182, 0.0 ], [ -119.4726232049557, 46.272717755865393, 0.0 ], [ -119.4716928637278, 46.254682614269122, 0.0 ], [ -119.51609935087789, 46.272138454487397, 0.0 ], [ -119.54647473133021, 46.275218895936867, 0.0 ], [ -119.6071178314955, 46.259528968002783, 0.0 ], [ -119.6092787092592, 46.258781999323347, 0.0 ], [ -119.6398188659045, 46.245415801518249, 0.0 ], [ -119.64201221444419, 46.244676752013973, 0.0 ], [ -119.65079615815399, 46.24021738384819, 0.0 ], [ -119.6551885439618, 46.238736263894893, 0.0 ], [ -119.6911789177985, 46.224574191533883, 0.0 ], [ -119.69441413646609, 46.223077927525821, 0.0 ], [ -119.7009080606196, 46.222340049952017, 0.0 ], [ -119.79188105362751, 46.198486025256543, 0.0 ], [ -119.7984144019334, 46.19549326841431, 0.0 ], [ -119.8027697603636, 46.194747822177753, 0.0 ], [ -119.86269839833329, 46.189539205377642, 0.0 ], [ -119.8626999343665, 46.191791376121429, 0.0 ], [ -119.8963784064014, 46.212834113671498, 0.0 ], [ -119.9849114102596, 46.232390910455457, 0.0 ], [ -120.0202661675339, 46.236913292788003, 0.0 ], [ -120.06480492052479, 46.244019246022887, 0.0 ], [ -120.0828568498992, 46.249064672052363, 0.0 ], [ -120.09814557681401, 46.263273891243749, 0.0 ], [ -120.09715304738739, 46.264192946412102, 0.0 ], [ -120.09021747701171, 46.276138605200217, 0.0 ], [ -120.09021867009869, 46.276597407996633, 0.0 ], [ -120.1081912731358, 46.294239364557001, 0.0 ], [ -120.12979886568471, 46.304970314598442, 0.0 ], [ -120.1593960776145, 46.319587948214163, 0.0 ], [ -120.1878086884042, 46.329926241306737, 0.0 ], [ -120.188478128806, 46.330842197276787, 0.0 ], [ -120.2148479206608, 46.353024549944081, 0.0 ], [ -120.21485152508291, 46.353712315729858, 0.0 ], [ -120.21519469172139, 46.355774794751639, 0.0 ], [ -120.2155330813185, 46.356920230471573, 0.0 ], [ -120.2292910440386, 46.378426540715232, 0.0 ], [ -120.23061932972659, 46.379112682092163, 0.0 ], [ -120.2832684044629, 46.402792681450848, 0.0 ], [ -120.2842669349245, 46.403018508106932, 0.0 ], [ -120.2859301927122, 46.403242108750163, 0.0 ], [ -120.2882610390951, 46.403921706252611, 0.0 ], [ -120.2912550522346, 46.404370047189794, 0.0 ], [ -120.3232115379672, 46.412505494003952, 0.0 ], [ -120.325213145443, 46.413644019991033, 0.0 ], [ -120.349258740742, 46.430279125880851, 0.0 ], [ -120.3830116303055, 46.463354652114653, 0.0 ], [ -120.4184583909518, 46.484267546335573, 0.0 ], [ -120.4585694964653, 46.507418711370377, 0.0 ], [ -120.4589107129308, 46.508331711138801, 0.0 ], [ -120.4730275867748, 46.522604532330547, 0.0 ], [ -120.4730445362035, 46.523724133170091, 0.0 ], [ -120.46263307676161, 46.549928932760999, 0.0 ], [ -120.46198993515441, 46.571654281428494, 0.0 ], [ -120.46199541263, 46.572111795593209, 0.0 ], [ -120.46789177379129, 46.591981631446949, 0.0 ], [ -120.4692402707506, 46.59334723282015, 0.0 ], [ -120.4872073607403, 46.614964705933673, 0.0 ], [ -120.51091693322699, 46.62832983741793, 0.0 ], [ -120.5247293296303, 46.639428656233342, 0.0 ], [ -120.5019709873482, 46.663885927294501, 0.0 ], [ -120.4866313565349, 46.702098981239892, 0.0 ], [ -120.480583259257, 46.702522049812387, 0.0 ], [ -120.4479022083644, 46.732189486307348, 0.0 ], [ -120.4551462231279, 46.763896823851091, 0.0 ], [ -120.456752033906, 46.817290418470172, 0.0 ], [ -120.478716533289, 46.861149604771221, 0.0 ], [ -120.5103526011133, 46.913087154769912, 0.0 ], [ -120.5310881688022, 46.940503885605381, 0.0 ], [ -120.63560287800421, 47.043206183761157, 0.0 ], [ -120.68204553636291, 47.081313581241183, 0.0 ], [ -120.70046995275681, 47.093763815281207, 0.0 ], [ -120.7196970713034, 47.108238362368681, 0.0 ], [ -120.7418617537173, 47.122502428716203, 0.0 ], [ -120.7599498627128, 47.126464893675951, 0.0 ], [ -120.7804381580093, 47.128687902047787, 0.0 ], [ -120.7806366979833, 47.128947316678193, 0.0 ], [ -120.7920316108236, 47.133753127473831, 0.0 ], [ -120.79223513938641, 47.134145576585468, 0.0 ], [ -120.7926364194072, 47.134669058814033, 0.0 ], [ -120.793039253641, 47.135327176814179, 0.0 ], [ -120.8020845986815, 47.142335317146113, 0.0 ], [ -120.8024785247685, 47.142864785521823, 0.0 ], [ -120.80307826846121, 47.143520439630542, 0.0 ], [ -120.81041910945881, 47.150488265029921, 0.0 ], [ -120.8104234339432, 47.15062064523854, 0.0 ], [ -120.81177107727871, 47.160959287230533, 0.0 ], [ -120.8407377128178, 47.170026792811477, 0.0 ], [ -120.8552182886654, 47.170156194894979, 0.0 ], [ -120.8714146559731, 47.174322522732943, 0.0 ], [ -120.8840786843331, 47.180697714446907, 0.0 ], [ -120.9101159255806, 47.182713253226026, 0.0 ], [ -120.94615803399179, 47.191136095115283, 0.0 ], [ -120.9615628018478, 47.189631801512007, 0.0 ], [ -120.9817923574242, 47.182897511420663, 0.0 ], [ -120.9849947358253, 47.176320772768953, 0.0 ], [ -121.0023051685322, 47.179570771906917, 0.0 ], [ -121.0064978051864, 47.188820565146607, 0.0 ], [ -121.0210368999863, 47.194867832581551, 0.0 ], [ -121.0210433902444, 47.195164809167323, 0.0 ], [ -121.0258851436466, 47.202421920934199, 0.0 ], [ -121.0252807736519, 47.207706778080542, 0.0 ], [ -121.02281880663131, 47.213987760995998, 0.0 ], [ -121.02573467408649, 47.218705298295831, 0.0 ], [ -121.0259982067608, 47.21882206186843, 0.0 ], [ -121.0380377611349, 47.223515781327912, 0.0 ], [ -121.05025816944929, 47.226248713914778, 0.0 ], [ -121.0594246968562, 47.23205192971934, 0.0 ], [ -121.05728791581539, 47.238218861464198, 0.0 ], [ -121.0654464042188, 47.241326234013258, 0.0 ], [ -121.0740074557804, 47.245558540582181, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Wenatchee River"}, "geometry": { "type": "LineString", "coordinates": [ [ -120.31897600572221, 47.453336700150722, 0.0 ], [ -120.3478593684107, 47.46503214403922, 0.0 ], [ -120.370485515384, 47.466501564128869, 0.0 ], [ -120.371467434271, 47.467383956592613, 0.0 ], [ -120.3897976592029, 47.478854765080669, 0.0 ], [ -120.40915758553589, 47.481673592376197, 0.0 ], [ -120.4246594264015, 47.490717375185767, 0.0 ], [ -120.425402597589, 47.50070405828113, 0.0 ], [ -120.43922184646649, 47.502865813271463, 0.0 ], [ -120.4398806354602, 47.503085838989719, 0.0 ], [ -120.4511450800762, 47.512262872121987, 0.0 ], [ -120.4514732139647, 47.512258636916137, 0.0 ], [ -120.4584370331967, 47.520240226672946, 0.0 ], [ -120.4680022504995, 47.524655619868867, 0.0 ], [ -120.47882862367921, 47.522421598798772, 0.0 ], [ -120.491993879679, 47.526329852977931, 0.0 ], [ -120.5094252473514, 47.533940353557867, 0.0 ], [ -120.5228694931445, 47.532113955555133, 0.0 ], [ -120.5342927603416, 47.530468778993303, 0.0 ], [ -120.5485100340661, 47.534876494332032, 0.0 ], [ -120.5567281327745, 47.54121530218233, 0.0 ], [ -120.5681077054433, 47.545913038707262, 0.0 ], [ -120.5732837801243, 47.552220509093956, 0.0 ], [ -120.5753540969416, 47.560902543978102, 0.0 ], [ -120.5889068117006, 47.569325550771318, 0.0 ], [ -120.5949423363589, 47.568271867127159, 0.0 ], [ -120.60162552451339, 47.565291223962667, 0.0 ], [ -120.6019629157912, 47.565403142877301, 0.0 ], [ -120.6131732893879, 47.575533931578391, 0.0 ], [ -120.6125728778615, 47.581098074897852, 0.0 ], [ -120.6188304929251, 47.584459032069049, 0.0 ], [ -120.6319921848376, 47.594698744819361, 0.0 ], [ -120.6372804695572, 47.59856883638782, 0.0 ], [ -120.64436939330579, 47.601137338571149, 0.0 ], [ -120.6563579792909, 47.595834323436762, 0.0 ], [ -120.6621951934863, 47.591402902847619, 0.0 ], [ -120.667782084329, 47.585237483883773, 0.0 ], [ -120.66810944280751, 47.584781973114097, 0.0 ], [ -120.6684483486096, 47.581679938655242, 0.0 ], [ -120.66663486693039, 47.577905759969397, 0.0 ], [ -120.66906825638711, 47.57507296634499, 0.0 ], [ -120.6692327947968, 47.575071997406731, 0.0 ], [ -120.6756855539977, 47.575034547552193, 0.0 ], [ -120.6756903919275, 47.575293383267642, 0.0 ], [ -120.6741201781842, 47.580189107622488, 0.0 ], [ -120.6740201832765, 47.580450996545487, 0.0 ], [ -120.6740256581309, 47.580895203358061, 0.0 ], [ -120.6755547831454, 47.583345907358712, 0.0 ], [ -120.678604204086, 47.585620616445397, 0.0 ], [ -120.6788181139209, 47.585763088008967, 0.0 ], [ -120.6838961453945, 47.587777762797089, 0.0 ], [ -120.6901186636461, 47.585221280342488, 0.0 ], [ -120.6972802808493, 47.583662440335779, 0.0 ], [ -120.7043722864579, 47.584750568850517, 0.0 ], [ -120.7045362069984, 47.584822783547892, 0.0 ], [ -120.70979558633709, 47.58883778315429, 0.0 ], [ -120.7098529735859, 47.589056754284648, 0.0 ], [ -120.7136739078225, 47.596125074323879, 0.0 ], [ -120.720385791246, 47.613984915379902, 0.0 ], [ -120.7245243303, 47.61881140779154, 0.0 ], [ -120.7261587452148, 47.625061263157178, 0.0 ], [ -120.7281997638899, 47.631362227407379, 0.0 ], [ -120.7278127126913, 47.631453890442323, 0.0 ], [ -120.72117212020009, 47.639004380520291, 0.0 ], [ -120.7208369276207, 47.639618877986919, 0.0 ], [ -120.7233442677074, 47.645585279655393, 0.0 ], [ -120.72470312363259, 47.651124737280817, 0.0 ], [ -120.7301159485306, 47.655138560407423, 0.0 ], [ -120.73102786399809, 47.661539863757632, 0.0 ], [ -120.7363756916815, 47.668345023441603, 0.0 ], [ -120.73524601898551, 47.674832200196107, 0.0 ], [ -120.72892077028619, 47.677771647822929, 0.0 ], [ -120.7209223966332, 47.687895623395043, 0.0 ], [ -120.7129232369477, 47.685788351301802, 0.0 ], [ -120.7109623818654, 47.692599193863778, 0.0 ], [ -120.7141710448272, 47.701072041055752, 0.0 ], [ -120.70835268960811, 47.706306501832223, 0.0 ], [ -120.6905363352022, 47.707337103035258, 0.0 ], [ -120.6714848263215, 47.709442311262663, 0.0 ], [ -120.6604437453571, 47.711293162756363, 0.0 ], [ -120.6561050397117, 47.715078020330722, 0.0 ], [ -120.66319244826251, 47.718096863878444, 0.0 ], [ -120.65829302341641, 47.724279718806969, 0.0 ], [ -120.65173462844621, 47.726963535070617, 0.0 ], [ -120.6539050228598, 47.731039069302327, 0.0 ], [ -120.6664162590437, 47.733545367428647, 0.0 ], [ -120.6685194240754, 47.736514089407322, 0.0 ], [ -120.6631967105406, 47.742655152176347, 0.0 ], [ -120.662927862909, 47.742730224701482, 0.0 ], [ -120.66264563992721, 47.74867002132045, 0.0 ], [ -120.66670793795841, 47.752971893444247, 0.0 ], [ -120.6653643317958, 47.758028326794083, 0.0 ], [ -120.666648594629, 47.762594574748853, 0.0 ], [ -120.66228075276631, 47.767417591497612, 0.0 ], [ -120.66195740114679, 47.767492659129573, 0.0 ], [ -120.6538374925227, 47.774074845829553, 0.0 ], [ -120.6598563577797, 47.775846924012832, 0.0 ], [ -120.6648428633022, 47.781997794532593, 0.0 ], [ -120.6615184360693, 47.786933899611022, 0.0 ], [ -120.6586912515517, 47.793778298240632, 0.0 ], [ -120.6505129886001, 47.794234360039901, 0.0 ], [ -120.65076196682961, 47.798703861926761, 0.0 ], [ -120.66357638147529, 47.79649921355778, 0.0 ], [ -120.6747617911182, 47.801352741725573, 0.0 ], [ -120.678234707421, 47.810706157118162, 0.0 ], [ -120.6965527176646, 47.816593434076736, 0.0 ], [ -120.7259860883041, 47.808420133263581, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Clearwater River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -117.0366126363833, 46.426802718950562, 0.0 ], [ -117.02168387597651, 46.425714697684022, 0.0 ], [ -117.0139231181731, 46.421820722476227, 0.0 ], [ -117.0132574930075, 46.42168746154519, 0.0 ], [ -117.0009622582749, 46.418932842802597, 0.0 ], [ -116.98616730415191, 46.425028695539382, 0.0 ], [ -116.97297572270929, 46.432679439075692, 0.0 ], [ -116.9488497937365, 46.431230433459092, 0.0 ], [ -116.9293960496535, 46.424798349950791, 0.0 ], [ -116.90879920207099, 46.433037904296057, 0.0 ], [ -116.8685821271512, 46.44727622433993, 0.0 ], [ -116.809377982958, 46.451554571814242, 0.0 ], [ -116.78916206717101, 46.453204947226887, 0.0 ], [ -116.76749807971289, 46.473520159791839, 0.0 ], [ -116.7447694052303, 46.489100792968067, 0.0 ], [ -116.7061814352161, 46.502308613185647, 0.0 ], [ -116.7042177779167, 46.503555161212908, 0.0 ], [ -116.66550160425351, 46.51872774734597, 0.0 ], [ -116.6039567320224, 46.520166181872902, 0.0 ], [ -116.5499014358265, 46.508118468158173, 0.0 ], [ -116.4880022941302, 46.500410658791267, 0.0 ], [ -116.4842251521457, 46.500298422099597, 0.0 ], [ -116.4427322433622, 46.499015356197482, 0.0 ], [ -116.44087103506421, 46.498942674360002, 0.0 ], [ -116.3624123441775, 46.500989482086261, 0.0 ], [ -116.3303643618674, 46.501236293898756, 0.0 ], [ -116.29900675444691, 46.498417403192512, 0.0 ], [ -116.26942997635101, 46.490902256541879, 0.0 ], [ -116.24734122668229, 46.469994159829447, 0.0 ], [ -116.2167726628718, 46.451388291698457, 0.0 ], [ -116.2054290246254, 46.424365491234127, 0.0 ], [ -116.2029833604047, 46.421020533160359, 0.0 ], [ -116.1716832993657, 46.379040578512232, 0.0 ], [ -116.1709247919222, 46.37641420949663, 0.0 ], [ -116.1460401661213, 46.333253642461507, 0.0 ], [ -116.1451392197976, 46.332571622313367, 0.0 ], [ -116.1457960732842, 46.329384132968272, 0.0 ], [ -116.129319666558, 46.30865591913004, 0.0 ], [ -116.12563265840021, 46.297585536925759, 0.0 ], [ -116.0954116422116, 46.275830958998739, 0.0 ], [ -116.0883480222071, 46.265307596233953, 0.0 ], [ -116.0695462143358, 46.258321675739211, 0.0 ], [ -116.0425843340338, 46.248787946214257, 0.0 ], [ -116.0282653804374, 46.23749678827253, 0.0 ], [ -116.009838391767, 46.219153168213033, 0.0 ], [ -116.020411036792, 46.197120816487782, 0.0 ], [ -116.00605747279199, 46.185142360885507, 0.0 ], [ -115.9960699061629, 46.165324837725187, 0.0 ], [ -115.99505879767931, 46.164570419991172, 0.0 ], [ -115.9882731153331, 46.146322859928098, 0.0 ], [ -115.98091004769191, 46.121387428601963, 0.0 ], [ -115.9782380506698, 46.095497351261912, 0.0 ], [ -115.9744321962216, 46.073400189230121, 0.0 ], [ -115.9727659546422, 46.039447115251832, 0.0 ], [ -115.9672027401711, 46.007165647148398, 0.0 ], [ -115.9622917686914, 45.96454473713149, 0.0 ], [ -115.9790958481792, 45.948756656283472, 0.0 ], [ -115.9796330888137, 45.948417292602599, 0.0 ], [ -116.00473971063229, 45.919774708900817, 0.0 ], [ -116.01991611128329, 45.904662988160432, 0.0 ], [ -116.0290927994083, 45.890947310678513, 0.0 ], [ -116.0236214802987, 45.881643766518039, 0.0 ], [ -116.01733337816459, 45.86047465947626, 0.0 ], [ -115.9950849525095, 45.84038769263752, 0.0 ], [ -115.9649036660421, 45.827668381122074, 0.0 ], [ -115.9624080219473, 45.827586100081398, 0.0 ], [ -115.9197471498904, 45.828248425761089, 0.0 ], [ -115.91764256826551, 45.82816998023327, 0.0 ], [ -115.9150132192901, 45.828071941616813, 0.0 ], [ -115.8377712137092, 45.821238895011113, 0.0 ], [ -115.8103867078017, 45.813002056546367, 0.0 ], [ -115.8088875408951, 45.812222793296883, 0.0 ], [ -115.78284317781601, 45.800795513686069, 0.0 ], [ -115.7808505499253, 45.800006683106403, 0.0 ], [ -115.7747233938111, 45.797946154108757, 0.0 ], [ -115.745003350543, 45.79579045660801, 0.0 ], [ -115.7433467908549, 45.796437884456552, 0.0 ], [ -115.7215119699721, 45.797416513945599, 0.0 ], [ -115.7193728434909, 45.79841939592351, 0.0 ], [ -115.718855343445, 45.798399693982162, 0.0 ], [ -115.701047747175, 45.803868630749932, 0.0 ], [ -115.6752162529295, 45.809003165599258, 0.0 ], [ -115.673792321101, 45.808947190146341, 0.0 ], [ -115.6723708386475, 45.808891307692363, 0.0 ], [ -115.6550238359801, 45.810040673390382, 0.0 ], [ -115.6538307160494, 45.810718685692052, 0.0 ], [ -115.63883309387469, 45.816277637355249, 0.0 ], [ -115.6146026627747, 45.828621203620912, 0.0 ], [ -115.58625711181389, 45.827012205660381, 0.0 ], [ -115.5857324504036, 45.827638454755238, 0.0 ], [ -115.5551165009679, 45.8287166005194, 0.0 ], [ -115.52927628275511, 45.826407882120193, 0.0 ], [ -115.52795907836359, 45.826360856856162, 0.0 ], [ -115.50101418725269, 45.825291810595587, 0.0 ], [ -115.4992076106081, 45.824246579178627, 0.0 ], [ -115.47849229614761, 45.810166482095639, 0.0 ], [ -115.4711016465089, 45.798868756608627, 0.0 ], [ -115.4537291817103, 45.795295152604112, 0.0 ], [ -115.4434174156481, 45.796812674755962, 0.0 ], [ -115.4424824744986, 45.796789808160412, 0.0 ], [ -115.4401173784962, 45.797346800635133, 0.0 ], [ -115.4116560679481, 45.799733069094053, 0.0 ], [ -115.40986015563109, 45.799012954134831, 0.0 ], [ -115.3886167867683, 45.788200361489132, 0.0 ], [ -115.3877647158854, 45.787191223226863, 0.0 ], [ -115.38621309297299, 45.771923560141552, 0.0 ], [ -115.3863760306442, 45.769994988412407, 0.0 ], [ -115.3864031813782, 45.769673584286892, 0.0 ], [ -115.3922413933486, 45.743712916095213, 0.0 ], [ -115.3922946810945, 45.743068231131282, 0.0 ], [ -115.3732517514995, 45.722343420349787, 0.0 ], [ -115.35040987922589, 45.71295829941851, 0.0 ], [ -115.3481102542987, 45.712870538921869, 0.0 ], [ -115.3462466371668, 45.713125818995849, 0.0 ], [ -115.3278135372, 45.719601386238359, 0.0 ], [ -115.3263773259625, 45.720533189632228, 0.0 ], [ -115.32629368973789, 45.721148283856238, 0.0 ], [ -115.30941038253221, 45.734959941136509, 0.0 ], [ -115.3074718964218, 45.736177600864501, 0.0 ], [ -115.3049986037025, 45.738005748538541, 0.0 ], [ -115.28598941773799, 45.749331633275609, 0.0 ], [ -115.2838679392475, 45.750123880097462, 0.0 ], [ -115.26794341635051, 45.754333249302157, 0.0 ], [ -115.2651085907919, 45.754850974673069, 0.0 ], [ -115.2627524569244, 45.755725957402312, 0.0 ], [ -115.24136521147361, 45.760569376447343, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "MF Clearwater River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -115.9836432498997, 46.145689249522121, 0.0 ], [ -115.96815590565031, 46.147476709586613, 0.0 ], [ -115.9666597198247, 46.136754595439889, 0.0 ], [ -115.95618287537729, 46.134638261426353, 0.0 ], [ -115.9553380868537, 46.134606526712112, 0.0 ], [ -115.94144987804, 46.141083256131601, 0.0 ], [ -115.9408224866648, 46.142029704232918, 0.0 ], [ -115.93276199391541, 46.14786893675852, 0.0 ], [ -115.93079969144721, 46.148196711756079, 0.0 ], [ -115.9294136119214, 46.148359933590832, 0.0 ], [ -115.9084797610612, 46.15229531669992, 0.0 ], [ -115.9076433337344, 46.152261030895957, 0.0 ], [ -115.8929373957516, 46.143411552908127, 0.0 ], [ -115.89239308167311, 46.143200674813357, 0.0 ], [ -115.8458305674109, 46.141900221029879, 0.0 ], [ -115.83416602384089, 46.147877157400217, 0.0 ], [ -115.7904133756998, 46.133431566348577, 0.0 ], [ -115.7804504867656, 46.120334072422452, 0.0 ], [ -115.7790677685278, 46.120282748696567, 0.0 ], [ -115.7501132554427, 46.134874727621508, 0.0 ], [ -115.7253559698617, 46.150392986321208, 0.0 ], [ -115.69376734816031, 46.140819684893003, 0.0 ], [ -115.6918489903062, 46.140718800465372, 0.0 ], [ -115.6534570767666, 46.137291135130802, 0.0 ], [ -115.6516378200028, 46.137157335521877, 0.0 ], [ -115.614156011418, 46.134720493398689, 0.0 ], [ -115.59637770419501, 46.140137892126781, 0.0 ], [ -115.5813967646606, 46.1230943443855, 0.0 ], [ -115.54132406680181, 46.095863913701173, 0.0 ], [ -115.4768094053571, 46.087546932653702, 0.0 ], [ -115.4733258861841, 46.087408109961153, 0.0 ], [ -115.4698439132511, 46.087269266488043, 0.0 ], [ -115.4168417493039, 46.079841254849278, 0.0 ], [ -115.4147905691993, 46.079274088932308, 0.0 ], [ -115.33777400931071, 46.05923789016137, 0.0 ], [ -115.2917704551968, 46.046284936358532, 0.0 ], [ -115.2386623278674, 46.046553129900673, 0.0 ], [ -115.2371679058771, 46.04647403821572, 0.0 ], [ -115.23415406390239, 46.046799960225599, 0.0 ], [ -115.231192521869, 46.047625307379228, 0.0 ], [ -115.2274994830838, 46.048416426229132, 0.0 ], [ -115.2225820897371, 46.049177991668543, 0.0 ], [ -115.20886227995391, 46.056334484412673, 0.0 ], [ -115.1501749289601, 46.081358461916579, 0.0 ], [ -115.1480687580235, 46.081751022619557, 0.0 ], [ -115.0801918713739, 46.096203181448317, 0.0 ], [ -115.07877243083129, 46.096144593262942, 0.0 ], [ -115.07428909687469, 46.097414497858459, 0.0 ], [ -115.067862471902, 46.098110510477838, 0.0 ], [ -114.96587635621501, 46.118821519201987, 0.0 ], [ -114.92373625320781, 46.126021947407061, 0.0 ], [ -114.9041463031096, 46.160781880318737, 0.0 ], [ -114.8905609709504, 46.173568689343703, 0.0 ], [ -114.87213667638569, 46.192518468325062, 0.0 ], [ -114.83293779747081, 46.20445162205278, 0.0 ], [ -114.78265913120551, 46.203254800920362, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Selway River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -115.59779221634641, 46.141367205781002, 0.0 ], [ -115.59089953524381, 46.164664874284931, 0.0 ], [ -115.5782772525874, 46.170204431443302, 0.0 ], [ -115.57594107409381, 46.171995505446333, 0.0 ], [ -115.57507016056969, 46.172908726367261, 0.0 ], [ -115.5678019437639, 46.186767688779881, 0.0 ], [ -115.5504295418686, 46.199469049526861, 0.0 ], [ -115.5482297656072, 46.201680757694298, 0.0 ], [ -115.5272865762844, 46.219657657304623, 0.0 ], [ -115.5251903500469, 46.2204958083951, 0.0 ], [ -115.5049660032207, 46.227969594401152, 0.0 ], [ -115.4674970632467, 46.231074328203732, 0.0 ], [ -115.4668227024797, 46.231046948269757, 0.0 ], [ -115.42591323744109, 46.230343997916613, 0.0 ], [ -115.4232987268982, 46.230241691998337, 0.0 ], [ -115.40137845683481, 46.23575233842147, 0.0 ], [ -115.38797529713089, 46.274925902080113, 0.0 ], [ -115.3759984615298, 46.29486106677895, 0.0 ], [ -115.3738646196488, 46.296618079765963, 0.0 ], [ -115.3710053600422, 46.299284827236562, 0.0 ], [ -115.36885781020121, 46.301024818169388, 0.0 ], [ -115.3464582640442, 46.320360628306901, 0.0 ], [ -115.34433785833311, 46.321555486531103, 0.0 ], [ -115.31758553538209, 46.341030868069012, 0.0 ], [ -115.2704412531905, 46.364868866322603, 0.0 ], [ -115.22241625161161, 46.390057963777913, 0.0 ], [ -115.21853571533219, 46.390122764573, 0.0 ], [ -115.1843749485452, 46.408055761976783, 0.0 ], [ -115.1354614165441, 46.428988608272768, 0.0 ], [ -115.0894941244118, 46.442977152512768, 0.0 ], [ -115.0874786491617, 46.44381233105684, 0.0 ], [ -115.0861202909463, 46.444679129979299, 0.0 ], [ -115.04638231040499, 46.458848267460752, 0.0 ], [ -115.0429667688071, 46.45953722786664, 0.0 ], [ -115.0402842954127, 46.45986220327277, 0.0 ], [ -114.9747155283975, 46.467623731820296, 0.0 ], [ -114.9333618456935, 46.472045931024688, 0.0 ], [ -114.9299810275934, 46.472810882211093, 0.0 ], [ -114.9252677495837, 46.473530903917897, 0.0 ], [ -114.89899980496079, 46.479994603160911, 0.0 ], [ -114.8963271412952, 46.480329434503879, 0.0 ], [ -114.84357109541691, 46.495989739404187, 0.0 ], [ -114.8415046809079, 46.496809932888993, 0.0 ], [ -114.81230226019539, 46.505888065454279, 0.0 ], [ -114.7553639035621, 46.511665508647269, 0.0 ], [ -114.69460931203589, 46.51055244277417, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Little Salmon River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -116.3172645457184, 45.415812396846519, 0.0 ], [ -116.3307828213012, 45.408106349034277, 0.0 ], [ -116.331191331036, 45.407496272265263, 0.0 ], [ -116.3362614497744, 45.402825968267663, 0.0 ], [ -116.3350395562218, 45.395682803636383, 0.0 ], [ -116.3462738982394, 45.389460027032989, 0.0 ], [ -116.35556847091389, 45.374057840825657, 0.0 ], [ -116.3612151581943, 45.360603520052422, 0.0 ], [ -116.3573111182439, 45.351274761281147, 0.0 ], [ -116.3498860733153, 45.341088725460821, 0.0 ], [ -116.34864194556781, 45.327097966927703, 0.0 ], [ -116.3629595067771, 45.306517720894739, 0.0 ], [ -116.35227720465259, 45.283838898503717, 0.0 ], [ -116.3326894139564, 45.241246820844623, 0.0 ], [ -116.3167763922273, 45.214738179531942, 0.0 ], [ -116.3030771316553, 45.187081487832018, 0.0 ], [ -116.3032291119129, 45.185482883748563, 0.0 ], [ -116.293526701373, 45.151942133140579, 0.0 ], [ -116.28627378354869, 45.130619688673121, 0.0 ], [ -116.3030646801477, 45.118540511242159, 0.0 ], [ -116.30767399170411, 45.092814899154298, 0.0 ], [ -116.3009384303362, 45.077821893586801, 0.0 ], [ -116.289506912147, 45.062822828035713, 0.0 ], [ -116.2830408875674, 45.005926623986497, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "SF Salmon River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -115.5151995202836, 45.381371943144089, 0.0 ], [ -115.5129682246118, 45.370295095128462, 0.0 ], [ -115.516929352912, 45.364413552510207, 0.0 ], [ -115.51705448413129, 45.354424936893082, 0.0 ], [ -115.51264076703799, 45.344545736604097, 0.0 ], [ -115.50480152093191, 45.338230097794352, 0.0 ], [ -115.5005939913805, 45.32626081655502, 0.0 ], [ -115.4959055761078, 45.315578097783487, 0.0 ], [ -115.4901676740535, 45.303352278183418, 0.0 ], [ -115.4774857338023, 45.290894182506491, 0.0 ], [ -115.4764309400322, 45.279164528508822, 0.0 ], [ -115.4780994916826, 45.26754703999633, 0.0 ], [ -115.4869118206211, 45.257455719109487, 0.0 ], [ -115.48827068982651, 45.25720728231358, 0.0 ], [ -115.4975644573931, 45.25368108103077, 0.0 ], [ -115.4993177457837, 45.253230277683087, 0.0 ], [ -115.5190813592631, 45.248933429418777, 0.0 ], [ -115.5201576854849, 45.248476901603972, 0.0 ], [ -115.5309262603682, 45.239644675287899, 0.0 ], [ -115.530948151521, 45.239392240601617, 0.0 ], [ -115.5387590970056, 45.228154448394271, 0.0 ], [ -115.55073904143271, 45.212191136711652, 0.0 ], [ -115.56132755430311, 45.195187294679592, 0.0 ], [ -115.5724273827845, 45.181752869929888, 0.0 ], [ -115.5774498271915, 45.161305203391173, 0.0 ], [ -115.5908538475252, 45.134500404460098, 0.0 ], [ -115.6070319066657, 45.111717064935469, 0.0 ], [ -115.6263389098806, 45.091921778285837, 0.0 ], [ -115.6380302128989, 45.076395111478902, 0.0 ], [ -115.6335878740627, 45.065116403360129, 0.0 ], [ -115.6314029349958, 45.057536152894002, 0.0 ], [ -115.63147291605389, 45.056332573949767, 0.0 ], [ -115.6372896376342, 45.048816792836632, 0.0 ], [ -115.6563147568008, 45.045707760178281, 0.0 ], [ -115.6720463706, 45.045031121066842, 0.0 ], [ -115.68615489907209, 45.041429034748077, 0.0 ], [ -115.6922850597057, 45.031072817587123, 0.0 ], [ -115.7071303465945, 45.025284628968173, 0.0 ], [ -115.71404996380789, 45.01714681814925, 0.0 ], [ -115.71340883488141, 45.013175304272451, 0.0 ], [ -115.712894679039, 45.008681854253801, 0.0 ], [ -115.71005655925021, 45.005929974422649, 0.0 ], [ -115.70489572642499, 45.00478365070709, 0.0 ], [ -115.70432601213589, 45.004761827286231, 0.0 ], [ -115.69578480410451, 45.005307562360947, 0.0 ], [ -115.6936012387024, 44.999764636585283, 0.0 ], [ -115.6772210244694, 44.9943132859431, 0.0 ], [ -115.6711009907015, 44.991621960413788, 0.0 ], [ -115.67365529807429, 44.983952555587287, 0.0 ], [ -115.6724671878802, 44.976314456532123, 0.0 ], [ -115.66596810903459, 44.965445402848502, 0.0 ], [ -115.6524489055745, 44.959867819439019, 0.0 ], [ -115.6339616625577, 44.957920411084402, 0.0 ], [ -115.6137317383014, 44.947231851582117, 0.0 ], [ -115.61216642756391, 44.947159708322417, 0.0 ], [ -115.576861045174, 44.949332463210389, 0.0 ], [ -115.55237293673331, 44.952911561665999, 0.0 ], [ -115.5365936724087, 44.956858795472897, 0.0 ], [ -115.5176501341965, 44.960483861045653, 0.0 ], [ -115.50230362945911, 44.962615538507833, 0.0 ], [ -115.4970038216488, 44.955104486410931, 0.0 ], [ -115.4963274696641, 44.944575836687342, 0.0 ], [ -115.4963674112125, 44.944101719031842, 0.0 ], [ -115.489291551596, 44.936067884111587, 0.0 ], [ -115.4841617575772, 44.933003994472472, 0.0 ], [ -115.48401447828689, 44.932761273331913, 0.0 ], [ -115.4848941936429, 44.915991399264392, 0.0 ], [ -115.4873689080803, 44.904307812072837, 0.0 ], [ -115.49698277527339, 44.891280013452601, 0.0 ], [ -115.5039451010842, 44.877696992548273, 0.0 ], [ -115.5078531838533, 44.858426230987803, 0.0 ], [ -115.513002957759, 44.834976510918558, 0.0 ], [ -115.5189041037023, 44.810475643660432, 0.0 ], [ -115.5163060308674, 44.797177648124823, 0.0 ], [ -115.5238979310223, 44.787477622841912, 0.0 ], [ -115.5335160735503, 44.78425793259251, 0.0 ], [ -115.5400441873656, 44.771760146223947, 0.0 ], [ -115.5426298415957, 44.764078566472463, 0.0 ], [ -115.54047736660731, 44.758169138635367, 0.0 ], [ -115.5439792403393, 44.753594135048637, 0.0 ], [ -115.5605461330501, 44.74378825001925, 0.0 ], [ -115.5813216714717, 44.741052750114576, 0.0 ], [ -115.5968645716859, 44.736863678997103, 0.0 ], [ -115.6093481023412, 44.727441687844554, 0.0 ], [ -115.62859651719479, 44.717751681489759, 0.0 ], [ -115.64496160562609, 44.711231194496449, 0.0 ], [ -115.66036252076699, 44.696875626809401, 0.0 ], [ -115.66039051066311, 44.696530681403139, 0.0 ], [ -115.66531493552959, 44.682325617276959, 0.0 ], [ -115.6769488835278, 44.667857154316437, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "EFSF Salmon River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -115.5013583044253, 44.962243837974391, 0.0 ], [ -115.4857416338732, 44.961442269838592, 0.0 ], [ -115.4714178826535, 44.961577693383823, 0.0 ], [ -115.4706866301502, 44.961549713783192, 0.0 ], [ -115.44733753817781, 44.96266828113037, 0.0 ], [ -115.4469781167051, 44.962657343695781, 0.0 ], [ -115.4310895420998, 44.957481766171313, 0.0 ], [ -115.43072211031939, 44.957466508416097, 0.0 ], [ -115.4174901547369, 44.954677936738072, 0.0 ], [ -115.41178405002481, 44.959125819073201, 0.0 ], [ -115.40105098433931, 44.959967686644333, 0.0 ], [ -115.3843945372043, 44.957673441794441, 0.0 ], [ -115.3604701041817, 44.95259427548541, 0.0 ], [ -115.3474484325919, 44.946600236394623, 0.0 ], [ -115.3376178481297, 44.935999740496527, 0.0 ], [ -115.33237203569109, 44.925065863886012, 0.0 ], [ -115.3301847764416, 44.915581743723159, 0.0 ], [ -115.32976254125241, 44.904499779447811, 0.0 ], [ -115.33286860123999, 44.898922207446979, 0.0 ], [ -115.3422905253109, 44.893274975044733, 0.0 ], [ -115.3495928513825, 44.889829061796647, 0.0 ], [ -115.36002203847529, 44.889630663735517, 0.0 ], [ -115.36636621526939, 44.886096436274777, 0.0 ], [ -115.3662914229693, 44.878835980578877, 0.0 ], [ -115.36354777663919, 44.871669407492377, 0.0 ], [ -115.36347013561461, 44.871454752054532, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "MF Salmon River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -114.5942818666109, 45.296928046864849, 0.0 ], [ -114.6301474883867, 45.272058010848419, 0.0 ], [ -114.657045450185, 45.247861220009149, 0.0 ], [ -114.6573919487202, 45.247446034482287, 0.0 ], [ -114.6818721448563, 45.225729713862151, 0.0 ], [ -114.6866130495207, 45.207702361948641, 0.0 ], [ -114.69926534374881, 45.189440772816717, 0.0 ], [ -114.72120343501049, 45.177415485913578, 0.0 ], [ -114.7215053416415, 45.163165455948388, 0.0 ], [ -114.7293982205538, 45.147695167326319, 0.0 ], [ -114.7253840224235, 45.125946742530417, 0.0 ], [ -114.7292123815843, 45.098689482343623, 0.0 ], [ -114.7272379746771, 45.077854462046012, 0.0 ], [ -114.7224712185248, 45.056239891744518, 0.0 ], [ -114.7225360719542, 45.055595016184647, 0.0 ], [ -114.72390934670069, 45.037144900471702, 0.0 ], [ -114.7245851669994, 45.007794770880082, 0.0 ], [ -114.7310384609229, 44.987915961698747, 0.0 ], [ -114.73594155298581, 44.953062933249463, 0.0 ], [ -114.72488284788329, 44.930961094588788, 0.0 ], [ -114.73015365862069, 44.909900467962153, 0.0 ], [ -114.7307866864827, 44.909713691725713, 0.0 ], [ -114.72913001125529, 44.88795145723811, 0.0 ], [ -114.7599293341417, 44.873843784793962, 0.0 ], [ -114.7700484108052, 44.865995770006997, 0.0 ], [ -114.7675923842643, 44.849746970927349, 0.0 ], [ -114.7680657164326, 44.849307697384887, 0.0 ], [ -114.7847952813442, 44.839865224087283, 0.0 ], [ -114.7996052341463, 44.82399560819217, 0.0 ], [ -114.81226429375459, 44.807445428966943, 0.0 ], [ -114.83435830579501, 44.801502421101532, 0.0 ], [ -114.8572432800227, 44.782211498108111, 0.0 ], [ -114.8905699307104, 44.768172808664779, 0.0 ], [ -114.9002942565622, 44.758652203612797, 0.0 ], [ -114.9139230192375, 44.755764019558853, 0.0 ], [ -114.91981821733521, 44.742349902491732, 0.0 ], [ -114.9392144684962, 44.730631158244293, 0.0 ], [ -114.951853363777, 44.72124540385326, 0.0 ], [ -114.98168195544019, 44.729383958178289, 0.0 ], [ -114.997374215655, 44.727108362864143, 0.0 ], [ -115.00631924071391, 44.714364077077057, 0.0 ], [ -115.0120663316327, 44.714535751853958, 0.0 ], [ -115.0152488707742, 44.724683538330218, 0.0 ], [ -115.01668338507061, 44.731096450177617, 0.0 ], [ -115.01312836488761, 44.735706337830052, 0.0 ], [ -115.01743125621201, 44.743396209467612, 0.0 ], [ -115.02414256443809, 44.740619686262811, 0.0 ], [ -115.0319600773815, 44.735265259895158, 0.0 ], [ -115.0339231505161, 44.738855080599762, 0.0 ], [ -115.0335106118076, 44.744428214918557, 0.0 ], [ -115.0380272316696, 44.750248498056337, 0.0 ], [ -115.0440392298129, 44.752279547181587, 0.0 ], [ -115.06462215055871, 44.756585065114429, 0.0 ], [ -115.0731783831091, 44.764716251705629, 0.0 ], [ -115.0759712153462, 44.769052978754829, 0.0 ], [ -115.08873142678991, 44.770881419195042, 0.0 ], [ -115.1098881800841, 44.766618385694571, 0.0 ], [ -115.1192446755289, 44.77360042860208, 0.0 ], [ -115.1255150993733, 44.7781807193603, 0.0 ], [ -115.1297523775344, 44.787477841803756, 0.0 ], [ -115.1343765551913, 44.798119268751442, 0.0 ], [ -115.1522733570764, 44.800984018396122, 0.0 ], [ -115.1671242125103, 44.808367230902569, 0.0 ], [ -115.17490075332231, 44.809627980405288, 0.0 ], [ -115.1785729521682, 44.813617711554592, 0.0 ], [ -115.18484261814299, 44.814054194913481, 0.0 ], [ -115.18514568640791, 44.814142016829003, 0.0 ], [ -115.1912533688706, 44.816955534920162, 0.0 ], [ -115.1953873844236, 44.819515891335371, 0.0 ], [ -115.1983934898667, 44.824948855109263, 0.0 ], [ -115.2027993718343, 44.827143154182338, 0.0 ], [ -115.21320764624819, 44.829953464328078, 0.0 ], [ -115.2201824349623, 44.829667646555627, 0.0 ], [ -115.2332965779047, 44.834122279835469, 0.0 ], [ -115.25530867692861, 44.840848230680862, 0.0 ], [ -115.2710244151193, 44.841263914555917, 0.0 ], [ -115.2817678241417, 44.843726621553863, 0.0 ], [ -115.2942971589319, 44.840349047843809, 0.0 ], [ -115.29958638085201, 44.836973118202607, 0.0 ], [ -115.3114684492503, 44.824539728162833, 0.0 ], [ -115.3247657157811, 44.814558076701658, 0.0 ], [ -115.33883471063911, 44.806989782526543, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Grande Ronde River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -116.980110762038, 46.078831365707927, 0.0 ], [ -117.0073194096525, 46.057469555526829, 0.0 ], [ -117.0505957304614, 46.042163521983063, 0.0 ], [ -117.092968947953, 46.040698552122407, 0.0 ], [ -117.1386505104268, 46.033099950938443, 0.0 ], [ -117.1670157739584, 46.02446378081342, 0.0 ], [ -117.200472565528, 46.029569106338812, 0.0 ], [ -117.2023869093521, 46.02962120442956, 0.0 ], [ -117.2524267478581, 46.036197511186472, 0.0 ], [ -117.3039731730023, 46.030436198657497, 0.0 ], [ -117.3342161653503, 46.023570068854568, 0.0 ], [ -117.36482768840619, 46.00497157982123, 0.0 ], [ -117.3970288021966, 45.976412096871137, 0.0 ], [ -117.3985228151829, 45.976440806087268, 0.0 ], [ -117.40159545171061, 45.976214747716462, 0.0 ], [ -117.4379619549992, 45.949746106383223, 0.0 ], [ -117.4523364571951, 45.920103574831352, 0.0 ], [ -117.4776375327418, 45.902929549730423, 0.0 ], [ -117.50611090869801, 45.895869442956077, 0.0 ], [ -117.5581422702915, 45.891358392400058, 0.0 ], [ -117.6075323790437, 45.86572082909656, 0.0 ], [ -117.6262723203572, 45.861817505594452, 0.0 ], [ -117.6684174183965, 45.874947053281353, 0.0 ], [ -117.6920622967818, 45.870189565373472, 0.0 ], [ -117.6935393829479, 45.869227194830827, 0.0 ], [ -117.69552722353581, 45.868276513692877, 0.0 ], [ -117.71948681733591, 45.85517362088293, 0.0 ], [ -117.72096984929, 45.854536667218611, 0.0 ], [ -117.72145078394421, 45.853886686892203, 0.0 ], [ -117.74874455004, 45.835915089973668, 0.0 ], [ -117.7498275035084, 45.834261105668567, 0.0 ], [ -117.74459774585981, 45.800017312831997, 0.0 ], [ -117.7611575229886, 45.764375431604307, 0.0 ], [ -117.7611745248839, 45.764042129138822, 0.0 ], [ -117.77726269507571, 45.744752157475013, 0.0 ], [ -117.7838279690622, 45.727292803649192, 0.0 ], [ -117.8076588307281, 45.719119789608598, 0.0 ], [ -117.83551607700861, 45.718117375296487, 0.0 ], [ -117.8562825277872, 45.695771060394499, 0.0 ], [ -117.8665965264603, 45.679741784590547, 0.0 ], [ -117.8666271685528, 45.67926729759175, 0.0 ], [ -117.8727754766887, 45.652234285007971, 0.0 ], [ -117.8828265994988, 45.631378225686689, 0.0 ], [ -117.90381511320371, 45.586164124176079, 0.0 ], [ -117.9147968866997, 45.563418147138123, 0.0 ], [ -117.929473455918, 45.493530886995863, 0.0 ], [ -117.9504026777683, 45.450513618869529, 0.0 ], [ -117.9275242930116, 45.414656660344832, 0.0 ], [ -117.9292567449517, 45.383752479760723, 0.0 ], [ -117.92541470103249, 45.366810585636422, 0.0 ], [ -117.9415630604516, 45.350252888062002, 0.0 ], [ -117.9938473664228, 45.342989278061253, 0.0 ], [ -117.9948464311136, 45.343007997599962, 0.0 ], [ -117.9966014160415, 45.342865173095063, 0.0 ], [ -118.0550832907648, 45.34237685968386, 0.0 ], [ -118.11490787132659, 45.342432486224517, 0.0 ], [ -118.15271828631229, 45.345391007687368, 0.0 ], [ -118.1930457507621, 45.35406781257953, 0.0 ], [ -118.2199737735357, 45.349247872111803, 0.0 ], [ -118.2307438592825, 45.352578094089729, 0.0 ], [ -118.24153043015031, 45.361844599934429, 0.0 ], [ -118.26629897785121, 45.36760390022053, 0.0 ], [ -118.29066276926871, 45.373104177312342, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Okanogan River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -119.72289294058869, 48.098723026904622, 0.0 ], [ -119.69635430931071, 48.106940932938997, 0.0 ], [ -119.6947766110811, 48.108521218842696, 0.0 ], [ -119.6656001633433, 48.151638512989848, 0.0 ], [ -119.6785619032794, 48.189653151077408, 0.0 ], [ -119.71646888471059, 48.211283690947823, 0.0 ], [ -119.7359156207537, 48.243939061079239, 0.0 ], [ -119.7192847249477, 48.275613558100197, 0.0 ], [ -119.71770188770139, 48.277689854561586, 0.0 ], [ -119.65505254659919, 48.29775549717192, 0.0 ], [ -119.6064053491247, 48.320949177254121, 0.0 ], [ -119.6015169719181, 48.348893518464067, 0.0 ], [ -119.5573680200503, 48.381512788637899, 0.0 ], [ -119.5178018298046, 48.41210626388343, 0.0 ], [ -119.48754477072271, 48.404007158631508, 0.0 ], [ -119.4733716691496, 48.414815233003857, 0.0 ], [ -119.4693441290473, 48.461353386237192, 0.0 ], [ -119.50269595910299, 48.509660249617973, 0.0 ], [ -119.4889153098933, 48.545290568874456, 0.0 ], [ -119.4896475835836, 48.546293378933882, 0.0 ], [ -119.48364617459001, 48.598798888453913, 0.0 ], [ -119.4611053228295, 48.642294094536652, 0.0 ], [ -119.4635754853457, 48.683887660231569, 0.0 ], [ -119.41123132314721, 48.768906264166162, 0.0 ], [ -119.406446115975, 48.845691484680238, 0.0 ], [ -119.42267236056701, 48.89698798332266, 0.0 ], [ -119.4296260020123, 48.952981031076348, 0.0 ], [ -119.45145723356239, 49.027376662630189, 0.0 ], [ -119.53422927276929, 49.074518608049878, 0.0 ], [ -119.5699982862626, 49.141806336299787, 0.0 ], [ -119.54836830822811, 49.161389690904123, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Methow River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -119.9027993553952, 48.049853400969113, 0.0 ], [ -119.91308207961301, 48.046804414666717, 0.0 ], [ -119.9300591573038, 48.052739812620828, 0.0 ], [ -119.94839148160349, 48.069793277486291, 0.0 ], [ -119.949811560653, 48.070268895619087, 0.0 ], [ -119.9746048009023, 48.076448070323892, 0.0 ], [ -120.0042925075782, 48.075750967009618, 0.0 ], [ -120.02284015172781, 48.090842982079963, 0.0 ], [ -120.0115546823295, 48.104307610485883, 0.0 ], [ -120.01085034633, 48.105017199693712, 0.0 ], [ -120.0057619016897, 48.122414763873792, 0.0 ], [ -120.002957944293, 48.136124883681617, 0.0 ], [ -120.0214053476914, 48.137357460752767, 0.0 ], [ -120.0399278252151, 48.139825154397087, 0.0 ], [ -120.04187855046609, 48.14040760328875, 0.0 ], [ -120.06754406211719, 48.154954144165728, 0.0 ], [ -120.0834105488091, 48.170002427618137, 0.0 ], [ -120.10147731186279, 48.193156334809302, 0.0 ], [ -120.1265698174508, 48.206555095876112, 0.0 ], [ -120.12218260714801, 48.226520116307732, 0.0 ], [ -120.1080461719576, 48.254771033512199, 0.0 ], [ -120.1073023476908, 48.255267050712717, 0.0 ], [ -120.0745817552326, 48.285744227231802, 0.0 ], [ -120.06267439657751, 48.311997270090913, 0.0 ], [ -120.06529927337171, 48.326346546609493, 0.0 ], [ -120.0965896884682, 48.344933267800748, 0.0 ], [ -120.1219413030781, 48.365621045215839, 0.0 ], [ -120.1328137163339, 48.393598675163183, 0.0 ], [ -120.1470365896738, 48.418083193036871, 0.0 ], [ -120.1474129689922, 48.418577125944047, 0.0 ], [ -120.1574987036263, 48.431923184947962, 0.0 ], [ -120.15982198223909, 48.451402600746377, 0.0 ], [ -120.1605658520173, 48.452145139256587, 0.0 ], [ -120.17028396055839, 48.469419057426663, 0.0 ], [ -120.17102458924781, 48.469923229107629, 0.0 ], [ -120.1829175451611, 48.475280925542073, 0.0 ], [ -120.2306482311634, 48.483157604639423, 0.0 ], [ -120.23214179091239, 48.483886045640432, 0.0 ], [ -120.2995534382177, 48.522380444323609, 0.0 ], [ -120.3010303527647, 48.523860382902413, 0.0 ], [ -120.3631627162888, 48.564373171276749, 0.0 ], [ -120.4350392577723, 48.601455228492917, 0.0 ], [ -120.4702014854408, 48.630862585422193, 0.0 ], [ -120.516000671404, 48.652528195306608, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Entiat River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -120.2311493120708, 47.663305559537783, 0.0 ], [ -120.26285104626059, 47.664809614129553, 0.0 ], [ -120.2908842375974, 47.667832624618022, 0.0 ], [ -120.3036044313348, 47.670008433392987, 0.0 ], [ -120.3039299745209, 47.670662891248767, 0.0 ], [ -120.31736238096489, 47.690122462978863, 0.0 ], [ -120.3173634256963, 47.690341713875107, 0.0 ], [ -120.3245809618175, 47.702791089194619, 0.0 ], [ -120.33535124704549, 47.716042237897319, 0.0 ], [ -120.3526559049166, 47.729358646618138, 0.0 ], [ -120.36029699308909, 47.732175717542098, 0.0 ], [ -120.3636019932765, 47.740554621172713, 0.0 ], [ -120.3667463337101, 47.750595049035446, 0.0 ], [ -120.3667461581844, 47.750838084759252, 0.0 ], [ -120.3649586688428, 47.758591692177468, 0.0 ], [ -120.36716079300071, 47.765910964199271, 0.0 ], [ -120.3806039075472, 47.775331643444481, 0.0 ], [ -120.3903867620825, 47.787486534629259, 0.0 ], [ -120.4011257645878, 47.797182765985262, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Imnaha River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -116.76417483969669, 45.817055129493987, 0.0 ], [ -116.75846222225471, 45.809188441342307, 0.0 ], [ -116.7575894492735, 45.801449848332489, 0.0 ], [ -116.75478345048541, 45.796851787159568, 0.0 ], [ -116.750962535361, 45.788174947369157, 0.0 ], [ -116.7429166473258, 45.78165290623533, 0.0 ], [ -116.7449900530453, 45.774603236464742, 0.0 ], [ -116.74811835576909, 45.764227967897611, 0.0 ], [ -116.7571879702321, 45.750335080882948, 0.0 ], [ -116.7657562211772, 45.743484656091567, 0.0 ], [ -116.7659928340332, 45.743177636858093, 0.0 ], [ -116.7727388623878, 45.73754722208151, 0.0 ], [ -116.778782797096, 45.728656092831372, 0.0 ], [ -116.77883405365429, 45.724111617491928, 0.0 ], [ -116.7775185431554, 45.718615733701142, 0.0 ], [ -116.77795516043921, 45.710778342305382, 0.0 ], [ -116.7821149844592, 45.703460610965159, 0.0 ], [ -116.7852372113648, 45.69359409385779, 0.0 ], [ -116.792468744685, 45.684063602279757, 0.0 ], [ -116.805024542634, 45.674710233191817, 0.0 ], [ -116.8194860322081, 45.666541097011297, 0.0 ], [ -116.8293531936081, 45.655020461866947, 0.0 ], [ -116.8402681302007, 45.64159157634905, 0.0 ], [ -116.8468582782034, 45.632185315561699, 0.0 ], [ -116.8466392171843, 45.62059585734108, 0.0 ], [ -116.84651279496779, 45.620170261394449, 0.0 ], [ -116.8425752512364, 45.608202587937512, 0.0 ], [ -116.8385282590647, 45.574825604944927, 0.0 ], [ -116.83498614178809, 45.551865922431212, 0.0 ], [ -116.8201547374745, 45.52774117037351, 0.0 ], [ -116.80815455280811, 45.501361319862703, 0.0 ], [ -116.7991588657395, 45.36926660803644, 0.0 ], [ -116.80548302486061, 45.325355735880187, 0.0 ], [ -116.7995330662586, 45.286081548192833, 0.0 ], [ -116.81313907710739, 45.257370689671063, 0.0 ], [ -116.8469780626573, 45.232487575916892, 0.0 ], [ -116.8657379253773, 45.208765137276131, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Hood River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -121.5068945083614, 45.712708318641937, 0.0 ], [ -121.50769790519909, 45.705268821662507, 0.0 ], [ -121.50764180487231, 45.690464710492712, 0.0 ], [ -121.5148123778507, 45.673952233841781, 0.0 ], [ -121.5286931979296, 45.662509308888517, 0.0 ], [ -121.5532319334523, 45.653390262262221, 0.0 ], [ -121.575787105583, 45.649004151053873, 0.0 ], [ -121.59130389338191, 45.639368130846307, 0.0 ], [ -121.6106583000421, 45.625759105718892, 0.0 ], [ -121.6242250550759, 45.612825251613877, 0.0 ], [ -121.63426000309759, 45.605753883044251, 0.0 ], [ -121.6319043778669, 45.593157552086438, 0.0 ], [ -121.6291690580705, 45.575543501722052, 0.0 ], [ -121.6126843903362, 45.567376940399981, 0.0 ], [ -121.5945658902881, 45.563096952010802, 0.0 ], [ -121.5860097092842, 45.555713471148998, 0.0 ], [ -121.57974814243001, 45.539178417628897, 0.0 ], [ -121.5668961364202, 45.519443117788917, 0.0 ], [ -121.56221695141249, 45.494071271170817, 0.0 ], [ -121.5622171363911, 45.475049926178137, 0.0 ], [ -121.5664903755457, 45.466853765327201, 0.0 ], [ -121.5765605672332, 45.462510061038287, 0.0 ], [ -121.5809442976897, 45.459073471299881, 0.0 ], [ -121.57996957252961, 45.449595077154797, 0.0 ], [ -121.57372640767851, 45.433662115862937, 0.0 ], [ -121.57370554927461, 45.433141319463438, 0.0 ], [ -121.56863836638399, 45.414714534772102, 0.0 ], [ -121.5664763402107, 45.397909176872908, 0.0 ], [ -121.5686833626756, 45.375896967839843, 0.0 ], [ -121.5723892998129, 45.361520923229087, 0.0 ], [ -121.56963118680289, 45.351426497106267, 0.0 ], [ -121.57034834901251, 45.35090268651723, 0.0 ], [ -121.57318126649319, 45.340105605447263, 0.0 ], [ -121.58549917336779, 45.331826771547398, 0.0 ], [ -121.5978127782963, 45.326496933696831, 0.0 ], [ -121.6070533083564, 45.324428364083992, 0.0 ], [ -121.61756327829291, 45.329003769367233, 0.0 ], [ -121.6256219782302, 45.335282556105241, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Deschutes River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -120.9153735309622, 45.63927760423617, 0.0 ], [ -120.9087209113376, 45.617388345225542, 0.0 ], [ -120.8997185154103, 45.592313285694161, 0.0 ], [ -120.90549329570111, 45.563338805840047, 0.0 ], [ -120.90625411869119, 45.561699084472089, 0.0 ], [ -120.9070118410197, 45.55788655078981, 0.0 ], [ -120.8808121017622, 45.528596591745583, 0.0 ], [ -120.82529021642139, 45.515353307068779, 0.0 ], [ -120.8409949278373, 45.468949373387233, 0.0 ], [ -120.8568043503161, 45.434495591870082, 0.0 ], [ -120.8709282861407, 45.39115418886113, 0.0 ], [ -120.91625742064829, 45.358614037133982, 0.0 ], [ -120.9467424114895, 45.325716760593259, 0.0 ], [ -120.979546431621, 45.312959178057618, 0.0 ], [ -121.0166869877328, 45.295758310815742, 0.0 ], [ -121.0278215754784, 45.2722380993267, 0.0 ], [ -121.061660061596, 45.23499832087618, 0.0 ], [ -121.06244240481919, 45.234987565237951, 0.0 ], [ -121.0847512252053, 45.20684073880409, 0.0 ], [ -121.0839174323829, 45.173172194386893, 0.0 ], [ -121.1261348985319, 45.136487689530107, 0.0 ], [ -121.1329595491453, 45.103392725187128, 0.0 ], [ -121.1157523643427, 45.077981537894352, 0.0 ], [ -121.1117977706901, 45.044282321277983, 0.0 ], [ -121.1119544698784, 45.042089951928283, 0.0 ], [ -121.0794893726676, 45.03368182319727, 0.0 ], [ -121.0581288555932, 45.008312054872931, 0.0 ], [ -121.06336901386069, 44.971344793847642, 0.0 ], [ -121.07977258956301, 44.935775409376021, 0.0 ], [ -121.081301032583, 44.934118265881658, 0.0 ], [ -121.07931657024641, 44.903045521648799, 0.0 ], [ -121.0509821782932, 44.881194963312012, 0.0 ], [ -121.0675687097504, 44.858655037666992, 0.0 ], [ -121.0791451886582, 44.828331616791978, 0.0 ], [ -121.1093799601076, 44.806303811570587, 0.0 ], [ -121.153525295546, 44.791695489427617, 0.0 ], [ -121.2149889106434, 44.767216251233222, 0.0 ], [ -121.2409262375765, 44.725629370501458, 0.0 ], [ -121.2399656434095, 44.684970412718023, 0.0 ], [ -121.26296335914761, 44.651543951499583, 0.0 ], [ -121.27716980072969, 44.608085898922077, 0.0 ], [ -121.2740520308204, 44.57858850834787, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "John Day River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -120.6517301035822, 45.734304827474517, 0.0 ], [ -120.6306805641758, 45.721914059562678, 0.0 ], [ -120.57825219799891, 45.694400972423821, 0.0 ], [ -120.5270109772583, 45.66836796643382, 0.0 ], [ -120.4872244164191, 45.65261787106143, 0.0 ], [ -120.4714949130701, 45.623510655778539, 0.0 ], [ -120.4506891077679, 45.623594548803347, 0.0 ], [ -120.4326148125414, 45.602613380349737, 0.0 ], [ -120.4126036731396, 45.594692221542658, 0.0 ], [ -120.4052580802676, 45.558281115076532, 0.0 ], [ -120.3769156374851, 45.537232175003702, 0.0 ], [ -120.3758618741133, 45.537233209632873, 0.0 ], [ -120.3612659098077, 45.532176853782367, 0.0 ], [ -120.36638498074809, 45.511768717393991, 0.0 ], [ -120.3901166417191, 45.492727936461307, 0.0 ], [ -120.4401316511571, 45.473046858079599, 0.0 ], [ -120.4888938339909, 45.45699729671594, 0.0 ], [ -120.5010314556899, 45.416349178973753, 0.0 ], [ -120.5140887755469, 45.374832801562832, 0.0 ], [ -120.5344893609181, 45.3372240321142, 0.0 ], [ -120.5324304136163, 45.334455576422279, 0.0 ], [ -120.5303446964334, 45.33157929296425, 0.0 ], [ -120.5412422743769, 45.282258159618067, 0.0 ], [ -120.5466857920472, 45.238780570657262, 0.0 ], [ -120.5351747951035, 45.214099013056249, 0.0 ], [ -120.4880471510313, 45.190580329749913, 0.0 ], [ -120.4794614719503, 45.165307519307902, 0.0 ], [ -120.4628122697866, 45.135351539252007, 0.0 ], [ -120.4618294020627, 45.113181545612832, 0.0 ], [ -120.5028444261474, 45.098853399984257, 0.0 ], [ -120.4958642019713, 45.074041440618963, 0.0 ], [ -120.4958539859101, 45.070904655743419, 0.0 ], [ -120.4827949220537, 45.023040040184988, 0.0 ], [ -120.4790664679286, 44.969194107845283, 0.0 ], [ -120.4786795426925, 44.944093489291987, 0.0 ], [ -120.4576745052988, 44.912006106239673, 0.0 ], [ -120.44181477926151, 44.88945315043479, 0.0 ], [ -120.4550992149959, 44.873067901396773, 0.0 ], [ -120.40955463833819, 44.849540973225153, 0.0 ], [ -120.3746579353935, 44.826489395417049, 0.0 ], [ -120.37382016127189, 44.824907866614247, 0.0 ], [ -120.391423044009, 44.78799844641793, 0.0 ], [ -120.392799549006, 44.758543568709278, 0.0 ], [ -120.3448795547279, 44.740409104694578, 0.0 ], [ -120.3410455301218, 44.739845849056351, 0.0 ], [ -120.2732114576017, 44.737779128747867, 0.0 ], [ -120.2138043498216, 44.754561781464417, 0.0 ], [ -120.16690858182641, 44.737944871108418, 0.0 ], [ -120.1361226828278, 44.732779491175599, 0.0 ], [ -120.1035091872175, 44.745138253651717, 0.0 ], [ -120.1008942543871, 44.747346944888207, 0.0 ], [ -120.064866769155, 44.768781062979777, 0.0 ], [ -119.9972655149415, 44.796142881519508, 0.0 ], [ -119.9952265405729, 44.796874338513462, 0.0 ], [ -119.99316384891929, 44.798348408814149, 0.0 ], [ -119.90857445513549, 44.810163713914932, 0.0 ], [ -119.8632106497905, 44.816401198990043, 0.0 ], [ -119.8084061695163, 44.834610191111153, 0.0 ], [ -119.7714589413051, 44.818176609747269, 0.0 ], [ -119.73958167035001, 44.823765705187597, 0.0 ], [ -119.73031346931479, 44.809648726262303, 0.0 ], [ -119.71207366546589, 44.800742777343139, 0.0 ], [ -119.6830212312405, 44.778097456560779, 0.0 ], [ -119.6471245547758, 44.759855114678032, 0.0 ], [ -119.654241554761, 44.662968726062871, 0.0 ], [ -119.63693712600561, 44.607589045275617, 0.0 ], [ -119.6390787905579, 44.531316875705691, 0.0 ], [ -119.5783540840185, 44.49580105673148, 0.0 ], [ -119.37749561334699, 44.444757137599353, 0.0 ], [ -119.19410732844069, 44.418857850784207, 0.0 ], [ -119.1914665330095, 44.419442402824799, 0.0 ], [ -118.9822261493895, 44.419723565791891, 0.0 ], [ -118.7274673844128, 44.452404500711552, 0.0 ], [ -118.6469755646127, 44.448856378341212, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Umatilla River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -119.35114038039831, 45.916778758778399, 0.0 ], [ -119.340922291084, 45.914818789381393, 0.0 ], [ -119.3307143084414, 45.910961933927091, 0.0 ], [ -119.3269105798374, 45.888226995182052, 0.0 ], [ -119.32048084282739, 45.855544642605217, 0.0 ], [ -119.3301925469424, 45.837157754651578, 0.0 ], [ -119.3419887968135, 45.814998673648063, 0.0 ], [ -119.3563572360834, 45.803734859729552, 0.0 ], [ -119.35568439781611, 45.803258098242402, 0.0 ], [ -119.3483415434018, 45.792342962860843, 0.0 ], [ -119.3449564073761, 45.791380408574767, 0.0 ], [ -119.3164655817715, 45.789809854374099, 0.0 ], [ -119.313745699403, 45.790267549547082, 0.0 ], [ -119.3103424799102, 45.791193450731079, 0.0 ], [ -119.30898001590261, 45.791658327837979, 0.0 ], [ -119.2764073003827, 45.793817072126288, 0.0 ], [ -119.2439469488622, 45.786062057511337, 0.0 ], [ -119.24327498966591, 45.785585673460503, 0.0 ], [ -119.2177712142495, 45.767451264011157, 0.0 ], [ -119.20120437432369, 45.741346549497081, 0.0 ], [ -119.1805315761851, 45.719463286302812, 0.0 ], [ -119.12682133621909, 45.691385159765083, 0.0 ], [ -119.0769405778309, 45.677821936683927, 0.0 ], [ -119.02040624595359, 45.668834102527512, 0.0 ], [ -118.9578574281403, 45.655556482912672, 0.0 ], [ -118.955833668325, 45.655542101654532, 0.0 ], [ -118.95111234305099, 45.65550837050241, 0.0 ], [ -118.8876251237334, 45.656768465711629, 0.0 ], [ -118.82464043023499, 45.667947264652739, 0.0 ], [ -118.8239687666296, 45.667941775519999, 0.0 ], [ -118.69774109821471, 45.673201611737632, 0.0 ], [ -118.61033551409039, 45.671744352545488, 0.0 ], [ -118.608317786567, 45.672193508580818, 0.0 ], [ -118.5452107354284, 45.679616806739332, 0.0 ], [ -118.46889403319661, 45.68707787941392, 0.0 ], [ -118.3621649364768, 45.702028438497983, 0.0 ], [ -118.2725193315152, 45.727302509032562, 0.0 ], [ -118.24510562190019, 45.741777290635753, 0.0 ], [ -118.2052643523518, 45.733422100860203, 0.0 ], [ -118.18994871964679, 45.723927837121991, 0.0 ], [ -118.19699767952331, 45.713411040119418, 0.0 ], [ -118.20233029025729, 45.702281160803189, 0.0 ], [ -118.2046802263195, 45.68862520675075, 0.0 ], [ -118.204375670532, 45.687751275461238, 0.0 ], [ -118.18790326048089, 45.676157759398578, 0.0 ], [ -118.1695866079626, 45.662831868157149, 0.0 ], [ -118.1683259317808, 45.6624253955857, 0.0 ], [ -118.1357496671515, 45.653084023505542, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Klickitat River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -121.2944798155558, 45.695167633846651, 0.0 ], [ -121.28619726014649, 45.700982548024903, 0.0 ], [ -121.2857548766834, 45.701145082145672, 0.0 ], [ -121.2753397158402, 45.707868047543712, 0.0 ], [ -121.2751227150612, 45.707867737562239, 0.0 ], [ -121.2663596910085, 45.712779247050953, 0.0 ], [ -121.2585717668625, 45.718542223557641, 0.0 ], [ -121.2515804755498, 45.7212340556691, 0.0 ], [ -121.2513616505651, 45.72139318371832, 0.0 ], [ -121.250705954746, 45.721869981431077, 0.0 ], [ -121.2491813132138, 45.722658019432693, 0.0 ], [ -121.24552891350341, 45.726529622914583, 0.0 ], [ -121.2422918189758, 45.729333834127189, 0.0 ], [ -121.2308750612835, 45.730680833277368, 0.0 ], [ -121.23214020696579, 45.738348669534851, 0.0 ], [ -121.2247677723139, 45.742097326246032, 0.0 ], [ -121.2211347395304, 45.746890042601613, 0.0 ], [ -121.22048808870601, 45.747821825694082, 0.0 ], [ -121.2200537816426, 45.748289680414899, 0.0 ], [ -121.2118495087728, 45.753255653371717, 0.0 ], [ -121.2111039580745, 45.761733139620063, 0.0 ], [ -121.2055611570205, 45.767887275550052, 0.0 ], [ -121.2131918862988, 45.776580590403412, 0.0 ], [ -121.2074866810683, 45.787529730749569, 0.0 ], [ -121.2019465289536, 45.795390916176558, 0.0 ], [ -121.1898386929352, 45.800606852343648, 0.0 ], [ -121.17709420715209, 45.804093691945127, 0.0 ], [ -121.16902848552201, 45.813031085329001, 0.0 ], [ -121.15791524634071, 45.814229711395022, 0.0 ], [ -121.1570318208919, 45.814540282531738, 0.0 ], [ -121.14834025463, 45.821477016945387, 0.0 ], [ -121.1323419285593, 45.820596775215819, 0.0 ], [ -121.1213236748133, 45.818843134022913, 0.0 ], [ -121.1146360723822, 45.824750228323772, 0.0 ], [ -121.11398324007941, 45.825062533301598, 0.0 ], [ -121.104546546555, 45.824663008902519, 0.0 ], [ -121.09296321908251, 45.827691836868318, 0.0 ], [ -121.0920939251257, 45.828159013227193, 0.0 ], [ -121.083863290238, 45.832335417076983, 0.0 ], [ -121.0760640912316, 45.836828586362863, 0.0 ], [ -121.0749686343768, 45.837148503949933, 0.0 ], [ -121.0638275121032, 45.840007144666266, 0.0 ], [ -121.0678041222038, 45.847046732523253, 0.0 ], [ -121.0676622012727, 45.853186673962369, 0.0 ], [ -121.0769323557095, 45.858643537267213, 0.0 ], [ -121.0950276587448, 45.864907775381141, 0.0 ], [ -121.1026992798533, 45.87678428069799, 0.0 ], [ -121.1155139711846, 45.88509183428382, 0.0 ], [ -121.1118706450119, 45.89792006815123, 0.0 ], [ -121.1016602317779, 45.902897180530211, 0.0 ], [ -121.10101417706569, 45.903513134362541, 0.0 ], [ -121.0999384425574, 45.904590397710272, 0.0 ], [ -121.0902993868781, 45.916260442674272, 0.0 ], [ -121.0900891872475, 45.91671824877956, 0.0 ], [ -121.0891874988438, 45.92677448654036, 0.0 ], [ -121.0953317010307, 45.927328473721971, 0.0 ], [ -121.1105950224503, 45.923828778636128, 0.0 ], [ -121.12499111369659, 45.925138797860349, 0.0 ], [ -121.1291246908075, 45.933642327002502, 0.0 ], [ -121.1301442891756, 45.941229751546508, 0.0 ], [ -121.1210978820429, 45.938327657886873, 0.0 ], [ -121.1125594328505, 45.93687431100679, 0.0 ], [ -121.10680070392461, 45.943634330398808, 0.0 ], [ -121.1049864886232, 45.954599102172047, 0.0 ], [ -121.1047966900188, 45.955187670198022, 0.0 ], [ -121.1040189076469, 45.956871604279307, 0.0 ], [ -121.1015456744158, 45.965119872353917, 0.0 ], [ -121.1013457590017, 45.965279078990697, 0.0 ], [ -121.1025228571412, 45.972229314296591, 0.0 ], [ -121.114821380149, 45.976832402116173, 0.0 ], [ -121.1222948487767, 45.975721121367599, 0.0 ], [ -121.12582325979911, 45.983490113688838, 0.0 ], [ -121.12584596301799, 45.984070718443483, 0.0 ], [ -121.1305134812859, 45.990073054378549, 0.0 ], [ -121.1415578378212, 45.997122800712773, 0.0 ], [ -121.1415796546836, 45.997414211200017, 0.0 ], [ -121.1420354924235, 45.99814963690573, 0.0 ], [ -121.1510561254192, 46.009685542091077, 0.0 ], [ -121.15469772108359, 46.017513529637682, 0.0 ], [ -121.16485776969461, 46.030345793375638, 0.0 ], [ -121.177670683177, 46.033902535563307, 0.0 ], [ -121.1781473352479, 46.034944934930436, 0.0 ], [ -121.1817147169011, 46.042475126687613, 0.0 ], [ -121.1975282630122, 46.037827991636107, 0.0 ], [ -121.2273108942818, 46.039825489812443, 0.0 ], [ -121.23784378408151, 46.049507789415102, 0.0 ], [ -121.23821287399581, 46.050279466784637, 0.0 ], [ -121.2517549762927, 46.061733667230662, 0.0 ], [ -121.2555227739925, 46.071031581796198, 0.0 ], [ -121.25553430861, 46.071817369294571, 0.0 ], [ -121.26586604429259, 46.087055272699452, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Tucannon River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -118.1754526064167, 46.559789792420489, 0.0 ], [ -118.1566571899057, 46.539302800138103, 0.0 ], [ -118.10146118874199, 46.511425777983227, 0.0 ], [ -118.09163365730021, 46.511254016960251, 0.0 ], [ -118.08321157742159, 46.511106092039867, 0.0 ], [ -118.0260443161975, 46.507241186048617, 0.0 ], [ -117.99228298235209, 46.506607125567157, 0.0 ], [ -117.9289829141244, 46.477582534555047, 0.0 ], [ -117.85648412007831, 46.465620945195447, 0.0 ], [ -117.8537265405734, 46.464608367036952, 0.0 ], [ -117.7857951512802, 46.452736726474249, 0.0 ], [ -117.7391857197927, 46.437448234811427, 0.0 ], [ -117.7344585338212, 46.416265998054257, 0.0 ], [ -117.70477641475441, 46.393638939787017, 0.0 ], [ -117.68916222040799, 46.35666903819866, 0.0 ], [ -117.6599822267776, 46.315503977436848, 0.0 ], [ -117.65899416077021, 46.314416656585522, 0.0 ], [ -117.65754736827721, 46.312252016212732, 0.0 ], [ -117.6512858539747, 46.286950594499856, 0.0 ], [ -117.664159369364, 46.262717802762381, 0.0 ], [ -117.66469073629059, 46.26202902058688, 0.0 ], [ -117.66628503524799, 46.259621226410857, 0.0 ], [ -117.67527576781789, 46.248643781993557, 0.0 ], [ -117.7057296309893, 46.232548761805397, 0.0 ], [ -117.7067593384072, 46.232221864015898, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Natches River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -120.5144705809693, 46.630590570733261, 0.0 ], [ -120.5160547232279, 46.629621149924759, 0.0 ], [ -120.5203147973203, 46.62819896233804, 0.0 ], [ -120.5248546414454, 46.626750146169961, 0.0 ], [ -120.5312503305002, 46.625989077517787, 0.0 ], [ -120.5433168468136, 46.624071529033522, 0.0 ], [ -120.5513969575056, 46.625426509456339, 0.0 ], [ -120.5652213837555, 46.626668042109628, 0.0 ], [ -120.57527895009351, 46.629702353407431, 0.0 ], [ -120.5891032081022, 46.631161240508447, 0.0 ], [ -120.6004048442353, 46.634784128063323, 0.0 ], [ -120.6073472757712, 46.637623401963481, 0.0 ], [ -120.6136873095432, 46.643323688475512, 0.0 ], [ -120.6156058441031, 46.647831221718143, 0.0 ], [ -120.6187077249658, 46.65161186167375, 0.0 ], [ -120.6265813332278, 46.654456671592953, 0.0 ], [ -120.6282790423172, 46.658856331361271, 0.0 ], [ -120.6336122961694, 46.66158633549361, 0.0 ], [ -120.6337298686922, 46.66169793689383, 0.0 ], [ -120.63767302542961, 46.663620364180908, 0.0 ], [ -120.6406377749325, 46.668292900223392, 0.0 ], [ -120.6426687911102, 46.671843879416109, 0.0 ], [ -120.6478214394705, 46.679183184642412, 0.0 ], [ -120.6552608034571, 46.684869765099762, 0.0 ], [ -120.6542619332146, 46.689126938218358, 0.0 ], [ -120.65510207016619, 46.696394146162447, 0.0 ], [ -120.659328675845, 46.69951970169074, 0.0 ], [ -120.6618865947659, 46.703087490883917, 0.0 ], [ -120.6618885640313, 46.703125328284933, 0.0 ], [ -120.6631029250033, 46.705299599523769, 0.0 ], [ -120.6734788711464, 46.710590595594319, 0.0 ], [ -120.6812971030643, 46.715283224856101, 0.0 ], [ -120.6856596892478, 46.721070012847363, 0.0 ], [ -120.6924285250965, 46.724251071887522, 0.0 ], [ -120.7025261842017, 46.724155239027127, 0.0 ], [ -120.7094552628559, 46.729493416659373, 0.0 ], [ -120.7095944383628, 46.729508733742009, 0.0 ], [ -120.7097336305565, 46.729524037508043, 0.0 ], [ -120.7171710685794, 46.729362612657788, 0.0 ], [ -120.74498214886221, 46.73611106502544, 0.0 ], [ -120.75238286231421, 46.740261334175649, 0.0 ], [ -120.7726244472869, 46.746930967724957, 0.0 ], [ -120.78081640172741, 46.74835541537535, 0.0 ], [ -120.79260537346271, 46.745433458988053, 0.0 ], [ -120.8092130483179, 46.747959172655847, 0.0 ], [ -120.8161459539464, 46.748778866026342, 0.0 ], [ -120.81631950425179, 46.748941844186319, 0.0 ], [ -120.8280046877756, 46.757480922849112, 0.0 ], [ -120.83023023572611, 46.760625139287363, 0.0 ], [ -120.82767893600671, 46.763606963276501, 0.0 ], [ -120.8276896421447, 46.763734955494172, 0.0 ], [ -120.82770041993901, 46.763825571534731, 0.0 ], [ -120.84020546505, 46.768462313574403, 0.0 ], [ -120.844610104352, 46.770321844478921, 0.0 ], [ -120.85557572876731, 46.773511794441667, 0.0 ], [ -120.86773790578231, 46.781191771588126, 0.0 ], [ -120.8737655277782, 46.791070993695108, 0.0 ], [ -120.90157460817809, 46.796951661148682, 0.0 ], [ -120.9300571523344, 46.817986203752113, 0.0 ], [ -120.9517914274651, 46.850296039636142, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "White Salmon River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -121.5250714669982, 45.726450112156719, 0.0 ], [ -121.5213580474843, 45.730422803861053, 0.0 ], [ -121.52125447322879, 45.73090681839448, 0.0 ], [ -121.5211644758528, 45.731582696468827, 0.0 ], [ -121.52253820525451, 45.739237890397327, 0.0 ], [ -121.5224479774614, 45.745665859628801, 0.0 ], [ -121.5222011475996, 45.74605762230027, 0.0 ], [ -121.520878511418, 45.748688538686707, 0.0 ], [ -121.52637650051599, 45.75263842443055, 0.0 ], [ -121.5294654803711, 45.755497355054693, 0.0 ], [ -121.5299076140933, 45.755953287055547, 0.0 ], [ -121.535420483602, 45.760967592777497, 0.0 ], [ -121.5374215504536, 45.764585250956479, 0.0 ], [ -121.5367508495019, 45.765871804117971, 0.0 ], [ -121.53849900580001, 45.76726103802018, 0.0 ], [ -121.5375250711851, 45.770881680583948, 0.0 ], [ -121.535140474071, 45.7729420849234, 0.0 ], [ -121.53160174658051, 45.772854529022581, 0.0 ], [ -121.5313232729025, 45.773141070481422, 0.0 ], [ -121.52602393420401, 45.777557626610729, 0.0 ], [ -121.5221928685782, 45.777516554051743, 0.0 ], [ -121.51750436914951, 45.778645151956532, 0.0 ], [ -121.51737707852079, 45.778697181722507, 0.0 ], [ -121.5139913202884, 45.783162443608859, 0.0 ], [ -121.5138505972194, 45.783345706028634, 0.0 ], [ -121.5137584543205, 45.783491181736323, 0.0 ], [ -121.5136312530705, 45.783810107865747, 0.0 ], [ -121.5134476946771, 45.784024309786702, 0.0 ], [ -121.51152338473, 45.788056487252419, 0.0 ], [ -121.51153555202831, 45.788232143358243, 0.0 ], [ -121.51154285197821, 45.78833751758598, 0.0 ], [ -121.5116311864206, 45.793891093037111, 0.0 ], [ -121.50871481796069, 45.796878182455274, 0.0 ], [ -121.50752203161839, 45.798479630954567, 0.0 ], [ -121.50223966513499, 45.797041916578493, 0.0 ], [ -121.49815985650621, 45.796343370582747, 0.0 ], [ -121.49366833982739, 45.795964637128002, 0.0 ], [ -121.4894077084529, 45.795408399873963, 0.0 ], [ -121.4889112979365, 45.795495408594469, 0.0 ], [ -121.4887667262592, 45.795570172479493, 0.0 ], [ -121.4885719085876, 45.795646679101658, 0.0 ], [ -121.4859150876359, 45.797066852531003, 0.0 ], [ -121.4857832319766, 45.797352048248797, 0.0 ], [ -121.4867634104254, 45.802504085680027, 0.0 ], [ -121.4872703773995, 45.810383531686711, 0.0 ], [ -121.48079638730739, 45.816779025592567, 0.0 ], [ -121.4806511095386, 45.816953150140897, 0.0 ], [ -121.4806547700058, 45.817067082483497, 0.0 ], [ -121.482699455804, 45.823119710475162, 0.0 ], [ -121.48740739792549, 45.827197012430261, 0.0 ], [ -121.4874239290489, 45.827364253866392, 0.0 ], [ -121.4892098488251, 45.833078489225827, 0.0 ], [ -121.4942787015149, 45.839313695417907, 0.0 ], [ -121.5008467163567, 45.844609613835793, 0.0 ], [ -121.50808294143771, 45.849746707737602, 0.0 ], [ -121.510000116925, 45.855016706970552, 0.0 ], [ -121.5082984661975, 45.858966907860882, 0.0 ], [ -121.5058670596993, 45.860875730379853, 0.0 ], [ -121.5044057575591, 45.864148219900571, 0.0 ], [ -121.50641538325419, 45.866257020147522, 0.0 ], [ -121.5102218972513, 45.868586124782063, 0.0 ], [ -121.5128307368783, 45.870640152102823, 0.0 ], [ -121.5142214745096, 45.872862572407151, 0.0 ], [ -121.5142950271043, 45.873031671582552, 0.0 ], [ -121.5143705465694, 45.873245359764802, 0.0 ], [ -121.5172337379759, 45.876366870614113, 0.0 ], [ -121.5172386658831, 45.876453065799289, 0.0 ], [ -121.5172569170447, 45.876753949860799, 0.0 ], [ -121.5185944215638, 45.880563390882067, 0.0 ], [ -121.5184814434165, 45.880695168685143, 0.0 ], [ -121.518362941188, 45.880741867802861, 0.0 ], [ -121.51486540440099, 45.885197117998302, 0.0 ], [ -121.5122476312779, 45.889650483137324, 0.0 ], [ -121.5085120154173, 45.890299654827608, 0.0 ], [ -121.5050165654048, 45.892524691304921, 0.0 ], [ -121.5032156057684, 45.896263527563718, 0.0 ], [ -121.5055188211674, 45.899028638551208, 0.0 ], [ -121.5072244551738, 45.903514692104537, 0.0 ], [ -121.5022087896655, 45.90942211425201, 0.0 ], [ -121.49252269391729, 45.914738938148481, 0.0 ], [ -121.4855795144818, 45.922452521212108, 0.0 ], [ -121.48188141692241, 45.934101502641283, 0.0 ], [ -121.4772194286567, 45.944953280510617, 0.0 ], [ -121.47030392480769, 45.964072169176973, 0.0 ], [ -121.49046183229299, 45.988570572392192, 0.0 ], [ -121.50338277195181, 45.995082317616188, 0.0 ], [ -121.5167982245065, 45.995320492778198, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Little White Salmon River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -121.639351048848, 45.709364862577821, 0.0 ], [ -121.64392714103749, 45.71658342848071, 0.0 ], [ -121.6436950568099, 45.719746792293627, 0.0 ], [ -121.6435018648838, 45.719813025639723, 0.0 ], [ -121.6430751625427, 45.720237140132902, 0.0 ], [ -121.6392349942065, 45.722758068087579, 0.0 ], [ -121.6343464158918, 45.72448346865373, 0.0 ], [ -121.6326977838752, 45.7283189754449, 0.0 ], [ -121.634336801334, 45.73363500871362, 0.0 ], [ -121.6352060760675, 45.736118890708042, 0.0 ], [ -121.6361154587219, 45.74234597729253, 0.0 ], [ -121.6379633657824, 45.747389786033807, 0.0 ], [ -121.6376428820934, 45.752421813640566, 0.0 ], [ -121.63766803540121, 45.752578594194759, 0.0 ], [ -121.6347987803418, 45.758790995851911, 0.0 ], [ -121.6312949571233, 45.762475249406137, 0.0 ], [ -121.6292417618474, 45.768106023264572, 0.0 ], [ -121.6298294060113, 45.773237090866473, 0.0 ], [ -121.62963032381531, 45.77350129481453, 0.0 ], [ -121.6269800432069, 45.77803960374964, 0.0 ], [ -121.63061514222581, 45.783379871976031, 0.0 ], [ -121.63424135409009, 45.785758587182883, 0.0 ], [ -121.6344811623196, 45.790157417539731, 0.0 ], [ -121.63447996207761, 45.790243104185969, 0.0 ], [ -121.635417942356, 45.795139503374642, 0.0 ], [ -121.641175349512, 45.79953757217676, 0.0 ], [ -121.6475903733033, 45.807586634108517, 0.0 ], [ -121.648455528616, 45.813974242312597, 0.0 ], [ -121.656986387789, 45.825504844401131, 0.0 ], [ -121.6660769115594, 45.833308154369163, 0.0 ], [ -121.6655265582832, 45.833689011886477, 0.0 ], [ -121.6599644684978, 45.844492141477993, 0.0 ], [ -121.6597778297059, 45.844999674842292, 0.0 ], [ -121.6595885487138, 45.845888641311369, 0.0 ], [ -121.6505534607391, 45.857939840760856, 0.0 ], [ -121.6505524984684, 45.858068566681382, 0.0 ], [ -121.6441252359149, 45.862632615175059, 0.0 ], [ -121.64394096107659, 45.862885731822281, 0.0 ], [ -121.642659581386, 45.863510068243023, 0.0 ], [ -121.6402543977275, 45.86894890846866, 0.0 ], [ -121.6406212325829, 45.86944159855824, 0.0 ], [ -121.645158071656, 45.874860666060648, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Wind River River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -121.7971588603229, 45.704819782720932, 0.0 ], [ -121.7971482481114, 45.720021822449219, 0.0 ], [ -121.7971472255969, 45.721467358859329, 0.0 ], [ -121.7976563717741, 45.723267820096588, 0.0 ], [ -121.8079228116992, 45.738788276076207, 0.0 ], [ -121.808434786634, 45.739507741388692, 0.0 ], [ -121.82483730422069, 45.753874740422333, 0.0 ], [ -121.8458549309281, 45.77045703092503, 0.0 ], [ -121.873489685365, 45.785528815484057, 0.0 ], [ -121.897112633848, 45.793079162549432, 0.0 ], [ -121.89862766511609, 45.793790826576142, 0.0 ], [ -121.9073250750989, 45.801008170218047, 0.0 ], [ -121.90731982407, 45.80173294022206, 0.0 ], [ -121.90719084166849, 45.813480233690903, 0.0 ], [ -121.9183303571557, 45.823778349491988, 0.0 ], [ -121.9373220270251, 45.834493955729023, 0.0 ], [ -121.9508451799648, 45.845581011791971, 0.0 ], [ -121.9588678796091, 45.855929178617707, 0.0 ], [ -121.9713691614069, 45.864812943727728, 0.0 ], [ -121.9815077866901, 45.878770655794497, 0.0 ], [ -122.0019254546156, 45.884879313772139, 0.0 ], [ -122.0247205266224, 45.900458196872123, 0.0 ], [ -122.0416024370333, 45.906790709876987, 0.0 ] ] } },
{ "type": "Feature", "properties": { "Name": "Willamette River", "Description": "" }, "geometry": { "type": "LineString", "coordinates": [ [ -122.09465491432729, 43.422064520421657 ], [ -122.12859046148156, 43.427801825347274 ], [ -122.16032874278574, 43.44312164931199 ], [ -122.21910559775642, 43.48511383671763 ], [ -122.25389563753549, 43.506415106357849 ], [ -122.26537024648729, 43.510809637158786 ], [ -122.32011878178196, 43.516119695771977 ], [ -122.37535559767713, 43.51392243082114 ], [ -122.42223059828291, 43.524969793460627 ], [ -122.45213782486184, 43.570013739341164 ], [ -122.4567154612252, 43.590033270044216 ], [ -122.45958411323835, 43.614203192596904 ], [ -122.45799719926305, 43.637762762375417 ], [ -122.44871985616135, 43.656012274440059 ], [ -122.43541419158498, 43.674872137480236 ], [ -122.42802893749661, 43.697821356283214 ], [ -122.428578254184, 43.721197821398619 ], [ -122.43913733622287, 43.741278387289185 ], [ -122.45390784439957, 43.75073883685269 ], [ -122.50011145704366, 43.766546942317291 ], [ -122.5173233718204, 43.769232488767955 ], [ -122.51811682835836, 43.776312566918875 ], [ -122.53715979696102, 43.809149481597728 ], [ -122.54649817614956, 43.819281317324226 ], [ -122.60142981700665, 43.854925848828771 ], [ -122.64061438668728, 43.866095281843172 ], [ -122.67815100810452, 43.895697332484701 ], [ -122.69798743414447, 43.908087469248812 ], [ -122.76366126170359, 43.92706940356328 ], [ -122.78331458218105, 43.929144598139089 ], [ -122.80223548040868, 43.933722235401831 ], [ -122.81969153593536, 43.944708562853748 ], [ -122.90654456275979, 44.021673895600941 ], [ -122.92754065646261, 44.034308172215617 ], [ -122.95012366414068, 44.036749578815716 ], [ -122.97404944594342, 44.035956122277696 ], [ -122.99901282503407, 44.03900787985333 ], [ -123.06377112568026, 44.066961981332042 ], [ -123.08501136013302, 44.081488348758796 ], [ -123.09746253208459, 44.092230536360148 ], [ -123.10338294167332, 44.102606512836587 ], [ -123.09148108640909, 44.107245184387466 ], [ -123.08702551952138, 44.113287665250425 ], [ -123.09111487528418, 44.126654364114984 ], [ -123.10204016844801, 44.148260809692658 ], [ -123.11034094944927, 44.178961492809549 ], [ -123.11913001195046, 44.195624090898946 ], [ -123.13243567652682, 44.202887274612351 ], [ -123.14983069596667, 44.271795965309479 ], [ -123.16032874281808, 44.283514715910599 ], [ -123.17143714064503, 44.293158270137212 ], [ -123.18040930870865, 44.304999090213926 ], [ -123.18394934778411, 44.322943426341169 ], [ -123.19072424999757, 44.333258367630151 ], [ -123.20366370344908, 44.340582586531013 ], [ -123.21190344926288, 44.351996161194677 ], [ -123.20445716088636, 44.374212957747829 ], [ -123.20872962131233, 44.37555573097319 ], [ -123.21812903568832, 44.381048895148808 ], [ -123.20970618431204, 44.389288640962604 ], [ -123.20714270733703, 44.39697907098838 ], [ -123.20671546102466, 44.405218816802176 ], [ -123.20305335157423, 44.422308661203942 ], [ -123.20390784419902, 44.42627594569251 ], [ -123.20256507097366, 44.430609442205252 ], [ -123.19456946501049, 44.439032293581477 ], [ -123.18968665270967, 44.452032782220442 ], [ -123.18907630083481, 44.495611883601384 ], [ -123.19078528518509, 44.511358953878471 ], [ -123.19633948454822, 44.528631902943403 ], [ -123.20445716088636, 44.545477606595227 ], [ -123.22862708253973, 44.568915105998769 ], [ -123.23241126236513, 44.576483465649574 ], [ -123.22826087141482, 44.584173895675292 ], [ -123.21855628200069, 44.589422919101025 ], [ -123.20702063696206, 44.592352606301631 ], [ -123.18376624222162, 44.594305731401789 ], [ -123.17839514842098, 44.597723700102279 ], [ -123.17601477790771, 44.604071356003431 ], [ -123.17094886004446, 44.613775946316821 ], [ -123.16801917194454, 44.621222235592654 ], [ -123.16722571540657, 44.635565496557604 ], [ -123.16350257076863, 44.641730047795591 ], [ -123.15428626195506, 44.646368719346469 ], [ -123.14256751225332, 44.648077703696686 ], [ -123.09782874231018, 44.649664617671988 ], [ -123.07518469944461, 44.655523992972519 ], [ -123.06004798104237, 44.666205145386414 ], [ -123.06108557833028, 44.682684637913326 ], [ -123.07616126244437, 44.691717840265085 ], [ -123.09917151643486, 44.697149969253246 ], [ -123.12016761013768, 44.704779364091507 ], [ -123.12938391805193, 44.720221258431195 ], [ -123.12541663356336, 44.740301825221081 ], [ -123.11473548114952, 44.752936102735134 ], [ -123.08092200437022, 44.771429754650399 ], [ -123.09764563674776, 44.776983954013531 ], [ -123.11522376175009, 44.778448797613862 ], [ -123.12242591027598, 44.783270574727169 ], [ -123.10826575397414, 44.798773504254314 ], [ -123.09837805899758, 44.803107000767056 ], [ -123.08702551952138, 44.805670477742126 ], [ -123.07780921160713, 44.810248114105491 ], [ -123.07408606696924, 44.820502020206959 ], [ -123.07744300048222, 44.829107977145668 ], [ -123.08549964073359, 44.832159734721245 ], [ -123.10826575397414, 44.833502508845925 ], [ -123.13164221908949, 44.837958074834319 ], [ -123.15196692572999, 44.844671941860327 ], [ -123.16081702341864, 44.856207586898961 ], [ -123.14983069596667, 44.875067449939138 ], [ -123.14488684847839, 44.876898504664382 ], [ -123.12926184767696, 44.878363348264656 ], [ -123.12254798065095, 44.881293036364582 ], [ -123.11870276563803, 44.886542059790315 ], [ -123.1177872387251, 44.891974187879157 ], [ -123.11754309797516, 44.896979071454211 ], [ -123.11571204324997, 44.901129461505207 ], [ -123.08092200437022, 44.93652985225981 ], [ -123.02147376233722, 44.966986395526078 ], [ -123.01268469983603, 44.977484442377488 ], [ -123.01927649648712, 44.987982489228898 ], [ -123.05113684816621, 45.008246160681892 ], [ -123.06108557833028, 45.024664618021347 ], [ -123.06163489501762, 45.044317938498807 ], [ -123.05687415309183, 45.063177801538984 ], [ -123.04912268787854, 45.080084539479003 ], [ -123.04057776612734, 45.093573309617852 ], [ -123.02470862547523, 45.105108953757167 ], [ -122.98460852798235, 45.119024969309066 ], [ -122.97173010971835, 45.134527898836211 ], [ -122.98387610573252, 45.153387762775708 ], [ -122.98875891803328, 45.158758856576412 ], [ -122.99181067650824, 45.165777899539819 ], [ -122.98485266873229, 45.180975653129565 ], [ -122.98534094933279, 45.189764715630758 ], [ -122.99510657483376, 45.201117255106965 ], [ -123.02196204293779, 45.213446356683562 ], [ -123.03380286391382, 45.223944403534972 ], [ -123.02660071538793, 45.228338934335909 ], [ -122.98180091025733, 45.241522528537303 ], [ -122.97392737556845, 45.241766668387925 ], [ -122.97166907453084, 45.245794988963269 ], [ -122.97173010971835, 45.261481024052841 ], [ -122.96330725834207, 45.281439520467757 ], [ -122.9429825508023, 45.284247137293391 ], [ -122.89659583259572, 45.271673894966852 ], [ -122.85008704311491, 45.270270086554035 ], [ -122.71782386018435, 45.306463934745921 ], [ -122.66759192606565, 45.308172919096137 ], [ -122.65013587143829, 45.316107488972534 ], [ -122.64336096922477, 45.337164617862868 ], [ -122.63487708266103, 45.350775457477312 ], [ -122.59727942605633, 45.373053290117298 ], [ -122.58812415243028, 45.388983465956869 ], [ -122.59483802035561, 45.410589910635224 ], [ -122.62816321563503, 45.438727117676422 ], [ -122.63591467994894, 45.460394598441553 ], [ -122.63182532418614, 45.498907781959247 ], [ -122.63518225859843, 45.517889715374395 ], [ -122.6495865547509, 45.539252020202071 ], [ -122.73424231662449, 45.590887762733644 ], [ -122.76006018744062, 45.623785711700691 ], [ -122.73418128143703, 45.656561590292768 ] ] } },
{ "type": "Feature", "properties": { "Name": "Cowlitz River", "Description": ""}, "geometry": { "type": "LineString", "coordinates": [ [ -121.59203040272877, 46.711981512494077 ], [ -121.58830725819752, 46.703802801556577 ], [ -121.58952796132252, 46.694342352337827 ], [ -121.63359534413502, 46.668280340619077 ], [ -121.71745764882252, 46.598517157025327 ], [ -121.76268469960377, 46.570135809369077 ], [ -121.82579505116627, 46.541571356244077 ], [ -121.84142005116627, 46.535956121869077 ], [ -121.85307776601002, 46.534857489056577 ], [ -121.87199866444752, 46.536200262494077 ], [ -121.94054114491627, 46.549811102337827 ], [ -121.96019446522877, 46.550726629681577 ], [ -122.00560462147877, 46.535345770306577 ] ] } },
{ "type": "Feature", "properties": { "Name": "Cowlitz River", "Description": ""}, "geometry": { "type": "LineString", "coordinates": [ [ -122.00560462147877, 46.535345770306577 ], [ -122.04240882069752, 46.520086981244077 ], [ -122.09386145741627, 46.495489813275327 ], [ -122.13072669179127, 46.485235907025327 ], [ -122.15678870351002, 46.482489324994077 ], [ -122.19389807851002, 46.493719793744077 ], [ -122.22533118397877, 46.495672918744077 ], [ -122.25322425038502, 46.486639715619077 ], [ -122.26128089101002, 46.484015203900327 ], [ -122.28526770741627, 46.492254949994077 ], [ -122.34496009022877, 46.512579657025327 ], [ -122.37834632069752, 46.534857489056577 ], [ -122.42815100819752, 46.543219305462827 ], [ -122.46770178944752, 46.559515692181577 ], [ -122.50761878163502, 46.572516180462827 ], [ -122.53892981679127, 46.572760321087827 ], [ -122.56151282460377, 46.564825750775327 ], [ -122.57646643788502, 46.547247625775327 ], [ -122.58299719960377, 46.534247137494077 ], [ -122.59367835194752, 46.526922918744077 ], [ -122.61168372304127, 46.524481512494077 ], [ -122.65147864491627, 46.528326727337827 ], [ -122.69658362538502, 46.520514227337827 ], [ -122.74644934804127, 46.503607489056577 ], [ -122.80284583241627, 46.481817938275327 ], [ -122.89220130116627, 46.440497137494077 ], [ -122.93620764882252, 46.426336981244077 ], [ -122.94371497304127, 46.419623114056577 ], [ -122.94749915272877, 46.396612860150327 ], [ -122.94298255116627, 46.366522528119077 ], [ -122.93034827382252, 46.337469793744077 ], [ -122.91423499257252, 46.284552313275327 ], [ -122.91130530507252, 46.250006414837827 ], [ -122.91838538319752, 46.214667059369077 ], [ -122.92149817616627, 46.185980535931577 ], [ -122.91539466054127, 46.152106024212827 ], [ -122.89830481679127, 46.124457098431577 ], [ -122.90746009022877, 46.104559637494077 ] ] } }
]
}

var criteria ={};

var analytes = {
	status: {
		enabled: false,
		name: "Status"
	},
	delist_class: {
		enabled: false,
		name: "Delisting Class",
		domain: [],
	},
	popsize: {
		enabled: true,
		name: "Pop. Size",
		mappings: {"Small": "Small", "Basic": "Basic", "Intermediate": "Intermediate", "Large": "Large", "Very Large": "Very Large"},
		domain: ["Small", "Basic", "Intermediate", "Large","Very Large"],
		colors: ["#bdd7e7","#bdd7e7","#6baed6","#3182bd","#08519c"]
	},
	priority: {
		enabled: true,
		name: "RM&E Priority",
		mappings: {"1": "1", "2": "2", "3": "3", "4": "4"},
		domain: ["1", "2", "3", "4"],
		colors: ["#bdd7e7","#6baed6","#3182bd","#08519c"]
	}	
}

var analytes_list = Object.keys(analytes);
var analytes_enabled = [];
	analytes_list.forEach(function (d) {
		if(analytes[d].enabled)analytes_enabled.push(d);
	});	

var topos = {"type":"Topology","transform":{"scale":[0.0003903221480469678,0.0002715085215204998],"translate":[-124.05871554937967,43.790586402347174]},"arcs":[[[21248,8869],[53,15],[56,38],[31,-2],[60,72],[103,48],[26,23],[6,57],[43,31],[-5,106],[44,48],[4,74],[-26,80],[24,48],[100,115],[23,72]],[[21790,9694],[41,39],[41,2],[41,46],[87,-61],[45,-57],[74,15],[81,-21],[23,39],[89,-40],[131,32],[135,122],[29,9],[54,-42],[107,89],[61,103],[43,50],[43,-9],[83,24],[41,57],[88,31],[49,-24],[54,1],[23,73],[44,-5],[42,36],[83,20],[184,126],[32,-56],[82,-17],[9,41],[37,10],[54,51],[10,52],[-80,57],[-32,43],[6,38],[52,5],[-11,53],[36,27],[5,51],[39,2],[29,53],[76,21],[29,82],[134,-33],[55,-67],[5,-79],[-47,-43],[17,-75],[52,-14],[4,-61],[53,-21],[55,37],[60,5],[207,-46],[46,65],[63,41],[33,-14],[44,30],[94,12],[69,-34],[26,-45],[-5,-132],[-55,-78],[33,-63],[-43,-79],[-2,-65],[17,-52],[-16,-34],[-69,-32],[-72,-10],[5,-74],[56,-69],[-12,-50],[30,-13],[-32,-56],[0,-61],[-96,-88],[31,-80],[-11,-96],[-48,-125],[16,-80],[-67,-47],[-34,4]],[[24575,9140],[-64,7],[-51,35],[-76,-9],[-69,38],[-2,49],[-43,22],[-90,-53],[-15,38],[-141,90],[18,61],[-1,106],[-66,10],[-82,-11],[-16,-56],[16,-62],[-65,-123],[-86,82],[-47,-14],[-20,63],[-46,4],[-46,-22],[-35,33],[-3,48],[-32,41],[-88,-57],[-77,16],[-63,-19],[-25,-77],[-87,-20],[-34,-66],[-69,26],[-52,-29],[-54,3],[-45,-20],[-68,-109],[-44,-9],[-11,-51],[-76,-23],[-48,-42],[54,-41],[28,-74],[-60,-51],[3,-75],[-44,-37],[-24,38],[-62,-11],[-13,31],[-59,10],[-121,-55],[-30,-47],[-51,-13],[-97,-72],[-82,7],[-52,25],[-36,40],[-45,5],[-57,-25],[-66,-57],[-123,-3],[-64,19]],[[21671,8654],[-165,106],[-61,-2],[-53,43],[-8,38],[-86,5],[-50,25]],[[21248,8869],[-59,95],[-138,15],[-64,30],[-45,67],[-3,58],[-115,7],[-59,-11],[-129,53],[-65,73],[17,36],[-148,83],[-51,-1],[-69,27],[-62,80],[-49,34],[12,33],[54,37],[154,-64],[41,50],[57,-8],[30,55],[111,-21],[41,-80],[10,-89],[43,-70],[61,-10],[85,-57],[64,-68],[59,-14],[41,28],[20,139],[-20,13],[-47,96],[60,136],[-28,79],[14,98],[107,24],[32,-36],[78,-10],[181,40],[139,52],[50,-55],[-10,-44],[85,-28],[57,-47]],[[24575,9140],[1,-93],[36,-21],[22,-140],[-5,-130],[-31,8],[-46,-35],[-35,26],[-68,-6],[2,-46],[-31,-32],[23,-80],[75,-37],[37,0],[38,-70],[-19,-104],[-68,-49],[-33,-51],[5,-34],[61,3],[19,-58],[-37,-47],[20,-33],[57,17],[117,-71],[24,-75],[-74,-73],[42,-59],[4,-38],[47,-37],[20,-49],[-44,-61],[-13,-73],[-72,39],[-84,-41],[-73,-2],[-41,-37],[2,-50],[-43,-30],[-1,-35],[-90,-135],[56,-50],[-8,-59],[54,-57],[58,-22],[23,-66],[-48,-74],[33,-6],[4,-50],[-21,-39],[-143,-97],[64,-89],[-51,-85],[13,-31],[-52,-104],[-56,-50],[-57,-19],[-37,-38],[-82,-176],[-42,11],[-2,40],[-58,28],[-78,-9],[-85,78],[-53,5],[-26,-58],[-47,23],[-1,54],[-35,59],[33,18],[23,90],[-14,44],[19,55],[-41,59],[-45,22],[14,51],[-85,13],[-64,-24],[-59,65],[-39,16],[-17,55],[14,34],[-49,57],[-69,-32],[-25,10],[-3,106],[68,46],[-3,78],[40,70],[59,39],[-43,66],[-74,14],[-66,-8],[-60,55],[-23,-12],[-32,-107],[-80,-2],[4,-49],[-31,-23],[-2,-50],[-37,-31],[-95,-33],[-28,-45],[5,-46],[-67,-27],[-45,11],[-69,-27],[-77,51]],[[22579,7029],[51,107],[114,86],[33,91],[51,68],[-28,63],[-72,28],[-28,-22],[-91,40],[-106,-39],[-50,36],[-34,57],[4,70],[-48,20],[-67,140],[-25,78],[-50,25],[1,57],[-88,47],[-29,45],[14,31],[-37,44],[2,40],[-42,23],[-52,-90],[-82,-71],[-18,-47],[-76,-51],[-55,-3],[-78,86],[-15,70],[10,45],[-151,18],[-18,56],[-35,15]],[[21484,8192],[2,47],[71,133],[-9,65],[-24,11],[2,80],[78,11],[48,48],[19,67]],[[22579,7029],[-32,-64],[-47,-42],[-220,-93],[-66,-77],[-30,0],[-43,-44],[-163,18],[-20,32],[37,62],[-35,53],[-87,7],[-34,-63],[-44,-14],[-7,-36],[-57,-34],[-99,78],[-44,62],[-43,26],[-90,-64],[-44,-114],[-105,5],[-31,37],[-69,-62],[-63,-4],[-12,-33],[-183,-22],[-105,53],[-83,71],[-22,79],[-131,-47],[-80,52],[-17,113],[48,89],[57,78],[26,74],[-16,121],[-114,69],[-2,44],[-39,71],[-53,158],[32,31],[-3,110],[55,64],[52,103],[34,5],[81,82],[62,90],[48,-3],[32,-42],[71,-47],[64,-2],[16,-52],[31,-11],[100,24],[72,-49],[43,-75],[46,27],[67,6],[46,87],[48,20],[37,68],[5,48],[28,40]],[[21865,2625],[61,-7],[25,62],[63,53],[58,4],[-17,-48],[55,-46],[135,6]],[[22245,2649],[54,-90],[-65,-81],[86,-44],[30,37],[89,26],[53,-10],[23,-36],[43,8],[58,-34]],[[22616,2425],[7,-95],[-48,-96],[2,-35],[-34,-62],[-52,-53],[-37,-63]],[[22454,2021],[-93,45],[-52,-49],[-4,-37],[31,-43],[-31,-44],[-60,-34],[-33,-40],[-4,-53],[-29,-20],[-60,7],[-82,-86],[-70,-7],[-28,-32],[-57,49],[24,53],[-39,59],[-25,76],[11,90],[-25,99],[39,68],[7,83],[-16,40],[-28,168],[16,26],[-44,53],[36,48],[27,85]],[[1294,8258],[-49,36],[-27,88],[-74,56],[-60,66],[-86,29],[-39,52],[14,40],[-97,33],[-36,-12],[-50,58],[-68,30],[-38,59],[-43,18],[-125,1],[-23,22]],[[493,8834],[51,14],[63,-11],[140,56],[91,-119],[82,-8],[44,12],[70,-9],[72,42],[100,24],[8,55],[93,73],[35,45],[115,-19]],[[1457,8989],[21,-83],[-15,-15],[59,-77],[24,-120],[-21,-47],[64,-101],[-38,-88]],[[1551,8458],[4,-57],[-55,-75],[-98,-1],[-71,-33],[-37,-34]],[[22569,4052],[-55,34],[18,71],[26,37],[60,37],[9,73],[-16,66],[-48,-4],[-85,109],[17,110],[-34,8],[-57,-35],[-89,15],[-57,-10],[-35,16],[-49,91],[-59,-36],[-49,0],[-57,67]],[[22009,4701],[53,100],[46,147],[31,24],[-17,100],[74,41],[-1,61],[35,55],[-11,67],[23,47],[-13,74],[8,47]],[[22237,5464],[34,28],[43,-20],[42,36],[38,6],[67,-36],[41,36],[111,44],[55,-7],[69,-79],[104,-57],[7,-41],[136,41],[39,-5],[18,-52],[38,-27],[85,11],[72,67],[23,5],[50,74],[-13,115],[-60,39],[51,104],[32,34],[-10,80],[29,14],[-13,70],[14,47],[45,35],[-9,94],[74,107],[95,2],[81,24],[53,55]],[[23678,6308],[47,-24],[26,58],[53,-5],[85,-78],[78,9],[58,-28],[2,-40],[42,-11],[82,176],[37,38],[57,19],[56,50],[122,84],[71,-56],[70,34],[33,-19],[-15,-53],[64,-34],[31,-87],[97,-34],[61,-49],[12,-46],[-162,-19],[-53,22],[-17,-63],[-32,-29],[11,-45],[-38,-32],[-45,8],[-36,-31],[-14,-57],[-48,-30],[-37,9],[13,-81],[71,-71],[-30,-54],[-13,-139],[80,-62],[8,-49]],[[24505,5489],[-1,-76],[-65,-73],[-33,-107],[-55,-41],[-51,-80],[-41,-30],[9,-35],[-24,-51]],[[24244,4996],[-61,-13],[-39,24],[-39,-16],[-76,1],[-47,-101],[-91,-88],[0,-34],[-88,-62],[-38,-60],[-86,18],[-62,-64],[-11,-55],[-54,-5],[-39,-28],[-16,-44],[-49,-39],[-7,-65],[-70,-71]],[[23371,4294],[-47,-68],[-48,7],[-36,-47],[-76,14],[7,42],[-126,40],[-5,70],[-25,36],[-62,3],[-9,-38],[-75,-59],[-6,-26],[-66,-41],[2,-59],[-19,-33],[-69,-17],[-66,-101],[-76,35]],[[17587,5140],[32,32],[26,69],[-22,125],[72,55],[10,38],[69,34],[59,140],[-13,80],[62,25],[-7,67],[10,72],[44,59],[-18,64],[12,54],[-47,41]],[[17876,6095],[-9,52],[30,46],[-4,83],[40,30],[22,93],[60,22],[54,112],[-7,34],[66,73],[-18,92],[66,13],[27,139],[42,43],[53,-12],[34,24]],[[18332,6939],[-22,-61],[22,-76],[25,-1],[22,-68],[7,-74],[41,-96],[49,-10],[29,-45],[-22,-68],[35,-76],[17,-111],[36,-82],[14,-103],[-10,-45],[-68,-133],[14,-76],[-51,-55],[36,-38],[-52,-83],[-55,27],[-14,-49],[-86,-33],[-64,-96],[-43,-32],[-34,-71],[12,-75],[-34,-9],[-25,-47],[4,-83],[19,-38],[-59,-51],[-37,-60],[39,-98],[-132,-23],[-66,-3],[-130,88],[-17,59],[-30,32],[-115,64]],[[4451,1756],[-24,-74],[9,-59],[-65,-39],[-37,-42],[-174,44],[-34,-16],[-45,23],[-31,-14],[-75,15],[-17,31],[-92,13],[-45,-22],[-67,56],[-119,18],[-18,63],[-56,9],[-144,52],[-65,7],[-146,-3],[-42,-36],[-112,49],[-43,48],[-52,-34]],[[2957,1845],[-82,58],[-30,41],[-95,16],[-19,35],[-109,-80],[-42,27],[-64,1],[-16,67],[-25,23],[-33,108],[41,27],[-12,101],[-51,50],[-17,76],[-59,60],[-51,14],[3,106],[-21,165],[-1,85],[-25,30],[1,47],[59,78],[22,87],[70,57],[2,-63],[47,-63],[82,-16],[74,-41],[133,-39],[74,-58],[140,-187],[28,-2]],[[2981,2655],[28,-38],[46,-12],[23,-126],[32,-38],[-33,-64],[-58,-19],[39,-71],[7,-47],[39,-13],[75,23],[43,-54],[57,18],[51,-15],[61,-67],[54,-17],[14,-70],[46,-34],[34,-53],[105,-40],[93,11],[56,-14],[18,-33],[110,-52],[72,-11],[120,-64],[93,57],[32,6],[118,-58],[60,13],[35,-17]],[[24569,3003],[-75,52],[-64,-2],[-46,86],[-15,70],[-89,101],[28,80],[-79,0],[-80,56],[-43,4],[10,62],[-49,50],[-34,3],[11,116],[-38,51]],[[24006,3732],[-4,67],[23,37],[-54,41],[-28,118],[-25,61],[64,67],[96,61],[-13,28],[59,69],[-29,27],[-1,89],[85,36],[-10,72],[91,60],[53,97],[28,103],[38,66],[27,19]],[[24406,4850],[45,-38],[97,-28],[44,4],[34,-33],[-9,-63],[46,-57],[4,-85],[32,-52],[-25,-38],[26,-51],[-7,-61],[-38,-67],[26,-45],[52,-19],[73,38],[36,-11],[30,-48],[15,-110],[27,-19],[39,-75],[-31,-48],[-9,-67],[59,-34],[30,-53]],[[25002,3790],[-39,-48],[-75,-50],[9,-24],[-33,-104],[-66,-53],[-29,14],[-46,-58],[6,-45],[84,-40],[-35,-99],[3,-32],[-50,-30],[-7,-31],[-69,-21],[-34,-72],[-6,-69],[-46,-25]],[[16847,4936],[-9,-48],[-53,-47],[-25,-92],[-122,-24],[-78,2],[-10,-28],[-67,10],[-20,45],[-48,12],[-21,38],[-97,-10],[3,-61],[-57,-16],[-65,67],[-10,72],[-30,70],[-47,-29],[-58,-8],[-64,-29],[-6,-45],[-123,126],[-40,19],[-30,128],[-63,23],[29,-67],[-19,-41],[-57,0],[-107,67],[-54,-17],[-24,-102],[-53,-36],[-142,84]],[[15280,4999],[-15,75],[57,80],[11,91],[-28,25],[37,67],[-14,37],[-162,180],[-11,116],[86,46],[75,-12],[54,11],[127,-9],[86,16],[42,21],[74,4],[18,39],[-17,172]],[[15700,5958],[41,-17],[22,78],[36,18],[-4,178],[-21,39],[5,83],[-44,114],[47,24],[34,-19],[60,-87],[87,-83],[7,-55],[35,-35],[27,-103],[23,-39],[57,-38],[21,-57],[64,-11],[55,-58],[23,1]],[[16275,5891],[8,-68],[-15,-24],[35,-62],[-5,-79],[-25,-29],[77,-140],[-23,-98],[42,-26],[-7,-40],[30,-41],[1,-43],[43,-33],[23,20],[21,74],[62,29],[67,2],[40,-75],[-58,-65],[93,-53],[35,-69],[58,-43],[-8,-69],[78,-23]],[[22237,5464],[-62,106],[-13,63],[-55,24],[-78,77],[-8,23],[-66,29],[-58,51],[-14,61],[-8,119],[-81,32],[-24,66],[-24,128],[70,60]],[[21816,6303],[90,-54],[95,93],[1,58],[41,17],[44,95],[11,55],[-12,64],[15,79],[40,-1],[43,44],[30,0],[66,77],[220,93],[81,95],[75,-40],[69,27],[45,-11],[67,27],[-5,46],[28,45],[95,33],[37,31],[2,50],[31,23],[-4,49],[80,2],[32,107],[23,12],[60,-55],[66,8],[74,-14],[43,-66],[-59,-39],[-40,-70],[3,-78],[-68,-46],[3,-106],[25,-10],[69,32],[49,-57],[-14,-34],[17,-55],[39,-16],[59,-65],[64,24],[85,-13],[-14,-51],[45,-22],[41,-59],[-19,-55],[14,-44],[-23,-90],[-33,-18],[35,-59],[1,-53]],[[110,9420],[42,-23],[52,18],[122,-116],[71,-43],[7,-48],[52,-47],[89,3],[27,32],[38,-32],[-76,-68],[-63,-72],[-86,18],[-95,88],[-62,116],[-71,44],[-58,9],[-26,-26],[-65,-18],[-8,43],[81,32],[29,90]],[[5151,9340],[-33,49],[-7,57],[-27,30],[-81,-2],[-44,19],[-15,60]],[[4944,9553],[69,13],[2,77],[24,35],[-34,47],[38,56],[-15,51],[8,67],[138,5],[37,-24],[67,6],[152,73],[14,-45],[78,-60],[87,45],[80,-13],[67,63],[138,-42],[56,24],[39,-12],[11,-44],[67,-35],[54,3],[30,-43],[47,19],[53,62],[76,9],[53,-35],[19,-45]],[[6399,9810],[9,-82],[-114,-128],[-10,-57],[79,2],[-1,-70],[26,-56],[-30,-59],[-92,-23],[-74,27],[-19,-90],[36,-39],[2,-36],[106,-28],[6,-64],[-74,24],[-44,-19],[-126,42],[-22,-46],[-66,-26],[-39,41],[-65,8],[-50,56],[-25,-25],[-69,-15],[-8,-32],[-86,-11],[-60,33],[-84,80],[-67,20],[-108,-51],[-43,58],[-47,32],[-56,11],[-33,53]],[[4742,3957],[21,53],[-78,25],[-61,51]],[[4624,4086],[15,152],[27,63],[42,29],[49,110],[-23,47],[-91,28],[-8,26],[64,70],[-14,49],[-42,55],[-6,54],[-102,55],[-17,48],[8,62],[-76,58],[-37,47],[11,128],[-40,63],[-105,4],[-63,41],[-16,47],[-50,15],[-14,31],[-78,16],[-70,-2],[-40,50]],[[3948,5432],[25,77],[-6,40],[-94,66],[-116,56],[-24,150],[-31,16],[-31,-34],[-74,26],[-33,94],[-69,-5],[-42,-31],[-81,22],[13,62],[34,9],[21,51],[-29,95],[87,120],[-47,57],[-62,21],[5,46],[-47,27],[-25,69],[-64,57],[-24,74],[-46,42]],[[3188,6639],[45,90],[-13,33],[24,47],[65,61]],[[3309,6870],[96,-108],[76,-53],[116,-41],[102,0],[101,-41],[82,-64],[105,-39],[112,-14],[43,15],[111,9]],[[4253,6534],[1,-2]],[[4254,6532],[24,-34],[-11,-78],[-48,-32],[-4,-92],[31,-82],[29,-16],[96,-5],[64,-21],[79,-4],[33,-37],[-5,-68],[33,-45],[6,-89],[47,-13],[59,-55],[24,-67],[47,-40],[91,-9],[137,-80],[69,-16],[192,-199],[31,-9],[6,-50],[-27,-52],[36,-91],[57,-2],[139,-42],[40,-49],[28,-120],[70,-12],[18,15]],[[5645,5038],[7,-30],[-53,-35],[-44,-55],[37,-76],[-74,-35],[-45,-66],[29,-38],[-13,-50],[84,-57],[20,-39],[77,-9],[22,-27],[48,12],[33,-41]],[[5773,4492],[14,-124],[52,-152],[42,24],[38,-52],[3,-48],[81,-54],[-50,-42],[-29,-48],[-12,-69],[23,-38],[-58,-97],[-72,-8],[-60,-34],[-10,-31]],[[5735,3719],[-64,49],[-54,-16],[-89,9],[-59,-19],[-50,55],[-54,-21],[-60,11],[-71,79],[-47,26],[-72,-57],[-43,-79],[-24,33],[-101,-27],[-39,44],[0,101],[18,53],[-184,-3]],[[2627,7623],[-16,53],[13,54],[-21,69],[20,41],[-53,60],[-148,98],[16,56],[-102,37],[-54,44],[10,27],[-72,48],[-41,80],[-72,-14],[-45,23],[-108,128],[-52,37],[-49,-3],[-28,26],[-67,0],[-13,-59],[-34,6],[-34,-56],[-65,9],[-61,71]],[[1457,8989],[41,-53],[96,-69],[11,-71],[23,-36],[97,-89],[163,-24],[60,2],[64,-23],[110,27],[56,94],[60,57],[69,-34],[98,-22],[60,3],[68,-38],[88,-109],[117,-31],[66,-65],[131,-63],[35,-39],[33,-74],[26,-118]],[[3029,8214],[-59,33],[-72,1],[-62,-34],[-106,-36],[-42,-39],[1,-68],[26,-47],[2,-82],[20,-71],[-9,-50],[43,-171],[-46,-38],[-98,11]],[[3043,8265],[-12,58],[23,30],[-26,99],[-80,42]],[[2948,8494],[48,8],[-7,46],[-54,59],[2,65],[53,60],[66,23],[59,-36],[94,17],[28,37],[-14,45],[22,66],[98,-6],[43,32]],[[3386,8910],[55,57],[92,-17],[73,46]],[[3606,8996],[51,-48],[86,6],[46,-38],[84,-8],[53,-51],[107,-15],[83,-57],[1,-44]],[[4117,8741],[0,-64],[-31,-54],[-46,14],[-38,-43],[-55,20],[-57,-15],[-66,27],[-25,-16],[-73,24],[-82,-6],[-88,-43],[17,-33],[-86,-73],[14,-71],[-40,-32],[-78,27],[-50,41],[-141,-34],[-51,-64],[-86,10],[-12,-91]],[[7516,3453],[-16,126],[34,17],[45,57],[3,42],[40,61],[0,34],[94,38],[-31,45],[-28,80],[-50,25],[6,43],[-33,22],[-70,-12],[-8,66],[-123,37],[-31,54],[8,37],[-21,52],[-43,27],[-7,104],[-43,36],[-108,-9],[-17,-27],[-69,25],[20,67],[-32,61],[-59,-17],[-65,79],[-19,49],[17,44],[-55,15],[-63,50],[-69,4],[-76,20],[-72,38],[-51,0],[-42,102],[-36,-18],[-230,11],[-79,17],[-6,-61]],[[6131,4894],[-50,16],[-21,-25],[-38,63],[-10,72],[-30,18],[-64,123],[1,48]],[[5919,5209],[100,56],[59,49],[14,63],[-40,46],[41,99],[-27,105],[-31,47],[6,137],[13,19]],[[6054,5830],[31,-66],[4,-80],[79,-64],[43,-54],[58,1],[17,-51],[42,-9],[33,84],[39,35],[34,64],[60,26]],[[6494,5716],[26,-32],[59,-8],[67,27],[59,51],[41,4],[38,35],[72,-16],[52,8],[55,-21],[129,-23],[46,-35],[76,32],[50,6],[49,35],[40,-78],[46,-57],[24,12],[113,-53],[38,-50],[77,17],[66,36],[-37,163],[67,74],[37,58],[22,-3],[155,122],[16,85],[65,53],[44,70],[-42,148],[21,95],[-35,17],[-9,52],[36,21],[-2,83],[-95,105]],[[7960,6749],[54,37]],[[8014,6786],[100,3],[61,-76],[15,-56],[57,-42],[6,-26],[56,-41],[3,-133],[84,-42],[9,-21]],[[8405,6352],[10,-27],[-29,-53],[34,-32],[-86,-50],[15,-46],[-33,-33],[-17,-115],[32,-25],[22,-126],[-24,-30],[20,-68],[-36,-73],[115,-78],[38,-73],[56,-51],[129,-30],[16,-56],[5,-130],[-12,-48],[-48,-58],[23,-43],[1,-70],[45,-65],[-36,-19],[-26,-55],[79,-102],[20,-76],[-50,-51],[26,-50],[-27,-47],[-36,-14],[-38,-52],[-33,-13],[-123,23],[-55,-27],[17,-37],[104,-83],[21,-83],[35,-16],[46,24],[43,-10],[57,37],[23,-19],[51,14],[16,-31],[-9,-61],[49,-14],[0,-91],[17,-55],[-29,-44],[11,-37],[-58,-103],[13,-27],[-38,-52],[-9,-47],[17,-119],[28,-45],[-47,-50],[-19,-49],[92,-120],[18,-79],[61,-64],[68,-9],[62,-58],[27,-69],[43,-29],[-15,-83],[62,-56],[-59,-57],[-20,-63],[22,-65],[-45,-42]],[[9037,2697],[-38,-15],[-30,-56],[-99,6],[-81,57],[-108,-2],[-80,19],[-61,-11],[-25,19],[-129,-2],[-94,71],[-117,-31],[-27,-30],[-43,36],[-65,-6],[-34,-43],[-103,-2],[-12,49],[-117,49],[-11,76],[-26,21],[1,61],[-37,8],[-43,59],[-68,158],[-48,37],[7,160],[-33,68]],[[5773,4492],[61,19],[7,81],[32,8],[71,-22],[132,125],[73,-4],[19,82],[-37,113]],[[7516,3453],[-83,60],[-56,59],[-22,67],[-33,20],[-83,-35],[-25,-50],[5,-45],[-83,-90],[-39,-13],[-115,16],[-31,-17],[-59,5],[-49,-32],[-124,16],[-28,56],[-53,19],[33,107],[3,50],[-22,36],[-146,-50],[-88,25],[-63,-15],[-27,17],[-58,-9],[-86,-53],[-76,-3],[-38,31],[-46,-3],[-54,21],[-99,-47],[-115,53],[-21,70]],[[25748,1372],[-34,-72],[-76,-27],[-102,-51],[-32,-53],[-13,-187],[-99,-36],[-14,-54],[-47,-93],[-43,-32],[-40,-68],[-59,21],[-38,-64],[-92,-34],[-69,-48],[-37,-3],[-21,79],[-45,16],[-57,-105],[-60,-10],[-33,-78],[-29,-8],[12,-78],[-44,-15],[-121,18],[-28,30],[-68,-26],[4,-47],[-23,-36],[14,-43],[-38,-65],[-86,-5],[-48,24],[-12,36]],[[24270,258],[6,53],[-59,68],[-69,33],[-38,50],[-3,74],[-26,59],[-57,51],[-71,-9],[-8,39],[26,39],[69,9],[18,35],[-11,43],[78,40],[17,50],[45,23],[-2,35]],[[24185,950],[42,37],[-23,36],[18,40],[-13,44],[-48,23],[-4,30],[28,79],[47,13],[15,35],[74,14],[-5,33],[51,79],[52,15],[72,-11],[122,50],[25,-12],[47,95],[70,32],[74,-101],[65,3],[43,53],[-11,145],[6,77],[56,-8],[108,26],[49,31],[136,8],[4,45],[55,95],[26,8],[30,-56],[47,-49],[5,-72],[96,-58],[23,-112],[41,-58],[36,-5],[58,-46],[-14,-95],[60,-41]],[[4320,7176],[12,72],[-59,70],[-39,102],[17,53],[-56,-4],[-57,33],[-35,-17],[-17,-50],[-62,-17],[-68,50],[-32,-6],[-47,-87],[-73,-10],[-73,-37],[-135,-10],[23,-45],[-70,-31],[-7,36],[-64,56],[-16,41],[-47,25],[-29,50],[-34,20],[-28,54],[-40,37],[5,31]],[[3289,7592],[93,-26],[32,-46],[42,-21],[-9,-35],[66,-42],[29,42],[-68,108],[-30,1],[-16,65],[62,134],[49,20],[83,-17],[67,41],[123,10],[28,-56],[155,48],[96,-107],[113,-18],[40,-24],[31,31],[62,2],[33,23],[84,-5],[33,-50]],[[4487,7670],[4,-78],[44,-20],[82,-10],[1,28],[98,53],[51,-4],[89,-49],[43,5],[22,37],[115,-75]],[[5036,7557],[34,-57],[-20,-47]],[[5050,7453],[-44,-52]],[[5006,7401],[-67,-40],[-47,22],[-57,-79],[-49,-116],[-45,25],[-64,4],[-105,-123],[-32,-14],[-64,28],[-80,-36],[-76,104]],[[1976,8739],[-4,-42],[-100,42],[-88,101],[-53,26],[-27,86],[-54,66],[-31,7],[-33,68],[-72,45],[-82,7],[-52,-23],[-56,0],[-64,-21],[-93,1],[-168,19],[-25,19],[-12,126]],[[962,9266],[40,-19],[87,31],[87,48],[147,25],[27,-31],[45,35],[14,58],[42,6],[100,63],[88,-37],[122,29],[55,-18],[86,54],[8,34]],[[1910,9544],[68,2],[15,38],[50,0],[45,25],[81,11],[48,-32],[59,-65],[-37,-39],[19,-45],[-16,-67]],[[2242,9372],[-74,-26],[-13,-52],[-72,-56],[15,-49],[-78,-119],[-31,-93],[4,-91],[-93,-87],[12,-36],[64,-24]],[[9251,14196],[-42,46],[-12,43],[-42,33],[-40,88],[-63,93],[-2,105],[-61,107],[-72,76],[-23,78],[-51,65],[-3,50],[-40,85],[-14,74],[-45,78],[-25,2],[1,75],[46,-4],[-1,73],[-45,-32],[-47,54],[21,22],[-39,84],[-56,31],[-62,70],[-8,54],[-43,69],[-3,81],[-56,63],[-58,25],[-40,94],[-14,77]],[[8312,16055],[55,34],[110,10],[40,24],[84,-36],[30,-66],[48,-39],[108,-54],[42,-55],[239,-171],[-18,-114],[86,-24],[23,-70],[75,-22],[38,-35],[67,-25],[0,-95],[-12,-35],[84,-43],[6,-36],[119,-108],[29,-43],[-11,-53],[60,-39],[39,6],[65,-54],[-23,-49],[46,-92],[-8,-101],[-26,-37],[28,-67],[-15,-74],[47,-69],[14,-63],[36,-45],[-6,-63],[-55,-79],[-78,-10],[-49,-34],[-55,-77],[-88,-5],[-43,40],[-74,-1],[-91,66],[-27,44]],[[6494,5716],[31,65],[30,164],[-22,62],[-63,53],[1,80],[27,39],[-18,37],[20,43],[81,54],[31,97],[35,64],[11,55],[-46,112],[25,169],[-15,112],[22,50]],[[6644,6972],[75,-10],[69,24],[82,-14],[72,0],[37,-61],[4,-68],[47,-84],[96,88],[59,28],[53,-90],[53,32],[21,-35],[-72,-16],[-9,-82],[73,-16],[52,20],[20,-120],[77,41],[68,100],[74,40],[53,57],[167,6],[74,-23],[71,-40]],[[17363,6703],[-107,72],[-22,-34],[-86,11],[-38,78],[-57,18],[-44,63],[-71,37],[-37,37],[-39,-16],[-8,59],[-53,-6],[-95,11],[-117,59],[-27,41],[-91,2],[-59,-24],[-36,67],[-33,-19],[-74,61],[-23,-48],[-31,7],[-94,-44],[-49,-9]],[[16072,7126],[-28,12],[-13,62]],[[16031,7200],[-126,156],[19,120],[29,43],[37,154]],[[15990,7673],[24,9],[131,142],[56,47],[116,35],[48,30],[110,0],[36,26],[14,-80],[160,-28],[19,-35],[121,19],[36,46],[67,51],[-17,52],[-82,-3],[-20,53],[-48,25],[-53,68],[-12,88],[43,56],[53,19],[13,44],[91,69],[14,80],[25,35],[-41,66]],[[16894,8587],[42,52],[75,-2],[166,-88],[48,27],[59,-33],[93,-31],[39,29],[74,11],[53,-30],[55,26],[37,-5],[79,61],[12,65],[120,49],[59,46],[50,166],[-25,93],[9,96],[-11,35],[43,59],[13,84],[-8,58],[-30,46],[-62,-15],[-66,11],[-34,41],[9,83],[78,29],[-1,55],[85,21],[22,64],[32,3],[22,-56],[32,-25],[4,-60],[84,-33],[36,-41],[36,19],[148,-26],[87,-113],[-28,-28],[-1,-98],[-25,-37],[35,-106],[8,-204],[30,-9],[9,-104],[58,-64],[33,12],[79,-34],[-115,-98],[6,-34],[-60,-32],[-6,-90],[-67,6],[-29,41],[-58,0],[-55,-28],[-84,17],[-52,-37],[24,-110]],[[18160,8321],[-90,10],[-30,-44],[-87,-56],[-56,3],[-85,-47],[-76,-62],[-79,-44],[-16,-62],[-39,-73],[-36,-32],[-41,-77],[-70,-11],[0,-33],[-43,-34],[7,-74],[-18,-28],[4,-120],[23,-103],[-24,-63],[5,-96],[-32,-51],[1,-50],[27,-30],[-36,-215],[18,-45],[-19,-55],[-5,-126]],[[15700,5958],[-6,-38],[-80,-37],[-23,66],[-61,27],[-114,-6],[-141,60],[16,48],[-18,90],[-30,40],[6,81]],[[15249,6289],[-12,68],[-39,106],[6,62],[-28,238],[15,75],[127,152],[60,41],[8,30],[59,-14],[35,41]],[[15480,7088],[72,48],[91,19],[67,0],[61,35],[73,11],[10,-49],[57,-95],[17,101],[71,11],[32,31]],[[16072,7126],[-36,-51],[31,-60],[56,-177],[0,-56],[26,-57]],[[16149,6725],[-31,-30],[57,-137],[-41,-59],[32,-28],[45,-103],[14,-60],[56,-67],[-71,-110],[12,-76],[57,-105],[-4,-59]],[[14896,4301],[-81,-2],[-27,27],[-154,80],[-148,-38],[-53,-47],[-36,9],[7,62],[-83,32],[-71,52],[-36,-19],[-32,60],[-23,94],[-85,45],[-11,26],[22,94],[-66,65],[-39,16],[-14,64],[69,71],[31,-12],[35,38],[52,-3],[19,106],[-39,36],[-34,-6],[-134,80],[-35,51],[-71,-23],[-164,119],[-67,83]],[[13628,5461],[36,119],[40,26],[43,-17],[32,41],[54,32],[54,-13],[38,60],[-2,44],[51,17],[25,39],[-17,48],[40,13],[126,-19],[52,-72],[21,-59],[58,20],[43,-9],[44,79],[66,-10],[24,134],[-11,126],[108,4],[14,36],[86,-25],[31,34],[55,-40],[2,-60],[91,20],[114,5],[45,87],[40,21],[-4,50],[71,21],[10,53],[75,4],[66,19]],[[15280,4999],[-127,24],[-45,-47],[46,-37],[8,-77],[-99,-144],[-106,-17],[-27,-130],[-21,-46],[6,-135],[-19,-89]],[[962,9266],[-16,22],[20,78],[93,102],[7,46],[65,102],[17,66],[70,130],[44,52],[40,-29],[93,14],[28,47],[76,16],[67,34],[156,-34],[53,-98],[48,-164],[1,-60],[86,-46]],[[6054,5830],[-73,75],[-99,34],[-25,-3],[-58,63],[-30,59],[0,70],[-99,84],[-61,136]],[[5609,6348],[33,27],[96,140],[42,3],[2,44],[47,22],[-21,49]],[[5808,6633],[49,56],[3,90],[52,38],[121,42],[68,44],[37,-28],[73,-10],[123,65],[50,65],[132,46],[15,52]],[[6531,7093],[56,-62],[31,-63],[26,4]],[[17364,4976],[44,18],[45,-32],[52,94],[21,89],[61,-5]],[[18332,6939],[102,46],[36,100],[16,136]],[[18486,7221],[63,27],[9,56],[64,38],[36,101],[26,19],[107,-50],[42,-71],[1,-33],[43,-106],[25,-23],[16,-84],[68,-35],[1,-35],[126,-182],[1,-61],[40,-121],[-45,-101],[-47,-65],[-48,-30],[7,-81],[-13,-97],[-39,-59],[10,-60],[-35,-34],[-21,-87],[-108,-68],[-60,-100],[7,-78],[24,-34],[-5,-74],[17,-29],[-21,-81],[-53,-59],[-29,-77],[20,-29],[-20,-52],[13,-80],[-24,-25],[6,-99],[-44,-41],[-46,17],[-24,-83],[-68,-55],[10,-46],[-45,-90],[19,-41],[-23,-29],[-42,20],[-15,57],[-36,7],[-49,-57],[-64,-20],[-55,19],[-140,8],[-37,-46],[-102,-28],[-28,-39],[-69,-8],[-42,37],[-66,20],[-79,-37],[-44,10],[-37,-26],[-62,6],[-57,-44],[-59,-4],[-49,41],[48,120],[-21,43],[0,103]],[[11093,1995],[-78,2],[-77,56],[-28,-10],[-49,48],[-58,-24],[-50,50],[17,38],[-13,71],[-90,91],[4,106],[-106,49],[-65,-2],[-77,-37],[-65,-3],[-46,-35],[-122,72],[-37,-66],[-58,-56],[-55,-10],[-47,40],[-54,95],[-46,-19],[-117,6],[-4,38],[-58,15],[-83,-57],[-68,5],[-37,62],[-35,15],[-16,93],[-55,-13],[-74,39],[-93,-62],[-70,2],[-64,62],[-82,41]],[[8405,6352],[113,38],[51,-1],[104,70],[151,64],[-4,100],[49,-8],[37,20],[64,-5],[50,38],[22,-31],[56,-25],[42,18],[70,-46],[79,32],[49,3],[4,-51],[79,54],[-3,29],[76,39],[98,79],[58,-51],[5,-35],[97,-38],[15,-34],[67,24],[24,-50],[-15,-24],[22,-57],[69,-67],[23,-76],[45,4],[2,-87],[31,-39],[169,-140],[63,-41],[4,-63],[66,-64],[22,-49],[36,-9],[-5,-50],[42,-67],[151,-92],[50,-42],[12,-96],[38,-64],[-37,-79],[27,-60],[95,-51],[45,38],[81,-23],[90,0],[37,-22],[51,-90],[54,-49],[124,-48],[49,-115],[43,-16],[42,-45],[77,-16],[97,27],[66,-30],[10,-29],[71,-7]],[[11705,4847],[9,-42],[-31,-60],[-77,-61],[-69,23],[-61,-146],[-83,22],[-119,-51],[-62,13],[-22,-49],[-71,-24],[-33,25],[-71,-34],[-17,-40],[43,-58],[97,-56],[101,-75],[-10,-68],[37,-49],[41,-20],[15,-61],[73,-39],[91,9],[31,-34],[-16,-125],[-74,-57],[-30,-8],[-88,-115],[-9,-46],[29,-69],[31,15],[53,-80],[42,-26],[62,-117],[2,-76],[-53,-44],[9,-73],[65,-8],[53,-76],[26,-63],[67,-12],[61,-45],[77,-11],[-7,-41],[18,-51],[55,-45]],[[11890,2799],[-67,-110],[-56,-3],[-38,-54],[-83,-38],[-58,-77]],[[11588,2517],[-76,-12],[-18,-49],[3,-82],[-66,-70],[-17,-153],[-58,3],[-16,-33],[-75,38],[-27,-6],[-15,-55],[-59,62],[-18,41],[-80,-32],[2,-57],[25,-117]],[[14442,2414],[-60,-6],[-89,47],[-23,46],[-116,93],[-46,-22],[-24,20],[-47,104],[-47,22],[2,80],[-81,48],[2,70],[-128,0],[-61,36],[-56,61],[-71,-75],[-43,-64],[-77,-75],[-94,-42],[-46,41],[-29,-27],[-46,25],[-4,74],[-70,46],[-67,0],[-52,-22],[-21,34],[-56,-14],[-46,22]],[[12946,2936],[-25,37],[47,77],[-87,67],[-56,119],[-108,4],[-76,28],[-169,83],[-87,-2],[-47,-28],[-47,-2],[-40,187],[-30,46],[40,337],[-31,31],[-45,0],[-46,-27],[-27,37],[-55,21],[-6,66],[74,63],[37,-6],[34,66],[60,22],[46,80],[104,12],[22,37],[63,13],[26,44],[168,2],[26,10],[114,-20],[30,-34],[-28,-88],[42,-28],[22,-53],[65,17],[26,-39],[81,-33],[39,-65],[-28,-50],[22,-46],[73,45],[12,71],[91,-4],[23,-16],[6,-101],[59,-4],[21,21],[64,-26],[38,-66],[80,-47],[69,-71],[49,16],[59,-33],[54,-76],[8,-98],[33,-42],[62,-22],[18,-54],[47,54],[90,-31],[54,-34],[86,-31]],[[14192,3372],[4,-49],[34,-84],[81,-49],[67,-25],[55,18],[38,-43],[91,11],[80,-53],[4,-55],[58,-42],[32,-71],[-27,-67],[-58,-11],[-49,-106],[-32,-21],[-8,-84],[43,-86],[-7,-46],[-37,-46],[-60,-6],[-59,-43]],[[11705,4847],[81,-2],[46,32],[79,0],[33,66],[46,25],[47,80],[32,17],[80,5],[158,93]],[[12307,5163],[75,-6],[93,65],[52,-32],[52,15],[158,-25],[6,42],[42,38],[49,2],[64,79],[47,13],[41,40],[24,62],[29,-22],[31,49],[39,12],[91,-78],[35,-45],[85,3],[18,45],[71,42],[72,16],[64,-24],[83,7]],[[14896,4301],[-1,-46],[55,-33],[-36,-104],[32,-123],[-30,-50],[-80,28],[-71,-23],[5,-38],[-62,-66],[17,-44],[39,-25],[-9,-72],[42,-95],[-6,-73],[-103,-34],[-102,20],[-37,-11],[-42,-67],[-54,4],[-20,-31],[-47,20],[-44,-56],[-87,16],[-63,-26]],[[12946,2936],[-53,-17],[-47,76],[-63,13],[-29,-99],[-44,10],[-64,-13],[-12,-101],[-29,-44],[-49,19],[-163,20],[-117,-23],[-27,24],[-60,-4],[-24,21],[-98,34],[-85,-55],[-80,-22],[-12,24]],[[11588,2517],[44,-55],[51,-22],[10,-81],[32,-58],[-4,-44],[69,-45],[16,-57],[135,-42],[22,-30],[84,-14],[41,-68],[54,-62],[94,-34],[66,83],[1,26],[124,-16],[-4,-90],[56,-86],[114,8]],[[12593,1830],[-20,-78],[-146,-82],[-32,13],[-102,-51],[-28,-39],[-29,-204],[26,-75],[79,-79],[-6,-55],[81,-88],[2,-57],[32,-72],[27,-21],[-7,-86],[11,-45],[-29,-130],[-27,-38],[-42,-129],[-28,-29],[-80,23],[-29,-40],[-73,-53],[-45,45],[-17,72],[-72,-72],[-46,-10],[-51,12],[0,66],[-57,26],[-10,47],[-43,-9],[-139,43],[-24,89],[-72,43],[2,52],[-36,30],[-15,94],[-106,73],[4,65],[-26,39],[13,34],[-17,84],[-19,25],[-125,21],[-21,41],[58,93],[-7,25],[72,88],[-36,95],[-37,37],[-1,71],[-31,50],[2,62],[-35,40],[-16,57],[-127,52]],[[14442,2414],[8,-50],[-40,-93],[-2,-36],[65,-69],[-62,-39],[-17,-63],[-42,-17],[-31,-43],[2,-48],[-27,-21],[-30,-98],[-36,-74],[-5,-57],[-46,-30],[-64,-14],[-37,19],[-68,149],[-48,-3],[-51,50],[-45,-8],[-45,-49],[-69,14],[-48,-21],[-28,-41],[0,-60],[-33,-88],[-40,-40],[-96,-47],[-80,-25],[-40,-45],[-31,27],[-49,-13],[-34,46],[-122,24],[-59,71],[-98,59],[-47,46],[-74,96],[-42,-13],[-51,35],[-45,-40],[-22,29],[-83,35],[-37,-39]],[[17876,6095],[-16,-61],[-44,-5],[-44,52],[-22,53],[-73,11],[-34,-38],[-74,38],[-27,68],[-28,-22],[-34,109],[-5,111],[-18,69],[14,47],[-20,125],[-88,51]],[[18160,8321],[-2,-115],[-17,-81],[43,-66],[2,-71],[17,-65],[43,-22],[-6,-63],[-25,-10],[-27,-100],[44,-51],[32,-180],[-8,-47],[44,-23],[44,-64],[64,-11],[29,-77],[39,-12],[10,-42]],[[3277,7602],[3,66],[-22,60],[-41,58],[0,61],[29,24],[13,79],[-104,96],[-42,77],[-19,60],[-51,82]],[[4117,8741],[123,48],[23,-22],[47,19],[50,49],[70,-9],[72,-70],[36,-54],[220,156]],[[4758,8858],[28,-20],[-70,-114],[-46,-38],[-2,-43],[-66,-9],[-35,-38],[-47,-88],[-29,-8],[-3,-68],[-27,-34],[-101,11],[-14,-25],[-98,-17],[-13,-52],[-41,-63],[-46,47],[-87,6],[-26,-48],[-66,-14],[-52,20],[-66,-101],[-76,8],[-35,-31]],[[3740,8139],[-52,6],[-30,-50],[-4,-43],[-64,-43],[-67,12],[-23,33],[-108,-8],[2,-74],[-18,-114],[-33,-131],[-59,-61],[-7,-64]],[[8052,6957],[-80,26],[-30,-8],[-74,29],[-92,8],[-60,-25],[-48,37],[-132,52],[-27,-28],[-60,-6],[-67,-28],[-131,-25],[-54,9],[-41,29],[-67,-10],[-48,94],[18,108],[-82,147],[40,54],[-9,42]],[[7008,7462],[44,37],[12,76],[50,77],[77,61],[46,80],[-18,63],[-91,14],[-2,56],[-27,17],[-34,-68],[-63,-8],[-22,-32],[-147,-114],[-79,24],[-80,72],[14,55],[-9,89],[18,43],[-19,54],[28,24],[33,87],[35,17],[-22,62],[-5,123],[-28,30],[11,63],[-6,82],[-59,110],[-47,106],[-38,121]],[[6580,8883],[52,63],[-12,71],[19,177],[-55,87],[-62,161],[29,18],[41,114],[50,21],[18,-23],[102,11],[63,-12],[21,79],[-53,70],[-21,111],[-53,59],[34,62]],[[6753,9952],[38,-16],[85,-95],[20,20],[124,-47],[58,8],[79,48],[-18,26],[50,67],[112,60],[39,-38],[103,-38],[26,-56],[47,-27],[13,-90],[60,-40]],[[7589,9734],[2,-64],[29,-102],[-81,-40],[-48,-79],[-91,-48],[-26,-83],[37,-37],[-7,-51],[106,-94],[-39,-41],[39,-44],[54,-17],[109,-124],[143,2],[43,18],[170,-47]],[[8029,8883],[27,-65],[55,-60],[33,-2],[10,-56],[-29,-57],[-2,-180],[35,-64],[7,-50],[41,-18],[11,-153],[30,-47],[48,-15]],[[8295,8116],[-9,-155],[-25,-41],[0,-96],[43,-145],[-18,-25],[-6,-85],[39,-43],[91,7],[15,24],[82,17],[12,19],[102,-41],[-31,-31],[9,-88],[20,-23],[-17,-75],[28,-23],[9,-63],[-35,-47],[-77,-21],[-144,-1],[-55,19],[-34,-24],[-47,-71],[14,-38],[-107,-40],[-42,-48],[-60,-21]],[[2948,8494],[-31,0]],[[2917,8494],[60,30],[-14,33],[-50,32],[17,94],[-66,52],[-36,70],[3,68],[-31,20],[1,47],[-39,23],[-102,33],[-95,146],[4,48],[-41,7],[-68,191],[-68,15]],[[2392,9403],[-32,94],[52,63],[94,7],[-14,34],[56,49],[-25,66],[17,72],[51,91],[64,21],[46,43],[-9,38],[-78,92],[-7,45],[91,25],[138,-44],[211,103],[102,12],[27,-29],[84,-44],[41,4],[47,40],[55,-12],[179,49],[80,42],[43,68],[100,4],[96,52],[7,99],[27,40],[38,-5]],[[3973,10522],[12,-33],[-19,-75],[-54,-50],[-1,-53],[-59,-41]],[[3852,10270],[-49,-53],[-10,-51],[-48,-91],[16,-107],[31,-39],[59,-4],[48,-47],[-1,-25],[77,-44],[39,-64]],[[4014,9745],[-117,-60],[-81,8],[-28,-99],[-100,15],[-12,-30],[-94,-37],[-40,-39],[-109,-29],[-39,41],[-37,0],[-52,37],[-63,-41],[-40,-8],[-28,29],[-36,-12],[-56,38],[-14,-51],[-64,-84],[-46,-11],[-1,-57],[-24,-23],[-3,-55],[79,-16],[34,17],[63,-12],[-47,-103],[66,-57],[29,-55],[27,7],[70,-30],[23,-29],[52,-4],[60,-85]],[[27109,2421],[-49,47],[-81,2],[-53,56],[0,87],[23,69],[52,13],[11,56],[-45,17],[-15,75],[-84,-50],[-23,31],[-48,2],[-40,55],[15,34],[-35,78],[16,45],[-81,107],[-55,-17],[-8,58],[-97,38],[-29,28],[-90,-19],[-74,38],[-71,-57],[-47,75],[-7,73],[35,35],[-48,104]],[[26181,3501],[-15,69],[-31,61],[-30,20],[-29,93],[50,57],[-13,105],[26,23],[25,71],[63,9],[62,100],[-20,60],[-36,53],[16,41],[-10,48],[-41,42],[10,97],[-77,152],[61,122],[32,115],[-22,49],[13,39],[-103,82],[-78,144],[-96,-11],[-35,20],[-49,-5],[-30,43],[-91,74],[-16,46]],[[25717,5320],[23,63]],[[25740,5383],[9,49],[33,48],[30,86],[-12,54],[-33,33],[-15,110],[2,114],[33,75],[87,51],[21,43],[59,17],[37,82],[56,-16],[29,15],[67,-41],[45,45],[42,-86],[69,8],[87,-42],[-45,-39],[3,-33],[69,-17],[38,-40],[8,-128],[-23,-44],[5,-63],[50,-42],[13,-43],[88,-108],[-33,-13],[19,-71],[46,-23],[45,-46],[31,-80],[96,-76],[26,-56],[-3,-77],[60,-48],[-24,-45],[69,-66],[99,11],[12,-31],[-42,-57],[91,-63],[6,-42],[63,5],[21,-21],[-7,-77],[16,-67],[27,-45],[-23,-34],[8,-142],[-53,-43],[-41,7],[-47,-30],[20,-70],[45,-56],[-12,-46],[30,-17],[29,-93],[68,-40],[16,-45],[76,-21],[93,-60],[40,-132],[157,102],[83,39],[25,-33],[72,-17],[51,-36],[26,-47],[123,-52],[-17,-46],[93,-115],[-3,-85],[53,-80],[37,-21],[5,-107],[36,-45],[-1,-51],[-50,-27],[-43,-60],[67,-50],[-13,-27],[72,-44],[-17,-82],[100,-68],[-26,-80],[-25,-30],[53,-94],[0,-57],[-21,-59],[-52,23],[-21,49],[-31,8],[-44,-41],[-104,-21],[-48,-25],[-62,2],[-155,-30],[-152,-75],[-39,-66],[-88,120],[-75,86],[-16,58],[-67,72],[-107,-50],[-34,-45],[-92,-33]],[[5162,7161],[32,6],[93,-60],[71,-22],[5,-75],[77,-98],[11,-52],[33,-42],[83,-30],[70,-11],[119,-162],[52,18]],[[5609,6348],[-62,-3],[-33,27],[-28,86],[-74,3],[-48,-20],[-1,68],[-102,51],[-62,-118],[-89,-13],[-33,-25],[-67,15],[-71,-14],[-33,-28],[-59,16],[-43,-51],[-60,-9],[-62,38],[-29,40],[-120,4],[-49,-21],[-48,3],[-115,49],[-9,72],[-58,14]],[[4253,6534],[-2,50]],[[4251,6584],[84,24],[94,-10],[8,51],[124,71],[118,-68],[66,-58],[90,65],[137,116],[35,72],[7,69],[39,54],[59,19],[-9,44],[40,50],[19,78]],[[15480,7088],[-19,82],[-52,68],[-53,-15],[-51,82],[-53,-7],[-25,80]],[[15227,7378],[38,-25],[96,-27],[44,-1],[11,144],[46,56],[96,23],[30,39],[26,76],[44,22]],[[15658,7685],[14,-16],[105,-36],[102,18],[3,47],[51,-23],[57,-2]],[[23451,2361],[-101,32],[-25,101],[26,15],[-25,93],[-43,46]],[[23283,2648],[18,100],[69,63],[11,47],[52,72],[-7,27]],[[23426,2957],[47,33],[38,78],[47,25],[46,-4],[28,52],[-10,72],[-30,98],[-41,28],[22,32],[-21,119],[32,26],[61,106],[54,123],[61,-3],[53,15],[47,-29],[45,11],[34,-26],[67,19]],[[24569,3003],[-31,-78],[-119,-130]],[[24419,2795],[-58,-53],[-58,12],[-65,-54],[-47,-86],[-38,7],[-55,-55],[-90,-9],[-14,-31],[-66,-4],[-8,-54],[-100,46],[-48,-9],[-62,43],[-44,-37],[-35,-100],[-83,5],[-27,-40],[-70,-15]],[[17240,5094],[-37,17],[-58,-6],[-40,47],[-47,-3],[-54,76],[-100,56],[-13,50],[-71,42],[-32,60],[-60,13],[7,108],[17,60],[-7,42],[-69,142],[-44,20],[-62,103],[-30,128],[-67,114],[13,142],[-66,70],[-73,165],[-15,59],[-34,12],[-60,91],[-16,49],[-73,-26]],[[17364,4976],[-52,81],[-72,37]],[[26181,3501],[-32,-36],[-31,17],[-54,-72],[-4,-26],[-70,-1],[-67,-48],[-80,44],[-30,-45],[-47,27],[-32,-22],[-59,1],[-31,-27],[4,-49],[-37,-65],[-7,-70],[26,-64],[-7,-63],[-86,-57],[14,-57],[-10,-86],[34,-24],[1,-51],[80,-105],[48,-113],[6,-56],[34,-11],[20,-82],[23,-6],[38,-72],[-8,-73],[30,-85],[-2,-62],[42,-88],[41,-23],[17,-77],[64,-101]],[[26009,1773],[-56,-46],[-71,-26],[1,-51],[-50,-27],[-18,-48],[25,-64],[-17,-68],[-75,-71]],[[24185,950],[-87,36],[-29,34],[-58,-14],[-49,60],[-64,26],[-81,-30],[-47,9],[-38,123],[-39,27],[3,50],[44,86],[-72,16],[-36,51],[-91,-3],[-49,16],[-29,72],[-8,58],[-63,33]],[[23392,1600],[-54,28],[-15,53],[37,20],[20,61],[-11,154],[-73,-53],[-14,59],[-42,26],[37,114],[98,117]],[[23375,2179],[69,-4],[88,-89],[42,23],[80,-60],[57,-8],[48,18],[9,-98],[83,-108],[-3,-55],[41,-34],[67,44],[43,47],[47,10],[7,62],[80,62],[38,69],[23,8],[42,101],[69,45],[-14,82],[22,62],[94,30],[85,84],[32,49],[-2,47],[-46,34],[-20,50],[16,33],[-19,66],[-34,46]],[[25002,3790],[62,20],[73,96],[56,89],[23,63],[71,78],[-5,89],[-23,51],[17,61],[57,13],[24,72],[112,58],[84,33],[-31,68],[0,71],[34,54],[6,60],[-30,115],[94,80],[64,38],[13,40],[-28,26],[-41,75],[41,121],[42,59]],[[6340,7222],[-28,-10],[-22,-61],[-43,-35],[-10,-43],[-64,1],[-51,69],[-77,77],[-28,9]],[[6017,7229],[-14,44],[47,34],[-112,55],[-1,73],[-44,35],[-25,67],[-58,68],[22,31],[-23,92],[-26,41],[31,55],[1,51],[-78,34],[-3,44],[36,66],[4,79],[18,30]],[[5792,8128],[29,8],[68,69]],[[5889,8205],[69,-35],[63,-64],[19,-45],[-13,-51],[49,-59],[29,-60],[76,-41],[62,-10],[36,17],[85,-4],[-3,-75],[12,-112],[-64,-12],[-5,-76],[-60,-75],[46,-50],[18,-55],[-23,-71],[55,-105]],[[23451,2361],[-10,-47],[-36,-20],[-45,-70]],[[23360,2224],[-110,56],[-111,-21],[-99,-119],[-5,-132],[-66,-49],[-71,14],[-63,-61],[-47,-13],[-38,-35]],[[22750,1864],[-31,-41],[-46,9],[-11,61],[-150,40],[-41,34],[-17,54]],[[22616,2425],[68,41],[90,-12],[35,37],[2,54],[56,62],[30,-29],[68,3],[34,-63],[89,40],[118,112],[39,-56],[38,34]],[[4451,1756],[77,24],[9,79],[28,72],[67,62],[68,-18],[32,-37],[45,46],[54,3],[102,71],[18,72],[-6,65]],[[4945,2195],[84,-63],[102,108],[34,-3],[38,-121],[-17,-30],[35,-54],[87,-14],[139,96],[99,-13],[16,21],[99,-61],[28,-50],[3,-124],[-15,-71],[-56,-36],[-30,-63],[-42,-22],[-57,-72],[11,-93],[-8,-70],[-31,-24],[21,-85],[86,-21],[53,-42],[22,-67],[-100,-23],[-29,-94],[-23,-23],[42,-76],[0,-71],[101,-34],[41,8],[37,-29],[15,-65],[-13,-52],[-76,-119],[-12,-108],[-19,-88],[-20,-15],[-74,20],[-58,-15],[-11,-57],[-48,-74],[-60,-54],[-27,43],[-56,25],[-53,0],[-89,54],[-17,38],[-36,9],[-44,51],[-36,-6],[-25,-79],[-150,10],[-31,41],[14,92],[-28,81],[-74,14],[-45,76],[-79,27],[-41,-25],[-26,-44],[-36,47],[9,102],[-79,44],[-27,35],[-52,1],[-30,73],[-45,-29],[-76,15],[-33,-39],[-80,36],[0,28],[-111,72],[-83,-7],[-32,32],[-44,-7],[-49,-54],[-59,-23],[-46,28],[-109,-34],[-114,-63],[-37,-38],[-47,24],[-58,-48],[-83,-11],[-97,25],[-22,24],[-111,-9],[-9,32],[-88,0],[-62,88],[-136,30],[-55,56],[-25,76],[60,34],[72,-9],[26,50],[41,29],[-18,78],[-50,32],[-8,33],[53,85],[5,59],[51,34],[73,77],[11,94],[71,84]],[[8696,18202],[70,75],[33,9],[-6,54],[37,11],[20,151],[28,42],[163,30],[-26,69],[22,45],[-24,38],[22,32],[-29,35],[48,69],[135,35],[81,-11],[70,-54],[45,-58],[88,82],[82,-22],[45,-80],[47,0],[7,44],[118,-13],[84,142],[-18,108],[50,42],[46,99],[59,-39],[48,8],[56,-23],[33,25],[87,-29],[29,-39],[96,13],[80,33],[47,46],[40,-42],[38,28],[46,-82],[-95,-42],[-47,-42],[21,-98],[31,-21],[-19,-53],[70,-88],[26,-74],[-24,-40],[1,-127],[33,-56],[-7,-44],[40,-154],[-22,-36],[49,-85],[-37,-50],[-9,-49],[-42,-36],[34,-31],[-6,-101],[21,-44],[-19,-59],[-51,-34],[-45,-54],[13,-113],[52,-142],[48,14],[51,-68],[64,-10],[28,-135],[52,-98],[-77,-44],[-34,-38],[-8,-116],[-46,-67],[42,-66],[10,-49],[-13,-99]],[[10678,16626],[-34,-51],[-3,-49],[-53,-29],[-8,-36],[-53,-35],[40,-107],[1,-41],[63,-114],[19,-56],[-27,-60],[-100,-53],[-21,-67],[56,-19],[9,-70],[83,-155],[-30,-93],[-44,-13],[-6,-63],[34,-88],[-7,-44],[-36,-47],[-43,97],[-1,36],[-67,98],[-61,-35],[-34,15],[-122,-31],[-45,12],[-21,43],[-144,70],[-25,105],[-75,46],[-72,3],[-115,115],[-83,71],[-68,-19],[-41,54],[-40,23],[-34,86],[40,129],[-32,62],[-47,-9],[-35,34],[-2,58],[-103,32],[-29,33],[-62,27],[-82,104],[-32,58],[-86,-20],[-41,34],[-70,25],[11,47],[64,93],[-18,58],[-85,34],[-26,31],[-90,26],[2,30],[-48,118],[65,117],[-38,19],[8,39],[51,38],[-67,30],[-7,52],[22,44],[-132,-4],[-19,32],[22,70],[37,22],[-55,93],[-94,-45],[-41,15],[-60,70],[-14,86],[41,60],[52,26],[5,40],[82,58],[41,81],[63,-8],[3,87],[49,6],[-17,45]],[[23426,2957],[-43,64],[-97,7],[-29,80],[57,46],[-67,89],[-72,-26],[-75,-2],[-22,41],[-70,58],[-41,77],[-4,51],[33,111],[-21,57],[36,49],[30,73],[38,40],[32,3],[43,-70],[-21,-62],[0,-94],[35,-40],[142,58],[32,55],[3,41],[35,49],[41,14],[21,70],[-2,75],[-58,40],[29,90],[65,81],[-39,36],[15,76],[-9,35],[-72,65]],[[24244,4996],[84,-5],[44,-42],[7,-76],[27,-23]],[[22245,2649],[62,51],[82,8],[52,55],[-15,52],[-59,-20],[-36,52],[-40,-4],[-14,45],[-51,17],[-16,101],[-44,33]],[[22166,3039],[0,35],[-35,46],[-33,-8],[-21,70],[-24,19],[83,148],[13,115],[-36,31],[-13,54],[27,58],[44,-7],[39,29],[-14,81],[39,62],[-7,43],[18,98],[88,28],[74,-7],[49,39],[40,-3],[72,82]],[[2917,8494],[-101,42],[-36,47],[-70,60],[-61,19],[-84,111],[-74,3],[-143,90],[-145,-54],[-75,-14],[-46,-28],[-106,-31]],[[2242,9372],[75,-9],[75,40]],[[17240,5094],[10,-41],[-69,-130],[-46,5],[-69,-71],[-50,4],[-60,71],[-51,-12],[-58,16]],[[3691,3832],[-39,-2],[-193,85],[-69,49],[-131,59],[-92,10],[-51,43],[-124,-97],[-45,39],[-37,-9],[-49,26],[-71,64],[-18,41],[-10,97],[43,113],[8,54],[-107,24],[33,57],[33,175],[93,62],[23,35],[-3,57],[-69,-7],[-39,33],[-2,78],[-60,14],[7,50],[48,112],[-72,-1],[-15,34],[39,49],[24,96],[80,69],[136,52],[69,-9],[14,-34],[-21,-53],[5,-78],[-16,-71],[18,-24],[120,189],[-10,88],[204,43],[37,48],[-19,60],[49,12],[83,-56],[-36,-58],[42,-26],[31,-46],[57,48],[51,-1],[73,-64],[41,-14],[15,46],[113,12],[66,27]],[[4624,4086],[-42,-6],[-22,-60],[-43,-35],[-64,-24],[-54,46],[-46,-34],[-89,35],[-18,-81],[-122,7],[-12,-28],[-125,-59],[-116,5],[-32,-15],[-148,-5]],[[9079,10461],[-56,-47],[-66,-1],[-72,-30],[-31,17],[-70,-8],[-139,63],[-68,-22],[-126,28],[-25,-16],[-152,-32],[-41,-19],[-34,-45],[-83,-36],[70,-59],[17,-39],[97,-64],[56,-12],[95,23],[63,1],[60,32],[100,19],[90,0],[182,36],[95,-27],[108,-61],[15,-60],[-79,-3],[-53,-26],[-29,20],[-66,-3],[-73,-57]],[[8864,10033],[-115,-25],[-50,-47],[-33,27],[-143,18],[-69,-40],[-77,25],[-102,20],[-35,-13],[-64,12],[-22,-18],[-108,-33],[-14,-34],[-80,-31],[-39,22],[-133,-94],[-40,-51],[-94,-42],[-57,5]],[[6753,9952],[-69,41],[-17,39]],[[6667,10032],[16,60],[85,62],[-9,103],[48,65],[-16,33],[51,55],[4,67],[-21,40],[-57,28],[10,83],[38,44],[61,12],[-14,39],[57,39],[-13,39],[-54,20],[-58,-5],[-62,53],[17,40],[-80,103],[29,52],[-77,94],[8,35],[-48,59],[-19,66],[-66,37]],[[6497,11355],[23,66],[45,64],[55,19],[48,37],[17,38],[-20,110],[28,53],[100,72],[18,130],[65,84],[-4,64],[-37,68],[-30,22],[-14,73],[36,54],[75,34],[76,-34],[49,4],[35,28]],[[7062,12341],[59,-31],[78,-9],[25,-44],[143,1],[21,-59],[41,12],[157,-104],[60,-25],[8,-44],[45,-28],[55,-85],[17,-60],[73,-37],[67,-17],[13,-70],[33,-40],[44,-11],[24,-38],[5,-97],[39,-60],[-19,-22],[-19,-107],[28,-16],[-3,-65],[58,-68],[146,-83],[67,-67],[132,-55],[79,-5],[65,-96],[41,-44],[85,-59],[27,-41],[39,-7],[74,-93],[46,-28],[68,-180],[96,2]],[[3289,7592],[-12,10]],[[3740,8139],[16,-53],[108,-122],[85,44],[91,2],[92,-10],[25,-33],[85,14],[103,-28],[40,-56],[57,-46],[-26,-34],[80,-102],[-9,-45]],[[4014,9745],[189,-56],[39,-24],[84,-2],[54,60],[98,47],[67,-39],[34,4],[39,53],[23,-28],[17,-85],[43,-26],[31,15],[130,4],[45,-101],[37,-14]],[[5151,9340],[-36,-9],[-75,-96],[-41,69],[-39,-5],[-80,81],[-20,-31],[-145,2],[-89,-42],[-79,8],[-66,-27],[1,78],[-20,30],[-111,57],[-52,-26],[-209,2],[-45,-17],[-49,52],[-112,54],[-81,-43],[-16,-81],[23,-35],[-1,-62]],[[3809,9299],[-83,9],[-63,53],[-52,-4],[-30,-36],[-90,39],[-68,-12],[43,-109],[-8,-95],[27,-59],[38,-6],[83,-83]],[[4433,3244],[-47,-35],[-73,35],[-65,4],[-23,27],[-55,6],[-59,61],[-55,8],[-26,33],[-59,25],[-29,-11],[-72,72],[-73,5],[-41,46],[-77,36],[-15,23],[-100,15],[-37,-18],[-124,-29],[9,-44],[-56,-27],[-48,-2],[-45,56],[-81,0],[-43,-25],[-77,-13],[-100,-41],[-15,-23],[-78,-38],[-37,-45],[-157,-53]],[[2675,3292],[-76,44],[-20,60],[40,27],[-25,47],[-49,-13],[-21,28],[-71,25],[44,65],[52,4],[56,50],[58,27],[58,-2],[67,-38],[90,40],[61,5],[39,33],[161,6],[99,11],[29,31],[67,-12],[110,33],[31,29],[110,14],[67,-15],[39,41]],[[4742,3957],[-9,-117],[-40,-26],[18,-74],[-22,-24],[1,-60],[-64,20],[-68,-38],[11,-74],[-17,-63],[-34,-34],[-22,-64],[-59,-60],[26,-41],[-30,-58]],[[8696,18202],[-32,10],[-90,136],[-54,37],[-6,79],[-19,30],[26,151],[-8,42],[-83,50],[8,82],[-17,100],[43,20],[-33,81],[-84,16],[-50,-64],[-156,92],[39,49],[37,75],[579,-2],[803,1],[705,-2],[640,2],[849,0],[630,0],[-26,-115],[45,-42],[46,-3],[25,-92],[52,-5],[-8,-54],[28,-28],[2,-129],[-49,-64],[12,-30],[65,-37],[10,-34],[-32,-47],[7,-41],[51,-69],[39,-3],[55,52],[22,74],[62,4],[16,43],[45,-15],[11,-96],[-41,-50],[13,-50],[3,-99],[78,-84],[26,-6],[-12,-70],[-48,10],[-51,-138],[-47,-28],[-26,22],[-64,5],[-54,-19],[-49,-68],[-5,-90],[-61,-37],[26,-36],[-25,-41],[-27,-95],[-55,-5],[-98,22],[-45,-42],[33,-111],[42,-26],[-15,-110],[-29,-26],[-27,-140],[38,-22],[65,24],[42,-19],[16,-97],[72,-47],[4,-53],[54,-13],[34,-32],[145,-24],[-8,-100],[-37,-37],[9,-46],[-84,-199],[-103,62],[-27,-20],[-2,-83],[-63,-53],[5,-78],[-43,-9],[-38,-49],[-56,19],[-40,-104],[-51,-25],[-69,13],[15,56],[-69,82],[-121,29],[-146,8],[-17,-52],[-70,35],[-67,-43],[-48,-53],[-23,-70],[5,-35],[-46,-53],[-90,20],[-60,-49],[-9,46],[-106,10],[-51,-38],[-35,-155],[-98,-59],[-57,11],[-8,81],[-48,39],[38,101],[-24,22],[15,60],[-15,89],[-49,72],[-10,72],[-138,73],[-64,56],[-20,74],[-71,15],[-41,30]],[[27109,2421],[51,-95],[-17,-105],[-29,-42],[59,-90],[-25,-73],[-93,11],[7,-68],[56,-97],[-42,-45],[-19,-53],[-80,-38],[-5,-118],[-52,-118],[5,-93],[-72,-89],[-77,-46],[-8,-44],[-59,-16],[-33,-61],[-45,-124],[-62,15],[-30,-22],[-60,17],[-25,46],[-102,28],[-17,74],[7,47],[-23,25],[39,78],[-40,63],[-68,36],[14,88],[-29,59],[-75,39],[-50,-35],[-31,10],[5,115],[-75,73]],[[24505,5489],[137,80],[45,36],[99,13],[37,-15],[167,91],[26,-76],[49,-7],[34,-38],[63,-25],[74,12],[94,-97],[47,-12],[29,-39],[50,-5],[42,-29],[79,-17],[41,36],[122,-14]],[[5919,5209],[-32,-27],[-78,0],[-48,-83],[-42,-31],[-36,12],[-38,-42]],[[8029,8883],[25,54],[196,68],[99,72],[34,-30],[67,11],[19,27],[108,44],[50,-16],[86,37],[65,-6],[47,36],[93,22],[54,-2],[60,25],[42,-4],[78,24],[150,-45],[111,-10],[8,-44],[100,-19],[12,71],[98,47],[48,-10],[75,32],[56,-6]],[[9810,9261],[81,-57],[31,13],[60,-51],[29,1],[90,-48],[17,-49],[-31,-55],[-17,-96],[-49,-70],[-97,-106],[-64,-41],[-55,-12],[-59,-106],[22,-69],[-4,-75],[23,-26],[-123,-97],[-62,-15],[-23,17],[-85,-56],[-197,-58],[-67,2],[-29,-92],[-122,-30],[-229,34],[-92,-45],[-87,45],[-149,36],[-77,-14],[-119,37],[-31,-62]],[[3188,6639],[-50,46],[-44,-7],[-79,80],[-7,65],[-34,28],[-46,99],[-1,80],[-33,-3],[-65,35],[-79,69],[-60,33],[-12,59],[-59,53],[-2,87],[-37,42],[13,150],[34,68]],[[3029,8214],[7,-73],[64,-53],[59,-78],[23,-199],[72,-231],[-23,-66],[-1,-85],[37,-92],[42,-76],[1,-123],[-30,-152],[29,-116]],[[20908,4489],[-108,94],[-68,23],[63,102],[38,23],[-19,122],[59,63],[-72,77],[46,70],[-20,33],[-91,31],[-29,53],[29,24],[-24,59]],[[20712,5263],[-31,108],[29,48],[-30,70],[30,132],[-22,79],[11,61],[48,6],[85,97],[5,34],[74,18],[48,-70],[42,-10],[8,-143],[96,-39],[40,14],[63,-65],[30,-60],[14,-89],[-7,-87],[17,-32],[-14,-56],[34,-79],[44,-69],[2,-47],[47,-33],[-5,-65],[60,-84],[31,-20],[-7,-61],[-32,-84],[-27,-32],[6,-112],[-80,-75],[-58,80],[-97,-37],[-47,2],[-43,-23],[-63,25],[-34,-56],[-71,-20]],[[22166,3039],[-20,-40],[-60,3],[-10,-24],[-65,20],[-37,-30],[14,-69],[-38,-67],[-76,56],[-32,-50],[-6,-68]],[[21836,2770],[-69,18],[-99,-14]],[[21668,2774],[-18,84],[27,24],[0,161],[30,118],[-94,219],[12,63],[-33,40],[28,51],[-9,41],[31,40],[0,50],[-26,32],[40,50],[-14,119],[-29,40],[-9,104],[39,63],[-3,84],[-28,17],[-53,73],[-104,32],[-24,122],[-57,80],[71,43],[53,2],[72,-60],[56,-98],[45,24],[64,86],[47,41],[34,-9],[40,37],[53,82],[22,59],[78,13]],[[21668,2774],[-44,-97],[-64,-56],[-34,-57],[-118,-76],[-32,14],[5,46],[-72,26],[-7,101],[20,27],[13,82],[-53,43],[-52,-13],[-91,20],[-28,25],[25,65],[36,182],[-69,38],[23,88],[45,101],[34,139],[-3,40],[-37,45],[-49,4],[-14,58],[67,117],[-54,23],[6,44],[-20,54],[-53,46],[-64,18],[-28,-24],[-60,21],[26,97],[41,42],[-9,37],[39,32],[-7,87],[-35,57],[3,107],[-25,48],[-40,30],[19,34]],[[20712,5263],[-136,-148],[-50,-16],[-73,-74],[-117,13],[11,119],[-23,119],[20,64],[-26,105],[-106,11],[-112,-29],[10,36],[-30,68],[-74,32],[-32,124],[-35,18],[-20,72],[21,51],[-48,93],[-52,24],[19,51],[82,114],[57,28],[20,37],[41,13],[68,135],[62,76],[105,-14],[9,-42],[-6,-88],[18,-98],[154,78],[36,-4],[6,59],[41,5],[52,75],[0,71],[-17,28],[34,45],[55,8],[69,-18],[45,78],[-23,19],[76,95],[105,-53],[183,22],[12,33],[63,4],[69,62],[31,-37],[105,-5],[44,114],[90,64],[43,-26],[44,-62],[99,-78],[57,34],[7,36],[44,14],[34,63],[87,-7],[35,-53],[-37,-62],[29,-41],[-55,-67],[-14,-62],[-32,-22],[-5,-95],[-32,-48],[-6,-64],[-27,-57]],[[3809,9299],[23,-72],[44,-47],[139,-63],[149,-15],[48,14],[64,-19],[61,-37],[116,-4],[60,-20],[63,-76],[66,-30],[116,-23],[0,-49]],[[2981,2655],[-41,47],[18,55],[-41,149],[-83,121],[-20,97],[-66,23],[-66,56],[12,35],[-19,54]],[[4433,3244],[12,-41],[-38,-61],[-77,-36],[-55,21],[-39,-10],[-42,-39],[-47,-6],[-22,-97],[-65,-26],[-26,-80],[-75,-65],[-53,-24],[-87,-89],[-39,-132],[35,-105],[26,-4],[43,-52],[57,-20],[85,3],[47,-31],[61,39],[86,20],[25,38],[67,-4],[48,65],[61,55],[41,2],[45,-90],[3,-47],[39,1],[44,64],[158,27],[9,32],[48,7],[32,65],[82,11],[105,-5],[21,-93],[-9,-131],[41,-15],[-31,-78],[-36,-4],[-33,-41],[-43,15],[-43,-34],[51,-54]],[[21865,2625],[-20,55],[-29,17],[20,73]],[[5093,10337],[-10,-48],[-119,-21],[-18,-83],[-34,-28],[-65,-2],[-78,25],[13,-57],[-29,-16],[-3,-62],[-71,-34],[-108,112],[-98,-20],[-53,3],[-90,80],[-39,-21],[-62,39],[-80,-1],[-95,51],[-89,-14],[-16,-47],[-60,-18],[-37,95]],[[3973,10522],[28,31],[65,2],[-6,68],[50,2],[224,52],[15,-23],[-26,-77],[119,-11],[35,31],[36,-8],[65,49],[54,-11],[50,-58],[43,19],[91,-27],[51,-36],[-45,-59],[130,-25],[39,16],[102,-120]],[[8864,10033],[67,-85],[97,-61],[-16,-38],[21,-36],[-70,-125],[-46,-171],[2,-91],[65,-14],[127,1],[108,-68],[55,-12],[319,-2],[53,-14],[158,-8],[68,37],[62,-35],[-9,-29],[-94,6],[-21,-27]],[[13669,8663],[82,117],[3,81],[83,81],[-15,25],[73,78],[-48,33],[51,41],[65,104],[-11,33],[80,78],[38,72],[-28,31],[15,67],[60,72],[37,23],[81,104],[30,-13],[148,139],[143,120],[63,82],[101,-80],[5,-103],[28,-26],[42,-85],[37,-3],[9,-48],[42,-17],[36,24],[77,-37],[15,22],[77,-24]],[[15088,9654],[63,-11],[46,15],[22,-64],[34,-18],[37,45],[67,-81],[26,43],[70,29],[31,-42],[50,-14],[82,19],[24,-9],[69,23],[37,37],[103,9],[75,30],[30,-91],[53,-6],[12,-41],[47,3],[64,-30],[15,-36],[79,23],[56,-78],[-4,-39],[62,-120],[-9,-78],[-71,-73],[-62,-23],[-60,-4],[-24,-70],[-2,-171],[35,-46],[-29,-102],[0,-67],[-33,-42],[-16,-69]],[[16067,8505],[-27,-20],[-60,31],[-21,-150],[-89,33],[-52,54],[-86,-86]],[[15732,8367],[-89,16],[-34,-28],[-76,-4],[-40,34],[-14,69],[-51,58],[-10,39],[-58,-6],[-3,52],[-58,59],[-10,74],[-83,42],[-65,-3],[12,47],[-12,73],[-58,109],[-29,-38],[-65,-27],[-68,92],[-21,93],[-78,45],[-41,-17],[-69,12],[-60,-43],[-114,14],[-69,-37],[-46,-42],[-42,-70],[-48,18],[-20,47],[-68,3],[-42,-34],[-21,-73],[-32,-50],[-111,-62],[-22,-100],[-26,-48],[-3,-133],[-49,-57],[-29,-73],[-87,-78],[1,-45],[-32,-37],[-66,77],[-46,85],[-54,27],[74,157],[-31,59]],[[15088,9654],[21,40],[-15,35],[19,43],[-40,60],[-60,49],[22,66],[28,24],[20,74],[-50,128],[80,-4],[25,-35],[158,4],[49,-19],[21,50],[83,29],[62,8],[67,-37],[89,16],[90,-18],[30,34],[140,-28],[69,-40],[14,-45],[49,-21],[92,-86],[109,-34],[42,-35],[50,3],[125,60],[28,-24],[56,0],[68,-25],[94,14],[69,-15],[7,-31],[117,-11],[51,-80],[42,-44],[-12,-66],[-45,-36],[-46,-79],[-83,-15],[-27,-36],[-92,-60],[14,-69],[49,-36],[35,-57],[-11,-75],[38,-28],[-17,-49],[-53,-43],[-17,-69],[-44,-25],[-21,-94],[-56,-78],[67,-22],[-5,-31],[52,-30],[14,-34],[102,-131]],[[16851,8596],[-70,-24],[-29,19],[-137,-17],[-95,78],[5,37],[-51,35],[-67,-22],[-49,-36],[-15,-34],[1,-80],[-57,21],[-58,-2],[-26,-26],[-53,7],[-44,-39],[-39,-8]],[[5093,10337],[112,-14],[74,14],[28,31],[-24,59],[26,76],[60,75],[49,27],[138,-67],[21,18],[90,-13],[46,77],[-16,117],[47,55],[102,-20],[-10,68],[69,89],[55,0],[-1,63],[58,88],[-31,43],[-22,90],[2,50],[78,8],[87,-15],[55,33],[92,-10],[31,48],[107,24],[31,-26],[50,30]],[[6667,10032],[-87,47],[-18,-36],[-16,-97],[-30,-36],[-73,-38],[10,-40],[-54,-22]],[[5162,7161],[-1,65],[-114,138],[-41,37]],[[5050,7453],[67,-61],[51,-15],[17,29],[57,-31],[74,8],[59,-60],[167,-48],[34,-54],[77,-22],[62,-57],[44,-7],[66,-41],[42,43],[35,7],[62,67],[53,18]],[[6340,7222],[48,-56],[144,-24]],[[6532,7142],[-1,-49]],[[6532,7142],[32,44],[-17,74],[24,36],[57,32],[35,-81],[31,-30],[34,29],[-17,102],[45,113],[88,52],[164,-51]],[[8052,6957],[0,-44],[-63,-56],[25,-71]],[[12307,5163],[-33,29],[4,70],[48,50],[-3,36],[-106,25],[-10,69],[-4,147],[-23,64],[-57,48],[-9,57],[-45,85],[2,38],[-105,3],[-25,-14],[-94,28],[-16,26],[-60,-14],[-88,11],[-38,50],[-31,131],[-54,71],[-10,56],[21,145],[-18,108],[-27,57],[-31,105],[-4,67],[-24,62],[-14,153],[25,61],[-23,35],[59,68],[60,94],[-17,57],[73,-1],[30,34],[106,43],[77,1],[55,53],[-42,38],[-16,41],[40,115],[40,56],[141,130],[-41,30],[45,50],[83,-22],[74,48],[96,-5],[-26,-46],[24,-149],[33,-32],[115,8],[53,-13],[-16,-63],[37,-49],[59,11],[91,-50],[20,-34],[122,13],[30,-77],[68,-10],[31,14],[76,-50],[43,-7],[67,-97],[32,6],[94,-67],[124,4],[34,-32],[41,2],[69,42],[52,49],[-8,79],[85,51],[30,-1],[66,164],[-29,52],[27,40],[3,53],[-38,69]],[[13727,7732],[38,23],[52,-14],[22,-40],[43,2],[19,59],[51,31],[40,-24],[46,3],[57,30],[63,-46],[52,-59],[5,-58],[30,-36],[22,-82],[55,-37],[46,-82],[50,-32],[26,-49],[66,-44],[91,-12],[55,30],[76,-36],[73,34],[117,-15],[59,47],[134,-10],[48,52],[64,11]],[[23162,1287],[32,46],[73,-17],[50,3],[21,69],[-14,40],[43,78],[25,94]],[[24270,258],[-54,-58],[-35,-5],[-54,-40],[-32,-50],[-33,17],[-52,-16],[-47,-42],[-90,-4],[-48,-52],[-41,-1],[-30,37],[-74,-16],[-19,-28],[-80,5],[17,89],[-88,26],[-107,52],[-72,63],[-44,-21],[-49,35],[40,50],[-39,51],[-1,56],[-21,50],[34,25],[30,63],[-48,41],[59,120],[-51,37],[21,96],[35,70],[-17,40],[49,31],[-34,123],[0,59],[-60,-50],[-79,23],[-68,87],[54,24],[20,42]],[[23162,1287],[-21,66],[-87,20],[-55,47],[-67,-22],[-51,79],[-39,-4],[-64,47],[11,30],[-29,88],[46,36],[-27,46],[-2,93],[-27,51]],[[23360,2224],[15,-45]],[[13727,7732],[-10,39],[-89,52],[16,39],[-34,74],[-33,10],[-128,118],[-75,44],[-51,51],[0,74],[-81,27],[-75,40],[-52,56],[20,61],[163,179],[136,22],[106,49],[129,-4]],[[15732,8367],[23,-129],[-19,-94],[-49,-43],[-52,-79],[-3,-71],[42,-59],[-7,-68],[20,-21],[-16,-109],[-13,-9]],[[4251,6584],[-9,34],[-67,47],[2,44],[-128,51],[-47,-21],[-30,32],[5,152],[-45,80],[-4,52],[-66,15],[-24,24],[25,55],[71,-10],[44,32],[60,-19],[30,-28],[49,21],[111,6],[92,25]],[[16851,8596],[43,-9]],[[7545,14020],[-51,178],[27,68],[-16,37],[20,42],[40,13],[44,52],[51,12],[-2,42],[-45,41],[21,38],[-39,72],[-62,62],[-5,31],[68,58],[60,98],[-21,30],[-74,-21],[-41,36],[-78,28],[17,39],[-28,71],[-42,34],[-16,49],[22,58],[-2,58],[21,88],[120,161],[-32,87],[-46,33],[-11,40],[56,12],[35,48],[70,28],[107,18],[40,30],[38,-10],[169,151],[-34,90],[43,52],[152,40],[23,44],[44,13],[55,-92],[69,-24]],[[9251,14196],[-23,-15],[-3,-97],[21,-63],[99,-11],[45,-46],[75,-103],[28,-114],[35,-86],[-29,-161],[-43,-49],[-58,-16],[-33,15],[-94,-41],[-38,-96],[14,-39],[115,-154],[-5,-87],[-32,-36],[-10,-68],[-38,-67]],[[9277,12862],[-42,53],[-110,76],[-53,17],[-36,-26],[-84,-29],[-35,108],[-105,32],[-34,-14],[-82,6],[-93,82],[-57,26],[-9,54],[-109,46],[-36,-1],[-67,76],[-49,14],[-38,-46],[-48,33],[-25,-19],[-52,47],[-42,-10],[-41,31],[4,54],[-91,129],[-64,36],[-30,46],[-3,47],[-149,73],[-54,49],[-38,70],[-5,55],[-55,43]],[[5889,8205],[-49,45],[16,187],[73,81],[-35,45],[-34,7],[17,67],[73,23],[22,-13],[49,51],[50,-9],[68,29],[167,115],[152,62],[25,-12],[97,0]],[[5036,7557],[22,21],[-16,73],[21,61],[42,16],[19,156],[44,22],[-5,77],[61,5],[22,62],[63,84],[21,54],[127,-68],[72,43],[62,-32],[95,-14],[40,16],[66,-5]],[[9277,12862],[31,-31],[73,-23],[88,-123],[69,-4],[33,-38],[86,-49],[23,-67],[1,-53],[72,-174],[71,-121],[7,-70],[-42,-99],[36,-110],[54,-32],[-1,-78],[-18,-41],[27,-155],[-20,-46],[-55,-38],[-7,-101],[51,-5],[-14,-71],[74,-17],[8,-42],[-31,-103],[-22,-20],[118,-69],[49,-110],[10,-69],[-23,-9],[-76,-82],[-73,-114],[31,-14],[94,-76],[168,-43],[91,-68],[-7,-64],[-43,-120],[-183,41],[-51,-3],[-88,25],[-67,37],[-115,37],[-65,2],[-127,66],[-151,-34],[-43,16],[-241,-39]],[[7062,12341],[12,27],[-51,96],[29,49],[-26,86],[-50,29],[-74,19],[11,60],[53,24],[10,49],[-14,77],[-110,14],[-124,31],[-32,60],[38,86],[-86,75],[-6,52],[67,27],[19,90],[47,82],[84,63],[6,57],[39,38],[41,3],[23,38],[70,13],[23,26],[60,135],[41,1],[71,79],[7,64],[61,15],[74,-4],[22,35],[-2,57],[54,20],[80,-16],[16,22]],[[1294,8258],[14,-29],[-46,-83],[-30,14],[-37,-51],[-54,-9],[-47,-44],[-36,-61],[-28,-12],[-85,-95],[-72,18],[-108,11],[-73,61],[-79,-21],[-135,58],[-20,63],[13,70],[-59,170],[-28,128],[-118,245],[-1,28],[-62,146],[21,54],[45,-18],[125,-95],[14,-51],[96,-37],[61,21],[0,28],[-62,40],[-10,27]],[[14952,10647],[39,-38],[43,22],[-5,69],[68,94],[50,38],[97,10],[77,-22],[15,-40],[-29,-190],[-53,-116],[-25,-102],[45,-76],[56,-69],[45,-23],[63,5],[269,-13],[65,-55],[6,-80],[220,-78],[74,-52],[-12,-52],[-57,11],[-141,10],[-98,16],[-74,38],[-56,-12],[-52,-56],[-17,-59],[69,-135],[2,-94],[-33,-31],[-84,-21],[-83,48],[-77,-31],[-48,59],[-71,-31],[-57,69],[-70,0],[-19,170],[-70,38],[19,80],[45,68],[-8,102],[-70,76],[-39,166],[-69,100],[-10,61],[-70,60],[-26,66],[31,78],[72,-21],[53,-57]],[[16818,8326],[92,144],[-17,140],[36,21],[98,-11],[110,-58],[83,-1],[97,-44],[169,36],[154,-70],[96,-11],[73,-37],[146,-12],[89,21],[92,-74],[8,-79],[-9,-152],[-61,-37],[-54,13],[-35,38],[-71,3],[-91,-136],[-98,-25],[-53,52],[-45,-3],[-30,-72],[-51,-83],[-91,-78],[-61,-82],[-123,-68],[-55,-4],[-49,21],[-61,-40],[-15,-51],[-56,-19],[-42,63],[20,78],[-32,30],[-156,38],[-40,40],[-99,-1],[-63,45],[-17,34],[29,49],[35,14],[27,221],[46,79],[75,68]],[[17649,8487],[-73,25],[77,37],[68,52],[63,102],[103,53],[44,139],[-20,125],[1,109],[-58,64],[-67,145],[-47,2],[-26,41],[-236,39],[31,47],[44,11],[31,98],[48,7],[65,-35],[40,-48],[37,-2],[113,76],[67,97],[39,5],[37,-29],[27,-88],[111,-63],[98,6],[66,-25],[43,6],[65,-82],[-29,-119],[29,-330],[52,-63],[20,-94],[46,-79],[45,-27],[-19,-67],[-137,-177],[-16,-107],[54,-174],[3,-65],[49,-48],[35,-236],[38,-72],[-1,-101],[-79,-45],[-25,-133],[48,-129],[-14,-61],[-69,-78],[-128,143],[-111,90],[0,172],[-59,78],[8,166],[-15,150],[-40,83],[38,132],[-4,103],[-37,95],[-77,31],[-137,-37],[-85,42],[-41,-5],[-62,36],[-71,12]],[[18023,9655],[-79,183],[-82,27],[97,177],[64,-25],[191,23],[105,20],[161,143],[57,20],[96,-55],[121,-105],[72,45],[8,97],[72,95],[62,38],[90,-10],[56,8],[53,37],[91,29],[123,-6],[22,-23],[29,-87],[42,-3],[120,51],[53,-21],[104,-173],[63,-53],[147,-60],[91,47],[67,-162],[31,-46],[186,-48],[177,-30],[100,46],[64,2],[102,48],[99,-10],[-4,-57],[-69,-82],[-26,-117],[-76,-90],[-17,-51],[53,-113],[56,-21],[90,-59],[13,-130],[-93,-31],[-73,10],[-63,-13],[-36,44],[-48,-11],[-39,-142],[-47,-69],[-69,37],[-61,52],[-46,-9],[-84,34],[-127,37],[-39,-31],[-23,-59],[-44,15],[-18,70],[19,63],[-11,56],[-103,14],[-40,35],[-18,98],[26,58],[-29,52],[-119,106],[-84,40],[-65,9],[-50,25],[-99,-46],[-56,-9],[-52,71],[-50,125],[-51,53],[-174,13],[-187,58],[-204,-1],[-32,-19],[-4,-104],[30,-66],[85,-18],[120,-39],[21,-58],[-161,-69],[-43,-31],[-68,-2],[-57,24],[-67,-106],[-30,-17],[-74,86],[-38,-7],[-50,23],[-118,-1],[-105,64],[-27,87]],[[16036,7077],[35,48],[50,10],[94,44],[31,-7],[23,48],[74,-61],[33,19],[36,-67],[59,24],[91,-2],[27,-41],[117,-59],[95,-11],[53,6],[8,-59],[39,16],[37,-37],[71,-37],[44,-63],[57,-18],[38,-78],[86,-11],[22,34],[71,-38],[11,-27],[78,-27],[35,-31],[20,-125],[-14,-47],[18,-69],[5,-111],[34,-109],[28,22],[27,-68],[74,-38],[34,38],[73,-11],[22,-53],[44,-52],[44,5],[21,61],[42,-41],[-12,-54],[18,-64],[-44,-59],[-10,-72],[7,-67],[-62,-25],[13,-80],[-59,-140],[-69,-34],[-10,-38],[-72,-55],[22,-125],[-26,-69],[-32,-32],[-61,5],[-21,-89],[-52,-94],[-45,32],[-44,-18],[-52,81],[-47,32],[-84,-166],[-46,5],[-69,-71],[-50,4],[-60,71],[-51,-12],[-66,30],[-70,9],[8,69],[-58,43],[-35,69],[-93,53],[58,65],[-40,75],[-67,-2],[-62,-29],[-21,-74],[-23,-20],[-43,33],[-1,43],[-30,41],[7,40],[-42,26],[23,98],[-77,140],[25,29],[5,79],[-35,62],[15,24],[-14,81],[10,46],[-57,105],[-12,76],[71,110],[-56,67],[-14,60],[-45,103],[-32,28],[41,59],[-57,137],[31,30],[-26,57],[0,56],[-56,177],[-31,62]]],"objects":{"MasterCombined":{"type":"GeometryCollection","geometries":[{"arcs":[[0,1,2,3]],"type":"Polygon","properties":{"POPULATION":"Lochsa River","HU_10_NAME":"Lochsa"}},{"arcs":[[-1,4]],"type":"Polygon","properties":{"POPULATION":"Lolo Creek","HU_10_NAME":"Lolo"}},{"arcs":[[-3,5,6,7]],"type":"Polygon","properties":{"POPULATION":"Selway River","HU_10_NAME":"Selway"}},{"arcs":[[-7,8]],"type":"Polygon","properties":{"POPULATION":"South Fork Clearwater River","HU_10_NAME":"SFClearwater"}},{"arcs":[[9,10,11,12]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"BearValley"}},{"arcs":[[13,14,15,16]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"BigCreek"}},{"arcs":[[17,18,19,20,21,22,23]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"BigMF"}},{"arcs":[[24,25,26]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"BigSheep"}},{"arcs":[[27,28,29]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Calapooia"}},{"arcs":[[30,31,32,33]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Camas"}},{"arcs":[[34,35,36,37]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Catherine"}},{"arcs":[[38,39,-20]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Chamberlain"}},{"arcs":[[40]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Chinook"}},{"arcs":[[41,42,43]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Cispus"}},{"arcs":[[44,45,46,47,48,49,50,51,52,53]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Clackamas"}},{"arcs":[[54,-16,55,56]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Clatskanie"}},{"arcs":[[57,58,59,60,61]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Coweeman"}},{"arcs":[[62,63,64,65,66,67,68,69,70]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"DeschutesE"}},{"arcs":[[-53,71,-63,72]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"DeschutesW"}},{"arcs":[[73,74,75]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"EFSalmon"}},{"arcs":[[76,77,78,79,80,81]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"EFLewis"}},{"arcs":[[82,83,84,85]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Elochoman"}},{"arcs":[[86,87]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Entiat"}},{"arcs":[[88,89,-67]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Fifteenmile"}},{"arcs":[[90,91,92,93,94,95]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"GrandeRondeLower"}},{"arcs":[[-37,96,97,98,-92,99,100]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"GrandeRondeMid"}},{"arcs":[[101,102,-97,-36,103]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"GrandeRondeUpper"}},{"arcs":[[-84,104]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Grays"}},{"arcs":[[105,106,107,108,-89,-66]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Hood"}},{"arcs":[[109,-27,110,111]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Imnaha"}},{"arcs":[[112,-70,113,114,115,116]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"JohnDayLow"}},{"arcs":[[117,118,119]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"JohnDayMF"}},{"arcs":[[-115,120,121,-102,122,-119,123]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"JohnDayNF"}},{"arcs":[[-117,124,125]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"JohnDaySF"}},{"arcs":[[-125,-116,-124,-118,126]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"JohnDayUp"}},{"arcs":[[127,-96,128,-111,-26]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Joseph"}},{"arcs":[[129,-62,130,131,132]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Kalama"}},{"arcs":[[133,134,135,136,137,138,139]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Klickitat"}},{"arcs":[[-59,140,141,142,143,144,145]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"LCowlitz"}},{"arcs":[[146,147,148,149]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Lemhi"}},{"arcs":[[150,-107,151,-50,152,153]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"LGorge"}},{"arcs":[[154,155,156,-93,-99]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Lookingglass"}},{"arcs":[[157,158,159,-31,160,161]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Loon"}},{"arcs":[[162,-100,-91,-128,-25,-110,163]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Lostine"}},{"arcs":[[164,165,-76,166,167,168,-161,-34,169,-148]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"LowerSalmonMS"}},{"arcs":[[170,171,172,173]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"LWhiteSalmon"}},{"arcs":[[-158,174,175,176,-12,177]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Marsh"}},{"arcs":[[-28,178,179]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"McKenzie"}},{"arcs":[[180,181]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Methow"}},{"arcs":[[182,-23,183,-32,-160]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"MFSalmonLower"}},{"arcs":[[-11,184,185,-24,-183,-159,-178]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"MFSalmonUpper"}},{"arcs":[[186,-86,187,-142]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Mill"}},{"arcs":[[188,-38,-101,-163]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Minam"}},{"arcs":[[189,-46,190]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Molalla"}},{"arcs":[[191,192,-137,193,194,195,196]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Naches"}},{"arcs":[[-78,197,-133,198]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"NFLewis"}},{"arcs":[[-60,-146,199,-42,200,201]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"NFToutle"}},{"arcs":[[202,203,-191,-45,204]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"NSantiam"}},{"arcs":[[-181,205]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Okanogan"}},{"arcs":[[-165,-147,206]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Pahsimeroi"}},{"arcs":[[-33,-184,-22,207,-149,-170]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Panther"}},{"arcs":[[-51,-152,-106,-65,208]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Sandy"}},{"arcs":[[-139,209,210]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Satus"}},{"arcs":[[-48,211,-57,212]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Scappoose"}},{"arcs":[[213,214]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Secesh"}},{"arcs":[[215,216,217,-18,-186]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"EFSFSalmon"}},{"arcs":[[218,-215,219,-39,-19,-218]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"SFSalmon"}},{"arcs":[[-131,-61,-202,220]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"SFToutle"}},{"arcs":[[221,-203,222,-179,-30]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"SSantiam"}},{"arcs":[[223,-216,-185,-10]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Sulphur"}},{"arcs":[[224,-144,225]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Tilton"}},{"arcs":[[-210,-138,-193,226]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Toppenish"}},{"arcs":[[227,228,229,230]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Touchet"}},{"arcs":[[-229,231,232]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Tucannon"}},{"arcs":[[-200,-145,-225,233,-195,234,-43]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"UCowlitz"}},{"arcs":[[-151,235,-81,236,-171,237,238,-108]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"UGorge"}},{"arcs":[[-109,-239,239,-134,240,-68,-90]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"UGorge2"}},{"arcs":[[241,242,-155,-98,-103,-122]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Umatilla"}},{"arcs":[[243,-167,-75,244]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"UpperSalmon"}},{"arcs":[[-244,245,-176,246,-168]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Valley"}},{"arcs":[[-243,247,-231,248,-156]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"WallaWalla"}},{"arcs":[[249,-82,-236,-154]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Washougal"}},{"arcs":[[-157,-249,-230,-233,250,-94]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Wenaha"}},{"arcs":[[251,-87,252,253]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Wenatchee"}},{"arcs":[[-238,-174,254,-135,-240]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"WhiteSalmon"}},{"arcs":[[-237,-80,255,-172]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Wind"}},{"arcs":[[256,-197,257,-254]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Yakima"}},{"arcs":[[-247,-175,-162,-169]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Yankee"}},{"arcs":[[-14,258]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"Youngs"}},{"arcs":[[259]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"FallTucannon"}},{"arcs":[[260]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"FallGrandRonde"}},{"arcs":[[261]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"FallLowerSnake"}},{"arcs":[[262]],"type":"Polygon","properties":{"POPULATION":"","HU_10_NAME":"FallClearwater"}},{"arcs":[[263]],"type":"Polygon","properties":{"POPULATION":"Wallowa River","HU_10_NAME":"Wallowa"}}]}}};
var mpops = ["Cascade","Cascades Eastern Slope Tributaries","Clearwater River","Coastal","Gorge","Grande Ronde / Imnaha","Grande Ronde River","Hells Canyon","Imnaha River","John Day River","Lower Snake","Middle Fork Salmon River","Salmon River","Snake River","South Fork Salmon River","Stanley Basin","Umatilla And Walla Walla River","Upper Columbia / East Slope Cascades","Upper Salmon River","Wallowa","Willamette","Willamette - Cascade","Yakima River Group"];
var species = ["Chinook","Chum","Coho","Sockeye","Steelhead"];
var esus = ["Columbia River Chum Salmon ESU" ,"Lower Columbia River Chinook Salmon ESU","Lower Columbia River Coho Salmon ESU","Lower Columbia River Steelhead DPS","Middle Columbia River Steelhead DPS","Snake River Basin Steelhead DPS","Snake River Fall-run Chinook Salmon ESU","Snake River Sockeye Salmon ESU","Snake River Spring/Summer-run Chinook Salmon ESU","Upper Columbia River Spring-run Chinook Salmon ESU","Upper Columbia River Steelhead DPS","Upper Willamette River Chinook Salmon ESU","Upper Willamette River Steelhead DPS"];
var esu_ids = ["CMCOL_Out","CKLCR","COCLR_Out","STLCR","STMCR","STSNR","CKSRF_Out","SOSNR","CKSRS","CKUCS","STUCR","CKUWR","STUWR"];
var run = ["NA","Fall-run","Spring-run","Spring/Summer-run","Summer-run","Summer/Winter-run","Winter-run"];

var pop_lookup = {};

var pop_lookup_from_ID = {};
var all_pops = [];

var mloc = {};

//initialize various mouseover functions
var showPopulation,clearPopulation,showMPG,mouseOnMap,mouseOffMap,getDomain;

//for looking up population(s) from location on map

var reverse_location = {};

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) {
        return true;
      }
      k++;
    }
    return false;
  };
}

$(".checkbox-dropdown").click(function () {
    $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function(e) {
    e.stopPropagation();
});

//count pops in each esu
var esu_popcount = {};
for(i=0;i<esus.length;i++){
	temp = esus[i];
	temp = temp.replace(" ESU", "");
	temp = temp.replace(" Salmon", "");
	esus[i] = temp;
	esu_popcount[temp]=0;
}

var wild_only = false;
var no_jacks = false;
var norder = 0;
nmfs.forEach(function (d) {
	d.popcode = d.popid + ' ' + d.popname.split(")")[1].trim();
	d.mpop = mpops[d.mpop-1];
	d.esuloc = esu_ids[d.esu-1];
 	d.esu = esus[d.esu-1];
//	d.esu = d.esu.replace(" ESU", "");
//	d.esu = d.esu.replace(" Salmon", "");
	esu_popcount[d.esu]++;
	d.run = run[d.run-1];
	d.species = species[d.species-1];
	d.sumfish = 0;
	pop_lookup[d.popcode] = d;
	pop_lookup_from_ID[d.popid.toString()] = d.popcode;
	all_pops.push(d.popcode);
	if(!mloc[d.mpop+d.species+d.run])mloc[d.mpop+d.species+d.run] = [];
	for(i=0;i<d.locations.length;i++)mloc[d.mpop+d.species+d.run].push(d.locations[i]);
	d.order = nmfs.length-norder;
	norder++;
});


var MPGcolor = {};
MPGcolor["Chinook"] = d3.scale.ordinal().range(colorbrewer.Paired["12"]).domain(mpops);

	
//var color = d3.scale.ordinal().range(colorbrewer.RdYlGn["11"]).domain(mpops);
var color = d3.scale.ordinal().range(colorbrewer.Paired["12"]).domain(mpops);
all_pops = all_pops.reverse();	
var species = dc.pieChart("#pie-species");
var esu = dc.rowChart("#pie-esu");
var mpop = dc.pieChart("#pie-mpop");
var pop = dc.pieChart("#pie-pop");
var rrun = dc.pieChart("#pie-rrun");
var filtered_fish = dc.numberDisplay('#filtered_fish');
var total_fish = dc.numberDisplay('#total_fish');
var ndx,all,nfish,yearGroup;

var reference = {};
var tipdiv, projection, path, map1, map2, map3, mapdiv;
var normalize_recruits=false;
var normalize_hatchfrac=false;
var normalize_age=false;
var normalize_spawn=true;
var show_thresh=true;
var show_missing=false;
var show_empty=false;
var show_geomean=true;
var which_geomean=10;
var show_MAT=true;
var show_CAT=false;
var show_delist1=false;
var show_delist2=false;
var show_delist3=false;
var display_back_button=false;
var current_point;

var bar_scale,bar_scale2;
var min_bar_scale=50;//sets threshold for displaying various scales and overlays

var mpopGroup;

var showHelp = function(id,text){
	d3.select("#" + id)
	  .on("mouseover", function(d) {
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
            tipdiv.html('<table width="350"><tr><td>' + text + '</td></tr></table>')  
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY - 14) + "px");    
        })                  
	  .on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);   
		});
}

showHelp("normalize_label","Check for scaled by population. Otherwise, scaled by all shown");
showHelp("mat_label","Show TRT Minimum Abundance Threshold");
showHelp("cat_label","Critical Threshold, a value documented in ESA BiOps  where NOAA does not authorize take (Typically 30% of MAT) ");
showHelp("delist1_label","Delisting Abundance Threshold (High):<br>The highest  NOSA value identified in the recovery plan based on plan scenarios");
showHelp("delist2_label","Delisting Abundance Threshold (Low):<br>The lowest NOSA value identified in the recovery plan based on plan scenarios");
showHelp("delist3_label","The Minimum Abundance value identified in recovery plans as likely to occur during the Federal Register Notices.");
showHelp("geomean_label","Show 10yr running geometric mean");
showHelp("geomean5_label","Show 5yr running geometric mean");

var buildMap = function(){
	var width=390,height=300;
	var projection = d3.geo.mercator().scale(2000).center([-110.5,44.5]);
	var path = d3.geo.path().projection(projection);
	
	mapdiv=d3.select("#metamap")  
	.style("position","absolute")
	//.style("background-image", "url(river_background.jpg")
	.style("width",width).style("height",height)
	.style("background-repeat","no-repeat")
    .style("opacity", 1);
	
var mapsvg = mapdiv.append("svg")
    .attr("width", width)
    .attr("height", height);

map2 = mapsvg.append("g")
    .attr("class", "states")
	.attr("width", width)
    .attr("height", height);	
	
map2.selectAll("path")
           .data(states.features)
           .enter()
           .append("path")
           .attr("d", path)
		   .attr("class", "borders")
		   .style("stroke","black").style("stroke-width",2)
		   .style("fill","none");		   

map1 = mapsvg.append("g")
    .attr("class", "water")
	.attr("width", width)
    .attr("height", height);
	
	
map1.selectAll("path")
           .data(rivers.features)
           .enter()
           .append("path")
           .attr("d", path)
		   .style("fill","none").style("stroke","#0570b0").style("stroke-width",2)
		   .attr("class", "rivers")
		   .on("mouseover", function(d) {
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
            tipdiv.html(d.properties.Name)  
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY - 14) + "px");    
            })                  
			.on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);   
			});
		
map4 = mapsvg.append("g")
    .attr("class", "map")
	.attr("width", width)
    .attr("height", height);


map4.selectAll(".population")
	//.data(popgeos.features)
//    .data(topojson.feature(topos, topos.objects.CombinedParts).features)
  .data(topojson.feature(topos, topos.objects.MasterCombined).features)
  .enter().append("path")
    .attr("class", function(d) {
		reverse_location[d.properties.HU_10_NAME] = [];
		return d.properties.HU_10_NAME; 
		})
	.classed("poploc",true)
    .attr("d", path)
	.style("stroke-opacity",0)
	.style("fill","red")
	.style("fill-opacity", 0)
	.on("mouseover",function(d){
		mouseOnMap(d.properties.HU_10_NAME);
	})
	.on("mouseout",function(d){
		mouseOffMap(d.properties.HU_10_NAME);
	});

//populate reverse lookup from map
nmfs.forEach(function(d){
	for(i=0;i<d.locations.length;i++)reverse_location[d.locations[i]].push({popid: d.popid, popcode: d.popcode, mpop: d.mpop, species: d.species});
});

maplabel = 	mapdiv.append("div").attr("id", "maplabel").html('&nbsp;<br>&nbsp;');

mapdesc = mapdiv.append("div").attr("class", "control");
mapdesc.append("div").append("strong").html("</br></br>Current Filters");
mapdesc.append("div").attr("class", "current_filters");

d3.select("#metahtml").append("div").attr("id","metafooter");	
}

buildMap();

var setReference = function(){
var refdat = productivityChart.data();
var refvalues;
for(i=0;i<refdat.length;i++){
	reference[refdat[i].name]={};
	refvalues = refdat[i].values;
	refvalues.forEach(function(d){
		reference[refdat[i].name][(d.x).toString()]=d.y;
	});
}
var ref = document.getElementById("ref");
ref.innerHTML = getFilterList();

}

getFilterList = function(){
var filters = [];
var list = dc.chartRegistry.list();
for (var i = 0; i < list.length; i++) {
    var chart = list[i];
    for (var j = 0; j < chart.filters().length; j++){
        filters.push({ChartID: chart.chartID(), Filter: chart.filters()[j]});  
    }
}

if(filters.length==0)return "All";
var chartnames = ["Species","ESU","Major Pop. Group","Population","Run","Age Data", "Has FracWild"];

var reftext = "<table cellpadding='3'><tr>";
for(i=0;i<filters.length;i++)reftext += "<th align='left' valign='top'>" + chartnames[+filters[i].ChartID-1] + "</th><td align='left'>" + filters[i].Filter + "</td></tr>";
reftext += "</table>";
return reftext;
}

var setCurrent = function(){
	var refs = document.getElementsByClassName("current_filters");
	var txt = getFilterList();
	for(i=0;i<refs.length;i++){
		refs[i].innerHTML = txt; 
	}
}

var toggleRecruits = function(){
	if (document.getElementById('norm_recruits').checked) {
			normalize_recruits=true;
			recruitsChart.redraw();
        } else {
            normalize_recruits=false;
			recruitsChart.redraw();
        }
    
}

var toggleHatchFrac = function(){
	if (document.getElementById('norm_hatchfrac').checked) {
			normalize_hatchfrac=true;
			originChart.redraw();
        } else {
            normalize_hatchfrac=false;
			originChart.redraw();
        }
    
}

var toggleAge = function(){
	if (document.getElementById('norm_age').checked) {
			normalize_age=true;
			ageChart.redraw();
        } else {
            normalize_age=false;
			ageChart.redraw();
        }
    
}

var toggleSpawn = function(){
	if (document.getElementById('norm_spawn').checked) {
			normalize_spawn=true;
			plotYears();
        } else {
            normalize_spawn=false;
			plotYears();
        }
    
}

var toggleWild = function(){
	if (document.getElementById('wild_only').checked) {
			wild_only=true;
			plotYears();
        } else {
            wild_only=false;
			plotYears();
        }
    
}

var toggleJacks = function(){
	if (document.getElementById('no_jacks').checked) {
			no_jacks=true;
			plotYears();
        } else {
            no_jacks=false;
			plotYears();
        }
    
}

var toggleThresh = function(){
	if (document.getElementById('show_thresh').checked) {
			show_thresh=true;
			if(bar_scale>min_bar_scale)plotYears();
        } else {
            show_thresh=false;
			if(bar_scale>min_bar_scale)plotYears();
        }
    
}

var toggleMAT = function(){
	if (document.getElementById('show_MAT').checked) {
			show_MAT=true;
			if(bar_scale>min_bar_scale)plotYears();
        } else {
            show_MAT=false;
			if(bar_scale>min_bar_scale)plotYears();
        }
    
}

var toggleCAT = function(){
	if (document.getElementById('show_CAT').checked) {
			show_CAT=true;
			if(bar_scale>min_bar_scale)plotYears();
        } else {
            show_CAT=false;
			if(bar_scale>min_bar_scale)plotYears();
        }
    
}

var toggleDelist1 = function(){
	if (document.getElementById('show_delist1').checked) {
			show_delist1=true;
			if(bar_scale>min_bar_scale)plotYears();
        } else {
            show_delist1=false;
			if(bar_scale>min_bar_scale)plotYears();
        }
    
}

var toggleDelist2 = function(){
	if (document.getElementById('show_delist2').checked) {
			show_delist2=true;
			if(bar_scale>min_bar_scale)plotYears();
        } else {
            show_delist2=false;
			if(bar_scale>min_bar_scale)plotYears();
        }
    
}

var toggleDelist3 = function(){
	if (document.getElementById('show_delist3').checked) {
			show_delist3=true;
			if(bar_scale>min_bar_scale)plotYears();
        } else {
            show_delist3=false;
			if(bar_scale>min_bar_scale)plotYears();
        }
    
}

var toggleGeomean = function(){
	if (document.getElementById('show_geomean').checked) {
			show_geomean=true;
			which_geomean = 10;
			d3.selectAll("#show_geomean5").property("checked",false)
			if(bar_scale>min_bar_scale)plotYears();
        } else {
            show_geomean=false;
			if(bar_scale>min_bar_scale)plotYears();
        }
    
}

var toggleGeomean5 = function(){
	if (document.getElementById('show_geomean5').checked) {
			show_geomean=true;
			which_geomean = 5;
			d3.selectAll("#show_geomean").property("checked",false)
			if(bar_scale>min_bar_scale)plotYears();
        } else {
            show_geomean=false;
			if(bar_scale>min_bar_scale)plotYears();
        }
    
}

var toggleMissing = function(){
	if (document.getElementById('show_missing').checked) {
			show_missing=true;
			plotYears();
        } else {
            show_missing=false;
			plotYears();
        }
    
}

var sels = document.getElementsByClassName("showEmptyPops");
//if true, show populations with no data at all
var toggleEmpty = function(_select){
	if (_select.selectedIndex==1) {
			show_empty=true;
			for(i=0;i<sels.length;i++)sels[i].selectedIndex=1;
			//d3.selectAll(".showEmptyPops")[0][0].options.selectedIndex=1;
			plotYears();
        } else {
            show_empty=false;
			for(i=0;i<sels.length;i++)sels[i].selectedIndex=0;
			//d3.selectAll(".showEmptyPops")[0][0].options.selectedIndex=0;
			plotYears();
        }
    
}

var qualtype = "spawn";

var selectQualType = function(){
	var ele = document.getElementsByName('qualtype');
	var i = ele.length;
	for (var j = 0; j < i; j++) {
		if (ele[j].checked) { //index has to be j.
			qualtype=ele[j].value;
		}
	}
	plotYears();
}

var selectSpecies = function(specie){
	dc.filterAll();
	if(specie != "All")species.filter(specie);
	display_back_button=false;
	dc.redrawAll();
	d3.selectAll(".dc-chart g.row text").style("fill","black");
}

var showAll = function(){
	dc.filterAll();
	dc.redrawAll();
}

var noNegative = function(val){
	return val < 0 ? 0 : val;
}

var tipdiv = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0);
	
var Current;
var Default;
var metadata;	

d3.csv("data/SPS3j.csv", function (data) {
d3.csv("data/SPS_metadata.sm.csv", function (_metadata) {
d3.csv("data/NOAA_SPS_Analysis.csv", function (_criteria) {

	metadata = _metadata;
	_criteria.forEach(function(d){
		criteria[(d.popid).toString()] = d;
	});

	var dateFormat1 = d3.time.format("%Y-%m-%d");
	
	var sum=0;
	nfish=0
	var nrows = data.length;
	
	var checkAge = function(age){
		if(age==-99)return "not reported";
		else if(age<0)return "negative value";
		else return "ok";
	}
	
	var scoreData = function(d){
		var ascore = d.has_age==1 ? (d.age_guess==1 ? 1 : (d.matchID>1 ? 2 : 3)) : 0;
		var hscore = d.has_fracwild==1 ? (d.hatch_guess==1 ? 1 : 2) : 0;
		var sscore = d.has_spawn ? 1 : 0;
		return {spawn: sscore, hatch: hscore, age: ascore};
	}
	
	Default = {};
	Default.plotted_range = [1945,2016];
	Current = {};
	Default.year_range = [+data[0].Year,+data[0].Year];
	Current.plotted_range = [Default.plotted_range[0],Default.plotted_range[1]];
	
	data.forEach(function (d) {
		var thisPop = pop_lookup[pop_lookup_from_ID[d.PopID]];
		d.Pop = thisPop.popcode;
		d.Mpop = thisPop.mpop;
		d.Run = thisPop.run;
		d.Species = thisPop.species;
		d.Spawners = +d.Spawners;
		d.ESU = thisPop.esu;
		d.Year = +d.Year;
		Default.year_range[0] = d.Year<Default.year_range[0] ? d.Year : Default.year_range[0];
		Default.year_range[1] = d.Year>Default.year_range[1] ? d.Year : Default.year_range[1];
		d.FracWild = +d.FracWild;
		d.Harvest = +d.Harvest;
		d.Broodstock = +d.Broodstock;
		d.agesum=0;
		d.has_age=0;
		for(i=2;i<8;i++){
			age=+d["Age"+i]
			if(age>0){
				d["Age"+i] = age;
				d.agesum += age;
				d.has_age=1;
			}
			else d["Age"+i] = 0;
		}
		d.unknown_age = d.agesum<=1 ? Math.round(1-d.agesum) : 0;
		d.has_spawn = +d.has_spawn;
		d.has_fracwild = +d.has_fracwild;
		d.matchID = + d.matchID;
		d.age_guess = +d.age_guess;
		d.hatch_guess = +d.hatch_guess;
		d.score = scoreData(d);
		d.Geomean = +d.Geomean;
		d.Geomean5 = +d.Geomean5;
		if(d.Spawners>0){
			thisPop.sumfish += d.Spawners;
			nfish += d.Spawners;
		}
		
	});
	
Current.year_range = [Default.year_range[0],Default.year_range[1]];
	
getGroup = function(dim){
	var group = dim.group().reduce(
        function (p, v) {
			//if(v.Spawners*v.has_spawn>0)
			p.n++;
            p.sum += v.Spawners*v.has_spawn;
			if(p.pops[v.Pop])p.pops[v.Pop] ++;
			else p.pops[v.Pop] = 1;
            return p;
        },

        function (p, v) {
			//if(v.Spawners*v.has_spawn>0)
			p.n--;
            p.sum -= v.Spawners*v.has_spawn;
			if(p.pops[v.Pop])p.pops[v.Pop] --;
			else p.pops[v.Pop] = 0;
			if(p.pops[v.Pop]<0)p.pops[v.Pop]=0;
            return p;
        },

        function () {
            return {
                n: 0, sum: 0, pops: {}				
            };
        }
    );
	return group;
}



	

	
ndx = crossfilter(data);
all = ndx.groupAll();

dc.dataCount("#dc-data-count")
        .dimension(ndx)
        .group(all)
var esuDim = ndx.dimension(function(d) {return d.ESU;});				
var mpopDim = ndx.dimension(function(d) {return d.Mpop;});
var popDim = ndx.dimension(function(d) {return d.Pop;});
var year1Dim = ndx.dimension(function(d) {return d.Year;});

var rrunDim = ndx.dimension(function(d) {return d.Run;});
var speciesDim = ndx.dimension(function(d) {return d.Species;});

var fishGroup = ndx.groupAll().reduce(
          function (p, v) {
		      ++p.n;
              p.cur += v.Spawners*v.has_spawn;
              return p;
          },
          function (p, v) {
		      --p.n;
              p.cur -= v.Spawners*v.has_spawn;
              return p;
          },
          function () { return {n:0,cur:0,tot:nrows,surv:0}; }
      );

	  
//initialized at top	  
yearGroup = year1Dim.group().reduce(
          function (p, v) {
		      ++p.n;
			  p.has_spawn += v.has_spawn;
			  p.has_fracwild += v.has_fracwild;
			  var wild = v.has_fracwild*v.FracWild;
			  var hatch = v.has_fracwild*(1-v.FracWild);
			  var unknown_origin = 1-wild-hatch;
			  p.Pops[v.Pop] = {spawn: noNegative(v.has_spawn*v.Spawners), wild: wild, hatch: hatch, unknown_origin: unknown_origin, Age2: v.Age2, Age3: v.Age3, Age4: v.Age4, Age5: v.Age5, Age6: v.Age6, Age7: v.Age7, unknown_age: v.unknown_age, missing: v.has_spawn==0 ? 1 : 0, matchID: v.matchID, score: v.score, geomean: v.Geomean, geomean5: v.Geomean5, harvest: v.Harvest, broodstock: v.Broodstock};
              return p;
          },
          function (p, v) {
		      --p.n;
			  p.has_spawn -= v.has_spawn;
			  p.has_fracwild -= v.has_fracwild;
			  delete p.Pops[v.Pop];
              return p;
          },
          function () { return {n:0, has_spawn: 0, has_fracwild: 0, Pops: {}}; }
 );

	  
filtered_fish.group(fishGroup).valueAccessor(function(d) {
      return d.n;
	});
	
total_fish.group(fishGroup).valueAccessor(function(d) {
      return d.tot;
	});

species
    .width(375)
    .height(150)
    .radius(70)
	.cx(70)
	.cy(80)
    .dimension(speciesDim)
	.keyAccessor(function (p) {return p.key;}).valueAccessor(function (p) {return Math.round(p.value.sum);})
	.legend(dc.legend().x(150).y(10).itemHeight(13).gap(5))	
    .group(getGroup(speciesDim));

var countPops = function(p){
	var keys = Object.keys(p.value.pops);
	var psum = 0;
	keys.forEach(function (dd) {
		if(dd.value>0)psum++;
	});
	return psum;
}

var addESULabel = function(){
		d3.select(esu.svg())
				.enter()
				.append("text")
                .attr("class", "x-axis-label")
                .attr("text-anchor", "middle")
                .attr("x", esu.width()/2)
                .attr("y", esy.height()-3.5)
                .text("Number of Populations");
		}		
	
esu
	.data(function(group) {
      return group.all().filter(function(kv) {
	  return kv.value.sum > 0.5; 
	  });
  })
    .width(375)
    .height(250)
	.margins({top: 0, left: 0, right: 10, bottom: 40})
	/*
    .radius(70)
	.cx(70)
	.cy(80)
	*/
    .dimension(esuDim)
	.keyAccessor(function (p) {return p.key;})
	.valueAccessor(function (p) {
		//return Math.round(p.value.sum);
		//return countPops(p);
		//return p.value.n;
		return esu_popcount[p.key];
		})
	//.legend(dc.legend().x(150).y(10).itemHeight(13).gap(5))
	//.minAngleForLabel(30)
    .group(getGroup(esuDim))
	.transitionDuration(100)
	.on('postRedraw',function(){
//		addESULabel();
		setCurrent();
		plotYears();
		});

mpopGroup = getGroup(mpopDim);		
mpop
	.data(function(group) {
      return group.all().filter(function(kv) {
	  return kv.value.sum > 0.5; 
	  });
  })
    .width(375)
    .height(325)
    .radius(70)
	.cx(70)
	.cy(80)
    .dimension(mpopDim)
	.minAngleForLabel(3)
	.keyAccessor(function (p) {return p.key;})
	.valueAccessor(function (p) {return p.value.n;})
	.legend(dc.legend().x(150).y(10).itemHeight(13).gap(5))
	.colors(color)	
    .group(mpopGroup);		
	
pop
	.data(function(group) {
      return group.all().filter(function(kv) {
	  return kv.value.sum > 0.5; 
	  });
  })
    .width(320)
    .height(150)
    .radius(70)
	.cx(70)
	.cy(80)
	.minAngleForLabel(3)	
    .dimension(popDim)
	.keyAccessor(function (p) {return p.key;}).valueAccessor(function (p) {return p.value.n;})
    .group(getGroup(popDim));
				

rrun
	.data(function(group) {
      return group.all().filter(function(kv) {
	  return kv.value.sum > 0.5; 
	  });
  })
    .width(320)
    .height(150)
    .radius(70)
	.cx(70)
	.cy(80)	
    .dimension(rrunDim)
	.keyAccessor(function (p) {return p.key;}).valueAccessor(function (p) {return p.value.n;})
    .group(getGroup(rrunDim));	
	
var calcAge = function(val,d){
	if(normalize_age) return d.value.spawn==0 ? 0 : val/(d.value.spawn);
	else return Math.round(val);
}	
	

var calcHatchFrac = function(val,d){
	if(normalize_hatchfrac) return d.value.spawn ? val/(d.value.spawn) : 0;
	else return Math.round(val);
}
				
	

	species.filter("Chinook");
	//pdx_speciesDim.filter("Chinook");
	dc.renderAll();
	plotYears();
	document.getElementById("spinner").style.visibility = 'hidden';
	d3.selectAll(".dc-chart g.row text").style("fill","black");
});
});
});


var plotYears = function(){
var active_pops = {};
var active_mpops = {};
for(i=0;i<all_pops.length;i++)active_pops[all_pops[i]] = false;
for(i=0;i<mpops.length;i++)active_mpops[mpops[i]] = false;
var mainplot, dat,year,keys;
var popdata = [];
var missing = [];
var geomeans = {};
var harvbrood = [];
var qdata = [];//quality control

//mapdiv.style("opacity", 0);
tipdiv.style("opacity", 0);

var _width = 940;
if(window.innerWidth < 1410)_width = 800;

var _height = pop.filters().length == 1 ? 500 : species.hasFilter() ? 900 : show_empty ? 1400 : 1200;

var margin = {top: 20, right: 50, bottom: 50, left: 275},
    width = _width - margin.left - margin.right,
    height = _height - margin.top - margin.bottom;
	

//remove previously created charts
d3.selectAll(".chosen").remove();

var svg1 = d3.select('#hatchplot').append("svg")
	.attr("class","chosen")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var svg2 = d3.select('#ageplot').append("svg")
	.attr("class","chosen")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
	
var svg3 = d3.select('#spawnplot').append("svg")
	.attr("class","chosen")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
	
var svg4 = d3.select('#qplot').append("svg")
	.attr("class","chosen")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var svg5 = d3.select('#metaplot').append("svg")
	.attr("class","chosen")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

var svg6 = d3.select('#analplot').append("svg")
	.attr("class","chosen")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);	
	
var focus1 = svg1.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var focus2 = svg2.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var focus3 = svg3.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var focus4 = svg4.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var focus5 = svg5.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var focus6 = svg6.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");	

var data = yearGroup.top(Infinity);

var max_spawn = 0;
var max_spawns = {};

var indexed_data = {};

var harvmax = 0;

data.forEach(function (d) {
  year=d.key;
  if(+year >= Current.year_range[0] & +year <= Current.year_range[1]){
	indexed_data[year.toString()] = d.value.Pops;
	var keys = Object.keys(d.value.Pops);
	keys.forEach(function (dd) {
		var mpop = pop_lookup[dd].mpop;
		active_mpops[mpop] = true;
		var spawn = d.value.Pops[dd].spawn;
		var harvest = d.value.Pops[dd].harvest;
		if(harvest>harvmax)harvmax=harvest;
		var broodstock = d.value.Pops[dd].broodstock;
		spawn = spawn > 0 ? spawn : 0;
		var wild = d.value.Pops[dd].wild;
		var spawn1 = wild_only ? wild*spawn : spawn;
		var spawn2;
		if(spawn1 > max_spawn)max_spawn=spawn1;
		max_spawns[dd] = max_spawns[dd] ? (spawn1 > max_spawns[dd] ? spawn1 : max_spawns[dd]) : spawn1;
		active_pops[dd] = true;
		popdata.push({year: year, Pop: dd, hatch: d.value.Pops[dd].hatch, wild: wild, unknown_origin: d.value.Pops[dd].unknown_origin, spawn: spawn1, Age2: d.value.Pops[dd].Age2, Age3: d.value.Pops[dd].Age3, Age4: d.value.Pops[dd].Age4, Age5: d.value.Pops[dd].Age5, Age6: d.value.Pops[dd].Age6, Age7: d.value.Pops[dd].Age7, unknown_age: d.value.Pops[dd].unknown_age, matchID: d.value.Pops[dd].matchID, missing: d.value.Pops[dd].missing, geomean: d.value.Pops[dd].geomean});
		if(d.value.Pops[dd].missing==1)missing.push({year: year, Pop: dd});
		qdata.push({Pop: dd, year: year, score: d.value.Pops[dd].score })
		var geomean = which_geomean==10 ? d.value.Pops[dd].geomean : d.value.Pops[dd].geomean5;
		if(geomean>0){
			if(!geomeans[dd])geomeans[dd] = [];
			geomeans[dd].push([year,geomean]);
		}		
		if(harvest>0 | broodstock>0){
			spawn2 = wild*spawn;
			if(harvest<0)harvest=0;
			if(broodstock<0)broodstock=0;
			harvbrood.push({year: year, Pop: dd, spawn: spawn2, harvest: harvest, broodstock: broodstock});
		}		
	});
   }
});


function filterByActive(obj) {
	if(obj.sumfish==0 & !show_empty)return false;
	else return true;
}

function filterBySpecies(obj) {
	if(species_filters.includes(obj.species))return true;
	else return false;
}

function filterByMpop(obj) {
	if(mpop_filters.includes(obj.mpop))return true;
	else return false;
}

function filterByEsu(obj) {
	if(esu_filters.includes(obj.esu))return true;
	else return false;
}

function filterByPop(obj) {
	if(pop_filters.includes(obj.popcode))return true;
	else return false;
}

var species_filters = species.filters();
var mpop_filters = mpop.filters();
var run_filters = rrun.filters();
var esu_filters = esu.filters();
var pop_filters = pop.filters();

var nmfs1 = [];
for(i=0;i<nmfs.length;i++)nmfs1.push(nmfs[i]);

nmfs1 = nmfs1.filter(filterByActive);
if(species_filters.length>0)nmfs1 = nmfs1.filter(filterBySpecies);
if(esu_filters.length>0)nmfs1 = nmfs1.filter(filterByEsu);
if(mpop_filters.length>0)nmfs1 = nmfs1.filter(filterByMpop);
if(pop_filters.length>0)nmfs1 = nmfs1.filter(filterByPop);

var pops = [];
var active_esus = {};
for(i=0;i<esu_ids.length;i++)active_esus[esu_ids[i]]=false;
for(i=0;i<nmfs1.length;i++){
	pops.push(nmfs1[i].popcode);
	active_pops[nmfs1[i].popcode]=true;
	active_esus[nmfs1[i].esuloc]=true;
}

d3.selectAll('.esuloc').style("opacity",0);
esu_ids.forEach(function(d){
	if(active_esus[d])d3.selectAll("." + d).style("opacity",.75);
});	
pops = pops.reverse();


//getmetadata for bars
var mdata = [];
metadata.forEach(function(d){
	d.Pop=pop_lookup_from_ID[d.id];
	if(active_pops[pop_lookup_from_ID[d.id]] & d.type==qualtype & +d.stop >= Current.year_range[0] & +d.start <= Current.year_range[1])mdata.push(d);
});

getDomain = function(){
	return pops;
}

var npops = getDomain().length;	
	
//var bar_scale = npops > 3 ? (height/npops)*.75 : (height/npops)*.70;
bar_scale = height/(npops+1)*.9;
bar_scale2 = height/(npops+1);


showPopulation = function(popcode){
	var pops = pop_lookup[popcode];
	pops.locations.forEach(function (d) {
	d3.selectAll("." + d)
	.style("fill-opacity",.75)
	.style("fill","red");
	d3.select("#maplabel").html('<strong>' + popcode + '</strong><br><strong>MPG: ' + pops.mpop + ' (' + pops.run + ')</strong>').style("opacity",1);
});
}

clearPopulation = function(){
	temp = d3.selectAll('.poploc').style("fill","DarkGray");
	d3.select("#maplabel").style("opacity",0);
	return temp;
	//mapdiv.selectAll("svg").selectAll("text").remove();
}

showMPG = function(popcode){
	var pop = pop_lookup[popcode];	
	var locs = mloc[pop.mpop+pop.species+pop.run];
	if(locs){
		for(i=0;i<locs.length;i++)d3.selectAll("." + locs[i]).style("fill-opacity",.75).style("fill","Gray");
	}

}

mouseOnMap = function(loc){
	some_pops = reverse_location[loc];
	some_pops.forEach(function(d){
		if(active_pops[d.popcode]){
			showMPG(d.popcode);
			showPopulation(d.popcode);
			setPopTextDecoration(d.popcode,"on");
			d3.select(".B" + d.popid).style("fill-opacity",.3);
		}	
	});
}

mouseOffMap = function(loc){
	some_pops = reverse_location[loc];
	clearPopulation();
	some_pops.forEach(function(d){
		setPopTextDecoration(d.popcode,"off");
		d3.select(".B" + d.popid).style("fill-opacity",.2);
	});
}

//clear previous, then show populations on map
clearPopulation().style("fill-opacity",0);

var cdata = {mat:[],cat:[],delist1:[],delist2:[], delist3: []};

var analdata = [];
nmfs1.forEach(function(d){
if(!criteria[d.popid])console.log(d.popid);
//if(criteria[d.popid])console.log(d.popcode + ',' + d.species + ',' + d.mpop + ',' + d.esu + ',' + criteria[(d.popid).toString()].popsize + ',' + criteria[(d.popid).toString()].priority + ',' + criteria[(d.popid).toString()].delist_class + ',' + criteria[(d.popid).toString()].delist_class.mat)
	d.locations.forEach(function (d) {
		d3.selectAll("." + d)
		.style("fill-opacity",.75)
	});
	var smax = max_spawns[d.popcode];
	if(bar_scale>min_bar_scale){
	if(show_MAT){
		mat=+criteria[(d.popid).toString()].mat;
		if(mat>0)(cdata.mat).push({Pop:d.popcode, value:mat});
		if(mat>smax)smax=mat
	}
	if(show_CAT){
		cat=+criteria[(d.popid).toString()].cat;
		if(cat>0)(cdata.cat).push({Pop:d.popcode, value:cat});
		if(cat>smax)smax=cat
	}
	if(show_delist1){
		delist1=+criteria[(d.popid).toString()].delist1;
		if(delist1>0)(cdata.delist1).push({Pop:d.popcode, value:delist1});
		if(delist1>smax)smax=delist1
	}
	if(show_delist2){
		delist2=+criteria[(d.popid).toString()].delist2;
		if(delist2>0)(cdata.delist2).push({Pop:d.popcode, value:delist2});
		if(delist2>smax)smax=delist2
	}
	if(show_delist3){
		delist3=+criteria[(d.popid).toString()].delist3;
		if(delist3>0)(cdata.delist3).push({Pop:d.popcode, value:delist3});
		if(delist3>smax)smax=delist3
	}	
	max_spawns[d.popcode] = smax;
	}

	analytes_enabled.forEach(function(dd){
		if(criteria[(d.popid).toString()]){
			value = criteria[(d.popid).toString()][dd];
			if(value && value != "")analdata.push({Pop:d.popcode, analyte: dd, value: analytes[dd].mappings[value.toString()]});
		}
	});
});


//pad the domain for analytes 
var adomain = [];
for(i=0;i<analytes_enabled.length;i++)adomain.push(analytes_enabled[i]);
for(i=analytes_enabled.length;i<9;i++)adomain.push('Var' + (i-1));


var nmpops = 0;
for(i=0;i<mpops.length;i++)if(active_mpops[mpops[i]])nmpops++;


popdata.forEach(function (d){
	d.local_smax = max_spawns[d.Pop];
	d.global_smax = max_spawn;
});



var getHatchBarData = function(data,mode){
	var bdata = [];
	data.forEach(function (d) {
	if(d.unknown_origin>0)bdata.push({year: d.year, Pop: d.Pop, type: "unknown", value: d.unknown_origin, offset: 0, spawn: d.spawn});
	if(d.hatch>0)bdata.push({year: d.year, Pop: d.Pop, type: "hatch", value: d.hatch, offset: d.unknown_origin, spawn: d.spawn});
	if(d.wild>0)bdata.push({year: d.year, Pop: d.Pop, type: "wild", value: d.wild, offset: (d.unknown_origin+d.hatch), spawn: d.spawn});
	});
	return bdata;
}

var getAgeBarData = function(data,mode){
	var bdata = [];
	data.forEach(function (d) {
	if(d.unknown_age>0)bdata.push({year: d.year, Pop: d.Pop, type: "unknown", value: d.unknown_age, offset: 0,agematch: d.matchID});
	if(d.Age7>0)bdata.push({year: d.year, Pop: d.Pop, type: "age7", value: d.Age7, offset: (d.unknown_age),agematch: d.matchID});
	if(d.Age6>0)bdata.push({year: d.year, Pop: d.Pop, type: "age6", value: d.Age6, offset: (d.unknown_age + d.Age7),agematch: d.matchID});
	if(d.Age5>0)bdata.push({year: d.year, Pop: d.Pop, type: "age5", value: d.Age5, offset: (d.unknown_age + d.Age7 + d.Age6),agematch: d.matchID});
	if(d.Age4>0)bdata.push({year: d.year, Pop: d.Pop, type: "age4", value: d.Age4, offset: (d.unknown_age + d.Age7 + d.Age6 + d.Age5),agematch: d.matchID});
	if(d.Age3>0)bdata.push({year: d.year, Pop: d.Pop, type: "age3", value: d.Age3, offset: (d.unknown_age + d.Age7 + d.Age6 + d.Age5 + d.Age4),agematch: d.matchID});
	if(d.Age2>0)bdata.push({year: d.year, Pop: d.Pop, type: "age2", value: d.Age2, offset: (d.unknown_age + d.Age7 + d.Age6 + d.Age5 + d.Age4 + d.Age3),agematch: d.matchID});
	});
	return bdata;
}

var getAgeBarData2 = function(data,mode){
	var agedata = [];
	data.forEach(function (d) {
		agedata.push({year: d.year, Pop: d.Pop, Age2: d.Age2, Age3: d.Age3, Age4: d.Age4, Age5: d.Age5, Age6: d.Age6, Age7: d.Age7, unknown: d.unknown_age,agematch: d.matchID});
	});
	return agedata;
}

var excludeJacks = function(d){
	if(pop_lookup[d.Pop].species != "Chinook")return {spawn: d.spawn, wild: d.wild, hatch: d.hatch, unknown_origin: d.unknown_origin};
	else if(d.unknown_age>0)return {spawn: d.spawn, wild: 0, hatch: 0, unknown_origin: 1};
	else return {spawn: Math.round(d.spawn*(1-d.Age3)), wild: d.wild, hatch: d.hatch, unknown_origin: d.unknown_origin};
}

var getSpawnData = function(data,mode){
	var bdata = [];
	data.forEach(function (d) {
	//get values excluding jacks, when appropriate
	//var before = {spawn: d.spawn, wild: d.wild, hatch: d.hatch, unknown_origin: d.unknown_origin};
	var xjacks = no_jacks ? excludeJacks(d) : {spawn: d.spawn, wild: d.wild, hatch: d.hatch, unknown_origin: d.unknown_origin};
	if(d.missing==0){
		bdata.push({year: d.year, Pop: d.Pop, spawn: xjacks.spawn, local_smax: max_spawns[d.Pop], hatch: xjacks.hatch, wild: xjacks.wild, unknown_origin: xjacks.unknown_origin});
	}
	});
	return bdata;
}

var bdata = getHatchBarData(popdata,0);
var adata = getAgeBarData(popdata,0);
var sdata = getSpawnData(popdata,0);
var adata2 = getAgeBarData2(popdata,0);

var xValue = function(d) { return x(d.year);}, // data -> value
	yValue = function(d) { return y(d.Pop);},
    x = d3.scale.linear().domain(Current.plotted_range).range([0, width]), // value -> display
	y = d3.scale.ordinal().rangeBands([0, height], 1);
	z = d3.scale.ordinal().rangeBands([0, width], 1);
	y.domain(getDomain());
	z.domain(adomain);	
    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.format("d"));
	var yAxis = d3.svg.axis().scale(y).orient("left");
	var zAxis = d3.svg.axis().scale(z).orient("top");

var addGridBackground = function(s){
		s.append("svg:rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("height", height)
            .attr("width", width)
            .attr("fill", "#E6E6E6")
            .style("opacity", "0.3");
}	
	
addGridBackground(focus1);
addGridBackground(focus2);
//addGridBackground(focus3);

function make_y_axis() {    // function for the y grid lines
  return d3.svg.axis().scale(y).orient("left").ticks(5)
}			

var addGrid = function(obj){	
	obj.selectAll(".grid").remove();
	obj.append("g")     // Draw the y Grid lines
	.attr("class", "grid")
    .call(make_y_axis()
      .tickSize(-width, 0, 0)
      .tickFormat("")
    );	
}

addGrid(focus1);
addGrid(focus2);
addGrid(focus4);
addGrid(focus5);

var addAxes = function(s,mtype){
  if(mtype != "anal"){
	s.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end");
  }
  else{
	s.append("g")
    .attr("class", "z axis")
	.attr("transform", "translate(0,0)")
	.call(zAxis)
	.selectAll("text")
	.attr("class", "label")
	.style("text-anchor", "middle")
	.style("opacity", function(d,i){
		if(i>analytes_enabled.length-1)return 0;
		else return 1;
	})
	//.attr("dx", "-.8em")
	.attr("dy", ".15em")
	//.attr("transform", "rotate(-65)");

  }
var y = s.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end");

var addClass = s.select(".y.axis")
	.selectAll(".tick")
	.select("text")
	.attr("class",function(d){
		return 'pop' + pop_lookup[d].popid;
	})
	  .on("click", function(d){
			var changed=false;
			if(pop.hasFilter(d)){
				changed=true;
				pop.filterAll();
				if(!mpop.hasFilter())display_back_button=false;
				
			}
			else if(pop_lookup[d].sumfish==0)changed=false;
			else{
				changed=true;
				pop.filter(d);
				display_back_button=true;
			}	
			if(changed)dc.redrawAll();
	  })
	  .on("mouseover", function(d) {
		showMPG(d);
		showPopulation(d);
		setPopTextDecoration(d,"on");	
        })                  
	  .on("mouseout", function(d) {
			clearPopulation();
			setPopTextDecoration(d,"off");
		})	
	
		
}


var addPopulationBackground = function(s){
	var popback = s.append("g").attr("class", "popback");
	popback.selectAll("rect")
      .data(colorpops)
	  .enter().append("rect")
      .attr("class", function(d) {return 'B' + pop_lookup[d].popid; })
	  .classed("popback",true)	  
	  .attr("width", margin.left)
	  //.attr("x", 10)
	  .attr("x", -margin.left)
      .attr("y", function(d,i) {var yy = y(d) - bar_scale2/2; return yy;})
      .attr("height", function(d) { return bar_scale2; })
      .style("fill", function(d){ return popColor(d);
	  })
	  .style("fill-opacity",function(d){ return .2;
		})
	  .on("click", function(d){
			var changed=false;
			if(pop.hasFilter(d)){
				pop.filterAll();
				if(!mpop.hasFilter())display_back_button=false;
				changed=true;
			}
			else if(mpop.hasFilter(pop_lookup[d].mpop)){
				mpop.filterAll();
				display_back_button=false;
				changed=true;
			}
			else if(pop_lookup[d].sumfish==0)changed=false;
			else{
				mpop.filter(pop_lookup[d].mpop);
				display_back_button=true;
				changed=true;
			}	
			if(changed)dc.redrawAll();
	  })
	  .on("mouseover", function(d) {
		showMPG(d);
		showPopulation(d);
		setPopTextDecoration(d,"on");
		d3.select(this).style("fill-opacity",.3);
        })                  
	  .on("mouseout", function(d) {
			clearPopulation();
			setPopTextDecoration(d,"off");
			d3.select(this).style("fill-opacity",.2);
		})	  
  
}

var hatchColor = function(type){
	if(type=="hatch")return "#add7e5";
	else return type=="wild" ? "#016986" : "#aaaaaa";
}

//var agecolors = ["#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b","#aaaaaa"];
//var agecolors = ["#6baed6","#4292c6","#2171b5","#08519c","#08306b","#081d58","#aaaaaa"];
//var agecolors = ["#bdbdbd","#6baed6","#2171b5","#08306b","#737373","#252525","#aaaaaa"];
var agecolors = ["#bdbdbd","#9ecae1","#4292c6","#08519c","#08306b","#525252","#aaaaaa"];
//var agecolors = ["#bdbdbd","#add7e5","#016986","#003c4c","#001419","#525252","#aaaaaa"];
//var agecolors = ["#bdbdbd","#add7e5","#017798","#015065","#002833","#525252","#aaaaaa"];

var ageColor = function(type){
/*
	switch(type) {
		case "age2":
			return "#1f77b4";
		case "age3":
			return "#ff7f0e";
		case "age4":
			return "#2ca02c";
		case "age5":
			return "#d62728";
		case "age6":
			return "#9467bd";
		case "age7":
			return "#8c564b";			
		default:
			return "#aaaaaa";
	}*/
	
	switch(type) {
		case "age2":
			return agecolors[0];
		case "age3":
			return agecolors[1];
		case "age4":
			return agecolors[2];
		case "age5":
			return agecolors[3];
		case "age6":
			return agecolors[4];
		case "age7":
			return agecolors[5];			
		default:
			return "#aaaaaa";
	}	
}



//var color = d3.scale.category20c();
		
//color.domain(all_pops);

var popColor = function(pop){
var mpop = pop_lookup[pop].mpop;
return color(mpop);
}

//var colorpops = ["bogus"];
var colorpops = [];
var popscales = [];
getDomain().forEach(function(d){
	colorpops.push(d);
	if(normalize_spawn)popscales.push({pop:d,max:max_spawns[d]});
	else popscales.push({pop:d,max:max_spawn});
});

//if(bar_scale<=50){
addPopulationBackground(focus1);
addPopulationBackground(focus2);
addPopulationBackground(focus3);
addPopulationBackground(focus4);
addPopulationBackground(focus5);
addPopulationBackground(focus6);
//}
						
addAxes(focus1,"hatch");
addAxes(focus2,"age");
addAxes(focus3,"spawner");
addAxes(focus4,"score");
addAxes(focus5,"meta");
addAxes(focus6,"harvbrood");

addPopulationBars = function(s){
var popscale = s.append("g").attr("class", "popscale");	  
popscale.selectAll("rect")
      .data(colorpops)
	  .enter().append("rect")
	  .attr("class", "poprect")
      .attr("width", 10)
	  .attr("x", function(d) { return -margin.left; })
      .attr("y", function(d,i) {var yy = y(d) - bar_scale2/2; return yy;})
      .attr("height", function(d) { return bar_scale2; })
      .style("fill", popColor)
	  
	  .on("mouseover", function(d) {
		//setPopTextDecoration(d,"on");	
		showMPG(d);
		//showPopulation(d);
        tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
        tipdiv.html('<b>' + pop_lookup[d].mpop + '</b>')  
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY) + "px");		
        })                  
	  .on("mouseout", function(d) {
			//setPopTextDecoration(d,"off");
			d3.selectAll("text.pop" + pop_lookup[d].popid).style('font-weight','normal');
			clearPopulation();
			tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);
		})
		.on("click", function(d){
			var changed=false;
			if(pop.hasFilter(d)){
				pop.filterAll();
				if(!mpop.hasFilter())display_back_button=false;
				changed=true;
			}		
			else if(mpop.hasFilter(pop_lookup[d].mpop)){				
					mpop.filterAll();
					display_back_button=false;
					changed=true;
				}
			else if(pop_lookup[d].sumfish==0)changed=false;
			else {				
					mpop.filter(pop_lookup[d].mpop);
					display_back_button=true;
					changed=true;
				}
				if(changed)dc.redrawAll();
			});

}

if(display_back_button){
d3.selectAll(".chosen")
	  .append("image")
      .attr("xlink:href", "back_icon.jpg")
      .attr("x", 0)
      .attr("y", 10)
      .attr("width", 80)
      .attr("height", 60)
	  .attr("class", "back_button")
	  .style("opacity",1)
	  .on("mouseover", function(d) {
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
            tipdiv.html('Show More')  
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY - 10) + "px");    
        })                  
	  .on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);   
		})
	  .on("click", function(d){			
				if(pop.hasFilter()){
					pop.filterAll();
					if(!mpop.hasFilter())display_back_button=false;
				}	
				else {
					mpop.filterAll();
					display_back_button=false;
				}	
				dc.redrawAll();
			});
} 

	

var addScale = function(s,x1,y1,max,height,int_only){
var r;
    var y = d3.scale.linear().domain([max,0]).range([0,height]); // value -> display
    if(int_only)r = d3.svg.axis().scale(y).orient("right").ticks(4).tickFormat(d3.format("d"));
	else r = d3.svg.axis().scale(y).orient("right").ticks(4).tickFormat(d3.format(".2f"));
	var g = s.append("g")
		.attr("transform", "translate(" + x1 + "," + y1 + ")")
		.attr("height",height)
		.append("g")
		.attr("class", "z axis")
		.call(r)
		.append("text")
		.attr("transform", "rotate(-90)");
		
}

var addRightScales = function(){
	popscales.forEach(function (d) {
		addScale(svg3,width+margin.left+1,y(d.pop) - bar_scale/2 + margin.top,d.max,bar_scale,true)
		addScale(svg6,width+margin.left+1,y(d.pop) - bar_scale/2 + margin.top,harvmax+.001,bar_scale,false)
	});
}

if(bar_scale>min_bar_scale)addRightScales();


var lineFunction = d3.svg.line()
	.x(function(d) { return d.x; })
	.y(function(d) { return d.y; })
	.interpolate("linear");

addGrid2 = function(s){
var lineData = [];
for(i=0;i<colorpops.length;i++){
	lineData.push({points:[{x: 0, y: y(colorpops[i]) + bar_scale/2},{x: width, y:y(colorpops[i]) + bar_scale/2}]});
}	
var grid = s.append("g").attr("class", "grid");

grid.selectAll("path")
      .data(lineData)
	  .enter()
	  .append("path")
      .attr("class", "line")
      .attr("d", function (d) {
      return lineFunction(d.points);
	  })
	.style("stroke", function (d) {
      return "#aaaaaa";
	});

}


addGrid2(focus3);
addGrid2(focus6);

addPopulationBars(focus1);
addPopulationBars(focus2);
addPopulationBars(focus3);
addPopulationBars(focus4);
addPopulationBars(focus5);
addPopulationBars(focus6);
 
var bars1 = focus1.append("g").attr("class", "bars1");	
var bars2 = focus2.append("g").attr("class", "bars2");
var bars3 = focus3.append("g").attr("class", "bars3");
var bars4 = focus3.append("g").attr("class", "bars4");
var qdat = focus4.append("g").attr("class", "qdat");
var mdat = focus5.append("g").attr("class", "mdat");
//var anals = focus6.append("g").attr("class", "anals");
var harv = focus6.append("g").attr("class", "harv");
  
		
bars1.selectAll("rect")
      .data(bdata)
	  .enter().append("rect")
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) { var yy = y(d.Pop) + d.offset*bar_scale - bar_scale/2; return yy;})
      .attr("height", function(d) { var h=d.value*bar_scale; return h; })
      .style("fill", function(d) { return hatchColor(d.type); });


bars2.selectAll("rect")
      .data(adata)
	  .enter().append("rect")
	  .attr("class",function(d) {
		return "match" + d.agematch;
	  })
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) { var yy = y(d.Pop) + d.offset*bar_scale - bar_scale/2; return yy;})
      .attr("height", function(d) { var h=d.value*bar_scale; return noNegative(h); })
      .style("fill", function(d) { return ageColor(d.type); });

bars3.selectAll("rect")
      .data(sdata)
	  .enter().append("rect")
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) {
	    var smax = normalize_spawn ? d.local_smax : max_spawn;
		var offset = d.spawn>0 ? bar_scale*(1-d.spawn/smax) : bar_scale; 
		var yy = y(d.Pop) - bar_scale/2 + offset;
		if(bar_scale>min_bar_scale){
		//	d3.select("#dataview").html(d3.select("#dataview").html() + '<br>' + d.Pop + ',' + d.year + ',' + d.spawn); 
		}
		return yy;
	  })
      .attr("height", function(d) {
		var smax = normalize_spawn ? d.local_smax : max_spawn;
		var h= d.spawn>0 ? (d.spawn/smax)*bar_scale : 0; 
		return noNegative(h); })
	  .style("fill", function(d) {
			if(d.unknown_origin>0)return hatchColor('unknown');
			else return hatchColor('wild')
	  })
	  .style("stroke","#999999");

if(!wild_only){
	bars4.selectAll("rect")
      .data(sdata)
	  .enter().append("rect")
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) {
	    var smax = normalize_spawn ? d.local_smax : max_spawn;
		var offset = bar_scale*(1-d.spawn/smax); 
		var yy = y(d.Pop) - bar_scale/2 + offset; 
		return yy;
	  })
      .attr("height", function(d) {
		var smax = normalize_spawn ? d.local_smax : max_spawn;
		var h;
		//if(wild_only) h= (d.spawn/smax)*bar_scale;
		//else h= d.hatch*(d.spawn/smax)*bar_scale; 
		h= d.hatch*(d.spawn/smax)*bar_scale; 
		return noNegative(h); 
	  })
      .style("fill", function(d) { return hatchColor('hatch'); })
	  .style("stroke","#999999");
}

//define linetypes and colors
//var critconf = {mat: {"stroke": "#0070c0"}, cat: {"stroke": "#953735"}, delist1: {"stroke": "#00b050"}, delist2: {"stroke": "#6600cc"}}
var critconf = {mat: {"stroke": "#bd0026"}, cat: {"stroke": "#800026"}, delist1: {"stroke": "#fc4e2a"}, delist2: {"stroke": "#e31a1c"}, delist3: {"stroke": "#800026"}}
//"#fc4e2a","#e31a1c","#bd0026","#800026"

addCriteria = function(s,type){
var thresh1 = s.append("g").attr("class", type);
thresh1.selectAll("path")
      .data(cdata[type])
	  .enter()
	  .append("path")
      .attr("class", "line")
      .attr("d", function (d) {
		var smax = normalize_spawn ? max_spawns[d.Pop] : max_spawn;
		var y2 = y(d.Pop) + bar_scale/2 - bar_scale*d.value/smax
		var points = [{x:0,y:y2},{x:width,y:y2}];
      return lineFunction(points);
	  })
	.style("stroke-width", 1)
	.style("stroke-dasharray", ("5, 5"))
	//.style("stroke", "#96AF5B");
	.style("stroke", function(d){
		return critconf[type].stroke;
	});
		
}

if(bar_scale>min_bar_scale){
	if(show_MAT)addCriteria(focus3,"mat");
	if(show_CAT)addCriteria(focus3,"cat");
	if(show_delist1)addCriteria(focus3,"delist1");
	if(show_delist2)addCriteria(focus3,"delist2");
	if(show_delist3)addCriteria(focus3,"delist3");
}

var geoline = d3.svg.line()
    .x(function (d) { 
		//if(d.obs_date < currentRange[0])return currentRange[0];
		return x(d.year);})
    .y(function (d) {
		local_smax = max_spawns[d.pop];
		var smax = normalize_spawn ? local_smax : max_spawn;
		return y(d.pop) + bar_scale/2 - bar_scale*d.geomean/smax;
	})
    .interpolate("linear");
//do geomeans
showGeomeans = function(){
	var geos = focus3.append("g").attr("class", "geomeans");
	var geokeys = Object.keys(geomeans);
	var gdata;
	geokeys.forEach(function (d) {
		gdata = [];
		geomeans[d].forEach(function (dd) {
			gdata.push({pop: d, year: dd[0], geomean: dd[1]});
		});
	geos.append("path")
    .attr("class", "line")
    .attr("d", function (d) {
		return geoline(gdata);
	})
	.style("stroke", "black")
    .style("fill", "none")
    .style("stroke-width", 1);
   });
}

if(bar_scale>min_bar_scale & show_geomean)showGeomeans();	
		
if(show_missing){
	var miss = focus3.append("g").attr("class", "missing");
	miss.selectAll("rect")
      .data(missing)
	  .enter().append("rect")
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) {
		var yy = y(d.Pop) - bar_scale/2; 
		return yy;
	  })
      .attr("height", bar_scale) 
      .style("fill", function(d) { return "gray"; })
	  .style("stroke","#999999")
	  .on("mouseover", function(d) {
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
            tipdiv.html('<table width="125"><tr><th>Year</th><td>' + d.year + '</td></tr><tr><th valign="top">Value</th><td>Missing</td></tr></table>')  
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY - 14) + "px");    
        })                  
	  .on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);   
		});	  		

}

var qcolors = {spawn: ["#bdd7e7","#08519c"],
			   hatch: ["#bdd7e7","#6baed6","#08519c"],
			   age: ["#bdd7e7","#6baed6","#3182bd","#08519c"]
			   };

var qcolor = d3.scale.ordinal().range(["#add7e5","#016986","#aaaaaa"]).domain(["Hatchery","Wild","No Data"]);			   
			   
var getQualityColor = function(d){
	return qcolors[qualtype][d.score[qualtype]];
}

var scoreText = {spawn: ["no estimate","estimated"],hatch: ["no estimate", "imputed across years", "estimated"], age: ["no estimate", "imputed across years", "imputed across populations", "estimated"]};

var getQualityHTML = function(d){
	return '<table width="200" cellpadding="3"><tr><th>Year</th><td>' + d.year + '</td></tr><tr><th valign="top">score</th><td>' + d.score[qualtype] +  '</td></tr><tr><th valign="top">desc.</th><td>' + scoreText[qualtype][d.score[qualtype]] +  '</td></tr></table>'
}

var qcolor = d3.scale.ordinal().range(qcolors[qualtype]).domain(scoreText[qualtype]);	

qdat
		.selectAll("rect")
		.data(qdata)
		.enter().append("rect")
		.attr("width", (x(2000)-x(1999)))
		.attr("x", function(d) { return x(d.year) - .5*(x(d.year+1)-x(d.year)); })
		.attr("y", function(d) {
			var yy = y(d.Pop) - bar_scale/2; 
			return yy;
		})
		.attr("height", bar_scale) 
		.style("fill", function(d) { return getQualityColor(d); })
	    .on("mouseover", function(d) {
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
            tipdiv.html(getQualityHTML(d))  
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY - 14) + "px"); 
			drawCursor(focus4,d.year,d.Pop);
			setPopTextDecoration(d.Pop,"on")
        })                  
	    .on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);
			d3.selectAll(".curse").remove();
			setPopTextDecoration(d.Pop,"off")
		});
		
//if(bar_scale<=50)d3.selectAll(".y.axis").selectAll("text").style("font-size","11px");
d3.selectAll(".dc-chart g.row text").style("fill","black");
d3.selectAll(".y.axis").selectAll("text").style("font-size","12px");

var getMetaHTML = function(d){
	return '<table width="500" cellpadding="3"><tr><th aligh="left" valign="top">Years</th><td>' + d.start + '-' + d.stop + '</td></tr><tr><th aligh="left" valign="top">Method</th><td>' + d.desc +  '</td></tr></table>'
}

mdat
		.selectAll("rect")
		.data(mdata)
		.enter().append("rect")
		.attr("width", function(d) {
			_start = +d.start < Current.year_range[0] ? Current.year_range[0] : +d.start;
			_stop = +d.stop > Current.year_range[1] ? Current.year_range[1] : +d.stop;
			return x(_stop+1)-x(_start)-3; 
		})
		.attr("x", function(d) { 
			_start = +d.start < Current.year_range[0] ? Current.year_range[0] : +d.start;	
			return x(_start)+3; 
		})
		.attr("y", function(d) {
			var yy = y(d.Pop) - bar_scale/2; 
			return yy;
		})
		.attr("height", bar_scale) 
		.style("fill", function(d) { return "#08519c"; })
	    .on("mouseover", function(d) {
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
            tipdiv.html(getMetaHTML(d))  
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY + 20) + "px"); 
			setPopTextDecoration(d.Pop,"on");
			showMPG(d.Pop);
			showPopulation(d.Pop);			
        })                  
	    .on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);
			d3.selectAll(".curse").remove();
			setPopTextDecoration(d.Pop,"off");
			clearPopulation(d.Pop);
		});

var getAnalyteColor	= function(analyte,value){
	
}

harv.selectAll("rect")
      .data(harvbrood)
	  .enter().append("rect")
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) {
	    //var smax = normalize_spawn ? d.local_smax : max_spawn;
		var offset = bar_scale*(1-d.harvest/harvmax); 
		var yy = y(d.Pop) - bar_scale/2 + offset; 
		return yy;
	  })
      .attr("height", function(d) {
		//var smax = normalize_spawn ? d.local_smax : max_spawn;
		var h;
		h= d.harvest*bar_scale/harvmax; 
		return noNegative(h); 
	  })
      .style("fill", function(d) { return hatchColor('wild'); })
	  .style("stroke","#999999");

	  
/*
anals
	.selectAll("circle")
	.data(analdata)
	.enter().append("circle")
        .attr("r", 5)
        .attr("cx", function(d) {  return z(d.analyte); })
        .attr("cy", function(d,i) { return y(d.Pop); })
		.style('fill', function(d) { 
			return "blue";
		})	
	.on("mouseover", function(d) {
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
            tipdiv.html(d.value)  
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY - 14) + "px");    
            })                  
		.on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);   
		});		
*/

		
var mouseOverHTML = function(d,mode){
if(mode=="spawner"){ 
	if(!wild_only)return '<table width="125"><tr><th>Year</th><td>' + d.year + '</td></tr><tr><th valign="top">Wild</th><td>' + Math.round(d.wild*d.spawn)+ '</td></tr><tr><th valign="top">Hatchery</th><td>' + Math.round(d.hatch*d.spawn) + '</td></tr><tr><th valign="top">Total</th><td>' + Math.round(d.spawn) +  '</td></tr></table>';
	else return '<table width="125"><tr><th>Year</th><td>' + d.year + '</td></tr><tr><th valign="top">Wild</th><td>' + Math.round(d.spawn)+ '</td></tr></table>';
	}
else if(mode=="hatch")return '<table width="125"><tr><th>Year</th><td>' + d.year + '</td></tr><tr><th>Wild Fraction</th><td>' + d.wild.toFixed(3) + '</td></tr><tr><th valign="top">Hatchery Fraction</th><td>' + d.hatch.toFixed(3) +  '</td></tr></table>';
else if(mode=="age"){
	var txt = '<table width="125"><tr><th>Year</th><td>' + d.year + '</td></tr>';
	txt = d.unknown>0 ? txt + '<tr><th>Unknown</th><td>' + d.unknown + '</td></tr>' : txt;
	txt = d.Age7>0 ? txt + '<tr><th>Age 7</th><td>' + d.Age7 + '</td></tr>' : txt;
	txt = d.Age6>0 ? txt + '<tr><th>Age 6</th><td>' + d.Age6 + '</td></tr>' : txt;
	txt = d.Age5>0 ? txt + '<tr><th>Age 5</th><td>' + d.Age5 + '</td></tr>' : txt;
	txt = d.Age4>0 ? txt + '<tr><th>Age 4</th><td>' + d.Age4+ '</td></tr>' : txt;
	txt = d.Age3>0 ? txt + '<tr><th>Age 3</th><td>' + d.Age3 + '</td></tr>' : txt;
	txt = d.Age2>0 ? txt + '<tr><th>Age 2</th><td>' + d.Age2 + '</td></tr>' : txt;
	txt = txt + '</table>';
	return txt;
}
else if(mode=="harv"){
	return '<table width="125"><tr><th>Year</th><td>' + d.year + '</td></tr><tr><th>Harvest Fraction</th><td align="right">' + d.harvest.toFixed(3) + '</td></tr><tr><th valign="top">Broodstock</th><td align="right">' + d.broodstock +  '</td></tr></table>';
}
	return "NA";
}

var setPopTextDecoration = function(pop,mode){
	if(mode=="on"){
		d3.selectAll("text.pop" + pop_lookup[pop].popid).style('text-decoration','underline');
		d3.selectAll("text.pop" + pop_lookup[pop].popid).style('text-decoration-color', 'red');
	}
	else{
		d3.selectAll("text.pop" + pop_lookup[pop].popid).style('text-decoration','none');
	}
}

var setMouseOver = function(target,datasource,mode){
	target.selectAll("rect")
      .data(datasource)
	  .enter().append("rect")
      .attr("width", (x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .5*(x(2000)-x(1999)); })
      .attr("y", function(d) {
	    return y(d.Pop) - bar_scale2/2; 
	  })
      .attr("height", function(d) {
		return bar_scale2; })
	  .style("fill-opacity", 0) 
	  .style("opacity", 0)
	  .style("z-index", 5)
	  .on("mouseover", function(d) {
			 
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
            tipdiv.html(mouseOverHTML(d,mode))	
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY - 14) + "px");
			drawCursor(target,d.year,d.Pop);
			setPopTextDecoration(d.Pop,"on");
			showMPG(d.Pop);
			showPopulation(d.Pop);
			if(mode=="age"){
				if(d.agematch > 0){
					var cname =  ".match" + d.agematch;
					bars2.selectAll(cname).style("stroke","black");
				}
			}
        })                  
	  .on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);
			d3.selectAll(".curse").remove();
			setPopTextDecoration(d.Pop,"off");
			clearPopulation();
			var cname = mode=="age" ? ".match" + d.agematch : ".bogus";
			bars2.selectAll(cname).style("stroke",null);
	  });
}


setMouseOver(focus1.append("g").attr("class", "mouseover"),sdata,"hatch");
setMouseOver(focus2.append("g").attr("class", "mouseover"),adata2,"age");
setMouseOver(focus3.append("g").attr("class", "mouseover"),sdata,"spawner");
setMouseOver(focus6.append("g").attr("class", "mouseover"),harvbrood,"harv");

var curse;	  

var drawCursor = function(target,year,pop){
	d3.selectAll(".curse").remove();  
	curse = target.append("g")
	.attr("class","curse")
	.style("z-index", -1)

    curse.append("line")
          .attr({
            "x1": -5,
            "y1": y(pop),
            "x2": 5,
            "y2": y(pop),
			"stroke-width": 4,
			"stroke":"black"
          })
		  .attr("class","line2")
		  ;


    // vertical crosshair
    
    curse.append("line")
          .attr({
            "x1": x(year),
            "y1": 0,
            "x2": x(year),
            "y2": height,
			"stroke-width":1,
			"stroke":"black"			  
            })
}

var dragging=false;
var range_selected = [];

var setRangeSelector = function(target){
	var range = target.append("g").attr("class", "range");
	var xdata = [];
	for (var i = Current.year_range[0]; i <= Current.year_range[1]; ++i) xdata.push(i);
	range
	  .selectAll("rect")
	  .data(xdata)
	  .enter()
	  .append("rect")
	  .attr("width",(x(500)-x(499)))
	  .attr("x", function(d) { 
		return x(d) - .5*(x(500)-x(499)); })
      .attr("y", height)
      .attr("height", 25) 
      .style("fill", function(d) { return "gray"; })
	  .style("fill-opacity",0)
	  .attr("class", function(d) {return 'range'+d;})
	  .on("mousedown",function(d){
		dragging = true;
		range_selected.push(d);
	  })
	  .on("mousemove",function(d){
		if(dragging)d3.selectAll(".range" + d).style("fill-opacity",.5);
	  })
	  .on("mouseup",function(d){
	    d3.event.preventDefault();
		dragging=false;
		range_selected.push(d);
		range_selected = range_selected[0]>range_selected[1] ? [range_selected[1],range_selected[0]] : range_selected;
		Current.year_range[0] = range_selected[0];
		Current.year_range[1] = range_selected[1];
		Current.plotted_range[0] = range_selected[0]-1;
		Current.plotted_range[1] = range_selected[1]+1;
		plotYears();
	  })	  
}

setRangeSelector(focus1);
setRangeSelector(focus2);
setRangeSelector(focus3);
setRangeSelector(focus4);
setRangeSelector(focus5);
setRangeSelector(focus6);

var setYearArrow = function(direction,xpos){

d3.selectAll(".chosen")
	  .append("image")
      .attr("xlink:href", direction + "_year_arrow.jpg")
      .attr("x", xpos)
      .attr("y", margin.top+height)
      .attr("width", 33)
      .attr("height", 20)
	  .attr("class", "year_button")
	  .style("opacity",1)
	  .on("mouseover", function(d) {
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 1);      
            tipdiv.html('Reset')  
                .style("left", (d3.event.pageX + 20) + "px")     
                .style("top", (d3.event.pageY - 10) + "px");    
        })                  
	  .on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);   
		})
	  .on("click", function(d){			
			if(direction=="left"){
				Current.year_range[0] = Default.year_range[0];
				Current.plotted_range[0] = Default.plotted_range[0];
			}
			else{
				Current.year_range[1] = Default.year_range[1];
				Current.plotted_range[1] = Default.plotted_range[1];			
			}
			plotYears()
		});

}

if(Current.year_range[0] != Default.year_range[0])setYearArrow('left',margin.left-45);
if(Current.year_range[1] != Default.year_range[1])setYearArrow('right',margin.left+width+15);	

var addLegend = function(s,color,xpos,ypos){
	var legendRectSize = 12;
	var legendSpacing = 4;
	
	var legend = s.selectAll('.legend')
	.data(color.domain())
	.enter()
	.append('g')
	.attr('class', 'legend')
	.attr('transform', function(d, i) {
    var height = legendRectSize + legendSpacing;
    var offset =  height * color.domain().length / 2;
    var horz = -2 * legendRectSize + xpos;
    var vert = i * height - offset + ypos;
    return 'translate(' + horz + ',' + vert + ')';
	});

	legend.append('rect')
	.attr('width', legendRectSize)
	.attr('height', legendRectSize)
	.style('fill', color)
	.style('stroke', color);
	
	legend.append('text')
	.attr('x', legendRectSize + legendSpacing)
	.attr('y', legendRectSize - legendSpacing)
	.text(function(d) { return d; });
}

var addHorizontalLegend = function(s,color,xpos,ypos){
	var legendRectSize = 12;
	var legendSpacing = 4;
	var legendXSpacing = 20;
	var x_position = [];
	var xpos1=xpos, xpos2=0;
	for(i=0;i<color.domain().length;i++){
		xpos2 = xpos1 + legendRectSize + legendSpacing;
		x_position.push({rect: xpos1, text: xpos2 });
		xpos1 = xpos2 + (color.domain()[i]).length*6 + legendXSpacing;
	}
	
	var legend = s.selectAll('.legend')
	.data(color.domain())
	.enter()
	.append('g')
	.attr('class', 'legend')
	.attr('transform', function(d, i) {
    var horz = x_position[i].rect;
    var vert = ypos + 5;
    return 'translate(' + horz + ',' + vert + ')';
	});

	legend.append('rect')
	.attr('width', legendRectSize)
	.attr('height', legendRectSize)
	.style('fill', color)
	.style('stroke', color);
	
	legend.append('text')
	.attr('x', legendRectSize + legendSpacing)
	.attr('y', legendRectSize - legendSpacing)
	.text(function(d) { return d; });
}

var color1 = d3.scale.ordinal().range(["#add7e5","#016986","#aaaaaa"]).domain(["Hatchery","Wild","Unknown"]);
//var color2 = d3.scale.ordinal().range(["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#aaaaaa"]).domain(["Age 2","Age 3","Age 4","Age 5","Age 6","Unknown"]);
var color2 = d3.scale.ordinal().range(agecolors).domain(["Age 2","Age 3","Age 4","Age 5","Age 6","Age 7","Unknown"]);
//addLegend(svg1,color1,20,45);
//addLegend(svg2,color2,20,50);
addHorizontalLegend(svg1,color1,300,5);
addHorizontalLegend(svg2,color2,300,5);
addHorizontalLegend(svg3,color1,300,5);
addHorizontalLegend(svg4,qcolor,300,5);

}; 






