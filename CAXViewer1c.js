var nmfs = [ 
  //{"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Chinook River Fall-run","popid": 2,"popcode": "CKLCRfaCHK","cname": "Chinook River","species": 1,"run": 2,locations: ["Chinook"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Grays River Fall-run","popid": 8,"popcode": "CKLCRfaGRY","cname": "Grays River","species": 1,"run": 2,locations: ["Grays"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Youngs Bay Fall-run","popid": 33,"popcode": "CKLCRfaYNG","cname": "Youngs Bay","species": 1,"run": 2,locations: ["Youngs"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Big Creek Fall-run","popid": 1,"popcode": "CKLCRfaBIG","cname": "Big Creek","species": 1,"run": 2,locations: ["BigCreek"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Elochoman River Fall-run","popid": 7,"popcode": "CKLCRfaELO","cname": "Elochoman River","species": 1,"run": 2,locations: ["Elochoman"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Clatskanie River Fall-run","popid": 5,"popcode": "CKLCRfaCLT","cname": "Clatskanie River","species": 1,"run": 2,locations: ["Clatskanie"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Mill Creek Fall-run","popid": 17,"popcode": "CKLCRfaMIL","cname": "Mill Creek","species": 1,"run": 2,locations: ["Mill"]},
  {"mpop": 4,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Scappoose River Fall-run","popid": 23,"popcode": "CKLCRfaSCP","cname": "Scappoose River","species": 1,"run": 2,locations: ["Scappoose"]},
  {"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Grays & Chinook Rivers","popid": 115,"popcode": "CMCOLxxGRC","cname": "Grays & Chinook Rivers","species": 2,"run": 1,locations: ["Chinook","Grays"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Youngs Bay","popid": 125,"popcode": "CMCOLxxYNG","cname": "Youngs Bay","species": 2,"run": 1,locations: ["Youngs"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Big Creek","popid": 110,"popcode": "CMCOLxxBIG","cname": "Big Creek","species": 2,"run": 1,locations: ["BigCreek"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Elochoman River","popid": 114,"popcode": "CMCOLxxELO","cname": "Elochoman River","species": 2,"run": 1,locations: ["Elochoman"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Clatskanie River","popid": 112,"popcode": "CMCOLxxCLT","cname": "Clatskanie River","species": 2,"run": 1,locations: ["Clatskanie"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Mill Creek","popid": 119,"popcode": "CMCOLxxMIL","cname": "Mill Creek","species": 2,"run": 1,locations: ["Mill"]},
  //{"mpop": 4,"esu": 1,"popname": "Chum Salmon (Columbia River ESU) - Scappoose River","popid": 122,"popcode": "CMCOLxxSCP","cname": "Scappoose River","species": 2,"run": 1,locations: ["Scappoose"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Grays & Chinook Rivers","popid": 135,"popcode": "COLCRxxGRC","cname": "Grays & Chinook Rivers","species": 3,"run": 1,locations: ["Chinook","Grays"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Youngs Bay","popid": 152,"popcode": "COLCRxxYNG","cname": "Youngs Bay","species": 3,"run": 1,locations: ["Youngs"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Big Creek","popid": 128,"popcode": "COLCRxxBIG","cname": "Big Creek","species": 3,"run": 1,locations: ["BigCreek"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Elochoman River","popid": 134,"popcode": "COLCRxxELO","cname": "Elochoman River","species": 3,"run": 1,locations: ["Elochoman"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Clatskanie River","popid": 131,"popcode": "COLCRxxCLT","cname": "Clatskanie River","species": 3,"run": 1,locations: ["Clatskanie"]},
  {"mpop": 4,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Mill Creek","popid": 140,"popcode": "COLCRxxMIL","cname": "Mill Creek","species": 3,"run": 1,locations: ["Mill"]},
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
  {"mpop": 1,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - North Fork Lewis River Spring-run","popid": 18,"popcode": "CKLCRspNFL","cname": "North Fork Lewis River","species": 1,"run": 3,locations: ["NFLewis"]},
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
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Coweeman River","popid": 132,"popcode": "COLCRxxCOW","cname": "Coweeman River","species": 3,"run": 1,locations: ["Coweeman"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Lower Cowlitz River","popid": 137,"popcode": "COLCRxxLCZ","cname": "Lower Cowlitz River","species": 3,"run": 1,locations: ["LCowlitz"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - North Fork Toutle River","popid": 142,"popcode": "COLCRxxNFT","cname": "North Fork Toutle River","species": 3,"run": 1,locations: ["NFToutle"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - South Fork Toutle River","popid": 147,"popcode": "COLCRxxSFT","cname": "South Fork Toutle River","species": 3,"run": 1,locations: ["SFToutle"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Tilton River","popid": 148,"popcode": "COLCRxxTIL","cname": "Tilton River","species": 3,"run": 1,locations: ["Tilton"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Upper Cowlitz River","popid": 149,"popcode": "COLCRxxUCW","cname": "Upper Cowlitz River","species": 3,"run": 1,locations: ["UCowlitz"]},
  //{"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Cispus River","popid": 129,"popcode": "COLCRxxCSP","cname": "Cispus River","species": 3,"run": 1,locations: ["Cispus"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Kalama River","popid": 136,"popcode": "COLCRxxKAL","cname": "Kalama River","species": 3,"run": 1,locations: ["Kalama"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - East Fork Lewis River","popid": 133,"popcode": "COLCRxxEFL","cname": "East Fork Lewis River","species": 3,"run": 1,locations: ["EFLewis"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - North Fork Lewis River","popid": 141,"popcode": "COLCRxxNFL","cname": "North Fork Lewis River","species": 3,"run": 1,locations: ["NFLewis"]},
  {"mpop": 1,"esu": 3,"popname": "Coho Salmon (Lower Columbia River ESU) - Salmon Creek","popid": 144,"popcode": "COLCRxxSAL","cname": "Salmon Creek","species": 3,"run": 1,locations: ["SalmonCr"]},
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
  {"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Lower Gorge Tributaries Fall-run","popid": 16,"popcode": "CKLCRfaLGT","cname": "Lower Gorge Tributaries","species": 1,"run": 2,locations: ["LGorge"]},
  {"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Upper Gorge Tributaries Fall-run","popid": 29,"popcode": "CKLCRfaUGT","cname": "Upper Gorge Tributaries","species": 1,"run": 2,locations: ["UGorge","Wind","LWhiteSalmon"]},
  {"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - White Salmon River Spring-run","popid": 32,"popcode": "CKLCRspWSR","cname": "White Salmon River","species": 1,"run": 3,locations: ["WhiteSalmon"]},
  {"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - White Salmon River Fall-run","popid": 31,"popcode": "CKLCRfaWSR","cname": "White Salmon River","species": 1,"run": 2,locations: ["WhiteSalmon"]},
  {"mpop": 5,"esu": 2,"popname": "Chinook Salmon (Lower Columbia River ESU) - Hood River Spring-run","popid": 10,"popcode": "CKLCRspHOO","cname": "Hood River","species": 1,"run": 3,locations: ["Hood"]},
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
  {"mpop": 11,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - Asotin Creek","popid": 57,"popcode": "CKSNRssASO","cname": "Asotin Creek","species": 1,"run": 4,locations: ["Asotin"]},
  {"mpop": 14,"esu": 7,"popname": "Chinook Salmon (Snake River Fall-run ESU) - Snake River Lower Mainstem","popid": 56,"popcode": "CKSNRfaSRL","cname": "Snake River Lower Mainstem","species": 1,"run": 2,locations: ["FallClearwater","FallGrandRonde","FallLowerSnake","FallTucannon"]},
  {"mpop": 11,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Tucannon River","popid": 325,"popcode": "STSNRsuTUC","cname": "Tucannon River","species": 5,"run": 5,locations: ["Tucannon"]},
  //{"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Clearwater River Lower Mainstem","popid": 303,"popcode": "STSNRsuCWL","cname": "Clearwater River Lower Mainstem","species": 5,"run": 5,locations: []},
  //{"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - North Fork Clearwater River","popid": 316,"popcode": "STSNRsuNCR","cname": "North Fork Clearwater River","species": 5,"run": 5,locations: []},
  {"mpop": 24,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - South Fork Clearwater River Upper Mainstem","popid": 96,"popcode": "CKSRSxxSFC","cname": "South Fork Clearwater River","species": 1,"run": 4,locations: ["SFClearwater"]},

  {"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Lolo Creek","popid": 314,"popcode": "STSNRsuLOL","cname": "Lolo Creek","species": 5,"run": 5,locations: ["Lolo"]},
  {"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Lochsa River","popid": 313,"popcode": "STSNRsuLCH","cname": "Lochsa River","species": 5,"run": 5,locations: ["Lochsa"]},
  {"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Selway River","popid": 322,"popcode": "STSNRsuSEL","cname": "Selway River","species": 5,"run": 5,locations: ["Selway"]},
  {"mpop": 3,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - South Fork Clearwater River","popid": 323,"popcode": "STSNRsuSFC","cname": "South Fork Clearwater River","species": 5,"run": 5,locations: ["SFClearwater"]},
  {"mpop": 11,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Asotin Creek","popid": 300,"popcode": "STSNRsuASO","cname": "Asotin Creek","species": 5,"run": 5,locations: ["Asotin"]},
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
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Little Salmon and Rapid River","popid": 312,"popcode": "STSNRsuLSR","cname": "Little Salmon and Rapid River","species": 5,"run": 5,locations: []},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - South Fork Salmon River","popid": 324,"popcode": "STSNRsuSFS","cname": "South Fork Salmon River","species": 5,"run": 5,locations: ["SFSalmon"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Secesh River","popid": 321,"popcode": "STSNRsuSEC","cname": "Secesh River","species": 5,"run": 5,locations: ["Secesh"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Chamberlain Creek","popid": 302,"popcode": "STSNRsuCHB","cname": "Chamberlain Creek","species": 5,"run": 5,locations: ["Chamberlain"]},
  {"mpop": 13,"esu": 6,"popname": "Steelhead (Snake River Basin DPS) - Middle Fork Salmon River Lower Mainstem","popid": 301,"popcode": "STSNRsuBCL","cname": "Big, Camas, and Loon Creek","species": 5,"run": 5,locations: ["MFSalmonLower"]},
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
  {"mpop": 19,"esu": 9,"popname": "Chinook Salmon (Snake River Spring/Summer-run ESU) - North Fork Salmon River","popid": 84,"popcode": "CKSNRssNFS","cname": "North Fork Salmon River","species": 1,"run": 4,locations: ["NFSalmon"]},
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

var nmfs_id = {"1": 56,"2": 68,"3": 69,"4": 87,"5": 96,"6": 60,"7": 62,"8": 66,"9": 67,"10": 74,"11": 76,"12": 82,"13": 98,"14": 57,"15": 93,"16": 58,"17": 59,"18": 61,"19": 63,"20": 75,"21": 78,"22": 81,"23": 80,"24": 92,"25": 65,"26": 71,"27": 90,"28": 91,"29": 64,"30": 70,"31": 84,"32": 85,"33": 86,"34": 88,"35": 89,"36": 97,"37": 99,"38": 72,"39": 73,"40": 77,"41": 79,"42": 83,"43": 94,"44": 95,"45": 100,"46": 101,"47": 102,"48": 217,"49": 218,"50": 223,"51": 215,"52": 216,"53": 219,"54": 220,"55": 221,"56": 224,"57": 248,"58": 249,"59": 250,"60": 251,"61": 254,"62": 258,"63": 265,"64": 252,"65": 253,"66": 255,"67": 257,"68": 260,"69": 262,"70": 263,"71": 264,"72": 266,"73": 256,"74": 259,"75": 261,"76": 267,"77": 303,"78": 313,"79": 314,"80": 316,"81": 322,"82": 323,"83": 305,"84": 306,"85": 310,"86": 326,"87": 307,"88": 308,"89": 309,"90": 300,"91": 325,"92": 301,"93": 302,"94": 304,"95": 311,"96": 312,"97": 315,"98": 317,"99": 318,"100": 319,"101": 320,"102": 321,"103": 324,"104": 327,"105": 328,"106": 329,"107": 330,"108": 331,"109": 190,"110": 196,"111": 197,"112": 199,"113": 153,"114": 155,"115": 156,"116": 157,"117": 158,"118": 159,"119": 160,"120": 161,"121": 162,"122": 163,"123": 166,"124": 167,"125": 168,"126": 171,"127": 175,"128": 182,"129": 183,"130": 185,"131": 187,"132": 189,"133": 191,"134": 194,"135": 198,"136": 200,"137": 204,"138": 205,"139": 207,"140": 208,"141": 164,"142": 165,"143": 170,"144": 172,"145": 192,"146": 201,"147": 203,"148": 154,"149": 169,"150": 176,"151": 177,"152": 178,"153": 179,"154": 180,"155": 184,"156": 186,"157": 188,"158": 195,"159": 202,"160": 206,"161": 173,"162": 174,"163": 181,"164": 193,"165": 34,"166": 39,"167": 40,"168": 44,"169": 48,"170": 49,"171": 51,"172": 52,"173": 53,"174": 54,"175": 42,"176": 47,"177": 41,"178": 50,"179": 36,"180": 37,"181": 35,"182": 38,"183": 43,"184": 45,"185": 46,"186": 55,"187": 126,"188": 127,"189": 209,"190": 210,"191": 211,"192": 212,"193": 213,"194": 214,"195": 273,"196": 274,"197": 276,"198": 277,"200": 278,"201": 280,"203": 284,"204": 285,"205": 288,"206": 289,"208": 294,"209": 296,"210": 298,"211": 299,"212": 3,"213": 6,"214": 11,"215": 12,"216": 13,"217": 14,"218": 15,"219": 18,"220": 19,"221": 20,"222": 21,"223": 22,"224": 24,"225": 25,"226": 26,"227": 27,"228": 28,"229": 30,"230": 1,"231": 2,"232": 5,"233": 7,"234": 8,"235": 17,"236": 23,"237": 33,"238": 9,"239": 10,"240": 16,"241": 29,"242": 31,"243": 32,"244": 4,"245": 103,"246": 104,"247": 105,"248": 106,"249": 107,"250": 108,"251": 109,"252": 113,"253": 116,"254": 117,"255": 120,"256": 121,"257": 124,"258": 110,"259": 112,"260": 114,"261": 115,"262": 119,"263": 122,"264": 125,"265": 118,"266": 123,"267": 111,"268": 129,"269": 132,"270": 133,"271": 136,"272": 137,"273": 141,"274": 142,"275": 144,"276": 145,"277": 147,"278": 148,"279": 149,"280": 151,"281": 128,"282": 131,"283": 134,"284": 135,"285": 140,"286": 146,"287": 152,"288": 138,"289": 139,"290": 143,"291": 150,"292": 130,"293": 225,"294": 227,"295": 228,"296": 229,"297": 232,"298": 233,"299": 234,"300": 236,"301": 237,"302": 238,"303": 239,"304": 240,"305": 241,"306": 242,"307": 243,"308": 245,"309": 246,"310": 230,"311": 231,"312": 235,"313": 244,"314": 247,"315": 226,"316": 332,"317": 333,"318": 334,"319": 335,"320": 336,"322": 222,"324": 283,"325": 291,"326": 295,"329": 297,"330": 268,"331": 269,"332": 270,"333": 271,"334": 272,"335": 275,"336": 279,"337": 281,"338": 282,"339": 286,"340": 287,"341": 290,"342": 292,"343": 293};

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

//topojson created 2016-09-24
var topos = {"type":"Topology","transform":{"scale":[0.0003850328247142057,0.00026785118308150904],"translate":[-124.05871554937967,43.790586402347174]},"arcs":[[[16838,9005],[42,2],[26,37],[22,95],[44,26],[17,70],[28,38],[49,16],[31,37],[70,27],[29,54],[53,38],[65,-13],[84,28],[78,-33],[26,65],[73,-1],[36,18],[70,4],[48,57],[92,45],[0,53],[29,31],[43,1],[96,-67],[32,-68],[42,-39],[67,-12],[63,16],[30,-47],[8,-59],[-13,-86],[-44,-59],[11,-35],[-9,-98],[25,-94],[-50,-168],[-60,-47],[-121,-49],[-12,-66],[-81,-63],[-37,5],[-56,-26],[-54,31],[-75,-11],[-39,-30],[-95,32],[-59,33],[-49,-27],[-169,88],[-76,3],[-50,-58],[-38,20],[-101,127],[-14,34],[-53,31],[5,31],[-67,23],[-12,40]],[[21540,8990],[53,16],[58,38],[31,-3],[60,73],[105,49],[27,24],[5,57],[44,32],[-5,107],[44,49],[5,75],[-27,81],[25,49],[101,117],[24,72]],[[22090,9826],[41,40],[42,2],[41,47],[89,-62],[44,-58],[76,15],[82,-21],[23,39],[90,-40],[134,32],[136,124],[30,9],[54,-43],[109,91],[62,104],[43,51],[44,-10],[84,25],[42,57],[89,32],[49,-24],[56,1],[23,74],[44,-6],[42,37],[85,20],[118,75],[68,53],[33,-57],[83,-16],[9,41],[38,10],[54,51],[11,53],[-82,58],[-32,44],[6,38],[53,6],[-11,53],[36,28],[5,51],[39,2],[30,54],[77,21],[29,84],[137,-34],[4,-27],[51,-42],[5,-79],[-47,-44],[17,-75],[53,-15],[3,-62],[54,-21],[56,37],[61,6],[210,-47],[46,66],[64,41],[33,-14],[45,31],[96,12],[70,-35],[25,-45],[-4,-134],[-57,-79],[34,-65],[-43,-79],[-2,-66],[17,-52],[-17,-36],[-69,-31],[-73,-10],[5,-76],[57,-69],[-12,-52],[30,-12],[-32,-58],[0,-61],[-98,-90],[32,-80],[-12,-98],[-48,-127],[16,-80],[-68,-49],[-35,5]],[[24912,9265],[-64,7],[-52,36],[-77,-10],[-70,39],[-2,49],[-44,23],[-91,-54],[-15,38],[-143,92],[19,61],[-2,108],[-66,10],[-84,-11],[-16,-57],[17,-63],[-67,-124],[-87,83],[-47,-14],[-21,64],[-46,4],[-47,-22],[-36,32],[-2,49],[-33,42],[-89,-58],[-79,17],[-63,-19],[-25,-79],[-89,-20],[-34,-68],[-70,27],[-53,-29],[-54,3],[-46,-21],[-69,-110],[-45,-9],[-11,-52],[-77,-23],[-49,-43],[56,-41],[28,-75],[-61,-51],[3,-76],[-45,-39],[-24,40],[-63,-12],[-13,31],[-60,11],[-123,-57],[-30,-47],[-52,-14],[-98,-72],[-83,7],[-52,26],[-37,40],[-46,5],[-58,-26],[-66,-57],[-125,-3],[-65,19]],[[21969,8772],[-167,107],[-62,-2],[-54,44],[-8,38],[-87,5],[-51,26]],[[21540,8990],[-60,97],[-140,14],[-65,31],[-45,68],[-3,58],[-117,8],[-59,-11],[-132,54],[-65,73],[17,37],[-150,84],[-52,-1],[-70,28],[-63,81],[-49,34],[12,33],[54,38],[157,-65],[41,51],[58,-8],[30,55],[112,-21],[42,-81],[11,-91],[43,-70],[62,-10],[86,-58],[65,-69],[60,-14],[41,28],[21,141],[-21,13],[-47,98],[61,137],[-29,80],[14,100],[109,24],[32,-37],[79,-9],[184,40],[141,52],[50,-55],[-9,-44],[85,-29],[59,-48]],[[24912,9265],[1,-94],[37,-22],[23,-142],[-5,-132],[-32,9],[-47,-36],[-35,26],[-69,-6],[2,-46],[-31,-33],[23,-80],[76,-38],[37,0],[39,-71],[-20,-106],[-68,-49],[-34,-52],[5,-34],[62,3],[20,-59],[-38,-47],[20,-34],[58,17],[118,-72],[24,-76],[-74,-74],[43,-60],[3,-39],[48,-37],[21,-49],[-45,-63],[-14,-73],[-73,40],[-84,-42],[-75,-3],[-41,-37],[2,-50],[-44,-31],[0,-36],[-92,-136],[57,-51],[-8,-60],[55,-58],[58,-22],[24,-66],[-49,-76],[34,-5],[3,-51],[-21,-40],[-145,-98],[65,-91],[-52,-86],[14,-31],[-53,-106],[-57,-50],[-58,-19],[-37,-39],[-83,-178],[-43,11],[-2,40],[-59,29],[-79,-10],[-86,80],[-54,5],[-26,-60],[-47,24],[-2,55],[-35,59],[33,19],[24,91],[-14,44],[18,57],[-41,60],[-45,21],[13,52],[-85,14],[-66,-25],[-59,66],[-40,16],[-17,56],[14,35],[-50,57],[-70,-32],[-25,10],[-3,107],[69,47],[-3,79],[40,71],[60,40],[-43,66],[-75,14],[-67,-8],[-61,56],[-24,-12],[-32,-109],[-81,-1],[5,-50],[-32,-23],[-2,-51],[-37,-32],[-97,-33],[-28,-45],[4,-47],[-67,-28],[-46,12],[-69,-27],[-79,51]],[[22889,7125],[52,108],[115,87],[34,93],[52,69],[-29,64],[-73,28],[-28,-22],[-93,41],[-107,-40],[-51,37],[-34,57],[4,71],[-49,20],[-67,142],[-26,79],[-51,26],[2,57],[-90,48],[-29,46],[15,31],[-38,45],[2,40],[-43,24],[-30,-32],[-23,-60],[-82,-72],[-19,-47],[-77,-52],[-56,-3],[-79,87],[-15,71],[10,46],[-154,18],[-17,57],[-36,15]],[[21779,8304],[2,47],[72,135],[-9,66],[-24,11],[2,81],[79,11],[48,49],[20,68]],[[22889,7125],[-32,-65],[-48,-42],[-223,-94],[-67,-79],[-30,0],[-44,-44],[-166,18],[-19,32],[38,63],[-36,54],[-88,7],[-35,-64],[-45,-14],[-7,-37],[-58,-34],[-100,79],[-45,63],[-43,26],[-91,-65],[-45,-115],[-106,5],[-32,38],[-70,-63],[-64,-5],[-12,-33],[-185,-22],[-106,54],[-85,71],[-22,81],[-133,-48],[-81,53],[-18,114],[40,50],[9,40],[58,79],[26,75],[-15,123],[-116,70],[-2,45],[-40,71],[-53,161],[32,31],[-3,111],[56,66],[53,104],[34,5],[82,83],[63,91],[48,-2],[33,-44],[72,-47],[64,-2],[17,-52],[31,-12],[101,25],[17,-28],[56,-22],[44,-77],[47,28],[68,6],[47,88],[48,20],[38,70],[5,48],[28,41]],[[22166,2661],[61,-7],[26,62],[64,54],[59,4],[-18,-48],[55,-46],[137,5]],[[22550,2685],[55,-91],[-66,-82],[88,-45],[30,38],[90,26],[54,-10],[24,-36],[43,8],[59,-35]],[[22927,2458],[7,-96],[-49,-98],[2,-35],[-35,-63],[-52,-54],[-38,-63]],[[22762,2049],[-94,45],[-53,-50],[-4,-37],[32,-43],[-32,-46],[-60,-33],[-34,-42],[-4,-53],[-30,-20],[-60,7],[-83,-88],[-71,-6],[-29,-32],[-57,49],[24,54],[-40,59],[-25,78],[11,90],[-25,101],[39,69],[8,84],[-17,41],[-28,170],[16,27],[-44,53],[36,49],[28,86]],[[1311,8371],[-48,36],[-28,89],[-75,57],[-61,68],[-87,29],[-40,52],[14,41],[-98,33],[-37,-12],[-50,59],[-69,30],[-39,60],[-43,19],[-127,0],[-23,23]],[[500,8955],[52,14],[64,-11],[141,56],[92,-120],[84,-8],[45,12],[70,-9],[73,42],[102,25],[7,55],[95,74],[35,46],[117,-20]],[[1477,9111],[21,-83],[-15,-16],[60,-77],[24,-122],[-21,-48],[65,-102],[-39,-89]],[[1572,8574],[4,-58],[-56,-76],[-99,-2],[-72,-33],[-38,-34]],[[22879,4107],[-56,35],[19,72],[26,37],[61,38],[9,74],[-17,67],[-48,-4],[-87,110],[18,111],[-34,9],[-59,-36],[-89,15],[-58,-10],[-36,17],[-49,91],[-60,-36],[-50,0],[-58,68]],[[22311,4765],[54,101],[47,150],[31,24],[-17,101],[75,41],[-1,63],[35,55],[-11,68],[23,48],[-13,75],[8,48]],[[22542,5539],[35,28],[43,-21],[43,38],[39,5],[67,-36],[42,36],[113,45],[56,-8],[69,-80],[106,-57],[7,-42],[138,42],[39,-5],[19,-53],[38,-28],[86,11],[74,69],[22,5],[52,75],[-14,116],[-61,41],[52,104],[32,35],[-10,81],[30,14],[-14,72],[14,47],[46,36],[-9,95],[75,108],[96,2],[83,25],[53,55]],[[24003,6394],[48,-25],[26,60],[54,-5],[86,-80],[79,10],[59,-29],[2,-40],[43,-11],[83,178],[37,39],[58,19],[57,50],[123,86],[72,-57],[72,34],[33,-19],[-15,-53],[65,-35],[31,-89],[99,-34],[61,-49],[13,-47],[-165,-19],[-54,22],[-17,-64],[-33,-29],[12,-46],[-39,-33],[-45,9],[-37,-31],[-14,-58],[-49,-31],[-37,9],[13,-82],[72,-72],[-30,-54],[-14,-141],[82,-63],[8,-51]],[[24842,5563],[-1,-76],[-66,-74],[-34,-109],[-56,-41],[-51,-81],[-42,-30],[9,-36],[-24,-52]],[[24577,5064],[-62,-13],[-40,24],[-39,-16],[-77,1],[-48,-103],[-92,-88],[0,-35],[-89,-63],[-39,-61],[-86,19],[-64,-66],[-11,-55],[-55,-5],[-39,-28],[-16,-45],[-50,-39],[-7,-67],[-71,-71]],[[23692,4353],[-48,-69],[-48,7],[-36,-47],[-78,14],[7,42],[-128,41],[-5,71],[-25,36],[-63,3],[-8,-39],[-77,-59],[-6,-26],[-66,-43],[1,-59],[-19,-33],[-70,-17],[-67,-103],[-77,35]],[[17829,5211],[32,31],[27,70],[-23,127],[73,56],[10,39],[70,34],[60,142],[-13,81],[63,26],[-8,68],[10,72],[46,60],[-19,65],[12,55],[-47,41]],[[18122,6178],[-9,53],[30,46],[-4,85],[40,30],[22,95],[61,21],[56,115],[-8,34],[67,73],[-18,94],[67,13],[27,141],[43,44],[54,-12],[34,24]],[[18584,7034],[-23,-62],[23,-77],[25,-1],[22,-69],[8,-75],[42,-97],[49,-11],[30,-45],[-23,-69],[35,-77],[17,-112],[37,-84],[14,-105],[-10,-45],[-69,-135],[14,-77],[-51,-55],[36,-39],[-53,-84],[-55,27],[-14,-49],[-87,-34],[-66,-97],[-43,-33],[-34,-71],[11,-77],[-33,-9],[-26,-47],[3,-84],[20,-39],[-60,-52],[-37,-61],[40,-99],[-134,-23],[-68,-3],[-131,89],[-18,60],[-30,32],[-116,66]],[[4512,1780],[-24,-75],[9,-60],[-66,-39],[-38,-42],[-176,44],[-35,-17],[-44,24],[-33,-15],[-75,16],[-17,31],[-94,13],[-46,-22],[-67,56],[-121,19],[-18,64],[-57,9],[-146,53],[-66,7],[-147,-3],[-44,-37],[-113,50],[-43,49],[-54,-34]],[[2997,1871],[-82,58],[-31,42],[-97,16],[-18,35],[-111,-81],[-42,27],[-65,1],[-17,69],[-25,23],[-34,109],[42,27],[-12,103],[-51,51],[-18,77],[-60,61],[-51,14],[3,107],[-22,167],[0,86],[-26,31],[1,48],[60,79],[22,88],[71,58],[2,-64],[48,-64],[83,-16],[75,-41],[134,-40],[76,-59],[142,-189],[28,-3]],[[3022,2691],[29,-38],[46,-12],[23,-128],[33,-39],[-33,-65],[-59,-19],[39,-71],[7,-48],[40,-14],[76,24],[43,-55],[58,19],[52,-16],[62,-68],[54,-17],[15,-71],[46,-35],[35,-53],[107,-40],[93,10],[57,-13],[18,-34],[112,-53],[73,-11],[122,-65],[93,58],[33,5],[120,-58],[61,13],[35,-17]],[[24907,3044],[-77,53],[-64,-2],[-47,87],[-15,71],[-90,102],[28,81],[-80,0],[-81,57],[-44,4],[10,63],[-50,51],[-34,2],[11,119],[-38,51]],[[24336,3783],[-4,68],[23,37],[-55,42],[-28,119],[-25,63],[64,68],[98,61],[-13,29],[59,69],[-29,28],[-1,90],[86,36],[13,30],[-23,44],[92,60],[54,99],[29,104],[38,67],[28,19]],[[24742,4916],[45,-39],[98,-28],[45,5],[35,-34],[-10,-64],[47,-58],[4,-86],[32,-52],[-25,-39],[26,-52],[-7,-62],[-38,-68],[26,-45],[53,-19],[74,38],[36,-11],[31,-49],[15,-111],[27,-19],[40,-77],[-31,-48],[-10,-69],[60,-34],[30,-53]],[[25345,3842],[-39,-49],[-76,-50],[9,-25],[-33,-106],[-67,-53],[-30,14],[-47,-59],[6,-46],[86,-40],[-35,-100],[3,-32],[-51,-31],[-8,-31],[-70,-21],[-34,-74],[-6,-70],[-46,-25]],[[17079,5003],[-10,-49],[-53,-46],[-26,-94],[-123,-24],[-80,2],[-10,-29],[-68,10],[-20,46],[-49,12],[-21,38],[-98,-9],[3,-62],[-58,-17],[-65,68],[-11,73],[-30,71],[-48,-29],[-58,-8],[-66,-30],[-5,-45],[-126,128],[-40,19],[-31,129],[-64,23],[30,-67],[-19,-41],[-58,-1],[-50,29],[-14,32],[-44,7],[-55,-17],[-25,-103],[-53,-37],[-144,85]],[[15490,5067],[-15,76],[57,81],[12,92],[-29,26],[37,68],[-13,37],[-164,183],[-12,117],[87,47],[76,-12],[55,11],[129,-9],[87,16],[43,21],[74,4],[19,40],[-17,174]],[[15916,6039],[41,-17],[23,79],[36,18],[-4,181],[-22,39],[6,84],[-27,45],[-18,71],[48,25],[34,-20],[61,-88],[89,-84],[6,-56],[36,-36],[27,-104],[23,-40],[58,-38],[22,-57],[65,-12],[55,-59],[23,1]],[[16498,5971],[8,-68],[-15,-25],[36,-62],[-6,-80],[-24,-30],[78,-142],[-24,-99],[43,-27],[-8,-40],[31,-42],[2,-43],[43,-34],[23,20],[21,76],[63,29],[68,2],[41,-76],[-59,-66],[94,-54],[35,-70],[59,-43],[-8,-70],[80,-24]],[[22542,5539],[-62,107],[-14,64],[-56,24],[-78,78],[-8,24],[-67,29],[-59,52],[-15,62],[-7,120],[-82,33],[-25,67],[-24,130],[71,60]],[[22116,6389],[91,-55],[96,95],[1,59],[41,17],[45,96],[11,56],[-11,64],[15,81],[40,-1],[44,44],[30,0],[67,79],[223,94],[82,96],[77,-40],[69,27],[46,-12],[67,28],[-4,47],[28,45],[97,33],[37,32],[2,51],[32,23],[-5,50],[81,1],[32,109],[24,12],[61,-56],[67,8],[75,-14],[43,-66],[-60,-40],[-40,-71],[3,-79],[-69,-47],[3,-107],[25,-10],[70,32],[50,-57],[-14,-35],[17,-56],[40,-16],[59,-66],[66,25],[85,-14],[-13,-52],[45,-21],[41,-60],[-18,-57],[14,-44],[-24,-91],[-33,-19],[35,-59],[1,-54]],[[112,9548],[42,-22],[53,18],[124,-119],[72,-43],[7,-48],[52,-48],[91,3],[27,32],[38,-32],[-77,-68],[-63,-74],[-88,18],[-96,90],[-63,117],[-72,45],[-59,9],[-26,-26],[-65,-19],[-9,44],[82,32],[30,91]],[[5222,9468],[-34,49],[-7,58],[-27,31],[-82,-3],[-45,19],[-15,62]],[[5012,9684],[70,13],[2,78],[24,35],[-34,48],[38,57],[-15,51],[8,68],[140,6],[38,-25],[68,6],[153,74],[15,-46],[79,-61],[88,47],[81,-14],[68,64],[140,-42],[57,23],[39,-11],[11,-45],[68,-36],[55,3],[31,-43],[47,19],[54,62],[77,10],[53,-35],[20,-46]],[[6487,9944],[9,-83],[-115,-130],[-11,-57],[81,1],[-2,-71],[26,-56],[-30,-60],[-92,-24],[-76,28],[-19,-91],[37,-40],[1,-37],[107,-28],[7,-65],[-75,25],[-45,-20],[-127,43],[-23,-47],[-66,-26],[-40,42],[-66,8],[-51,56],[-25,-25],[-70,-15],[-8,-32],[-87,-12],[-61,34],[-85,81],[-68,20],[-109,-52],[-45,59],[-47,33],[-57,11],[-33,54]],[[4807,4011],[22,54],[-80,25],[-62,52]],[[4687,4142],[16,154],[27,64],[42,29],[50,112],[-23,47],[-92,29],[-8,26],[64,71],[-13,50],[-44,55],[-5,55],[-103,55],[-18,50],[8,62],[-77,60],[-37,47],[11,130],[-41,64],[-106,4],[-64,41],[-16,48],[-51,15],[-14,31],[-79,17],[-71,-2],[-40,50]],[[4003,5506],[25,78],[-7,41],[-94,67],[-118,57],[-25,152],[-31,16],[-32,-35],[-75,26],[-33,96],[-70,-5],[-43,-31],[-82,22],[13,63],[35,9],[22,52],[-30,95],[46,77],[42,45],[-48,58],[-62,21],[4,47],[-47,27],[-25,70],[-65,59],[-25,74],[-46,43]],[[3232,6730],[46,91],[-13,33],[24,48],[66,62]],[[3355,6964],[97,-110],[77,-54],[118,-41],[102,0],[103,-41],[83,-66],[107,-39],[113,-14],[44,15],[113,9]],[[4312,6623],[0,-2]],[[4312,6621],[25,-34],[-12,-80],[-48,-31],[-4,-94],[31,-83],[30,-16],[97,-5],[65,-22],[80,-4],[33,-37],[-4,-69],[33,-46],[6,-90],[48,-14],[60,-55],[24,-68],[47,-40],[92,-9],[139,-81],[70,-17],[85,-81],[110,-120],[32,-10],[6,-50],[-28,-53],[37,-92],[57,-2],[141,-43],[41,-49],[29,-122],[70,-13],[19,16]],[[5723,5107],[7,-31],[-54,-35],[-45,-55],[38,-78],[-75,-36],[-46,-67],[30,-38],[-14,-51],[86,-57],[20,-40],[78,-8],[22,-29],[49,13],[33,-42]],[[5852,4553],[14,-126],[53,-154],[43,25],[38,-53],[3,-48],[83,-55],[-52,-43],[-28,-49],[-13,-70],[24,-38],[-59,-98],[-73,-9],[-61,-34],[-10,-31]],[[5814,3770],[-65,50],[-55,-16],[-90,8],[-60,-19],[-51,56],[-54,-22],[-61,11],[-72,80],[-48,27],[-73,-58],[-43,-80],[-25,34],[-102,-27],[-58,1],[19,43],[-1,102],[19,54],[-187,-3]],[[2663,7727],[-16,54],[13,54],[-21,71],[20,41],[-54,61],[-150,100],[16,56],[-103,37],[-55,45],[11,27],[-74,49],[-41,82],[-73,-15],[-46,24],[-109,129],[-53,38],[-49,-3],[-29,26],[-67,0],[-14,-60],[-34,6],[-35,-56],[-66,8],[-62,73]],[[1477,9111],[42,-53],[97,-70],[11,-72],[24,-36],[97,-91],[166,-24],[61,2],[64,-23],[112,28],[57,94],[61,58],[70,-34],[99,-22],[61,3],[69,-39],[89,-110],[118,-32],[67,-66],[134,-64],[35,-39],[33,-75],[26,-120]],[[3070,8326],[-59,34],[-74,0],[-62,-34],[-108,-37],[-42,-39],[1,-69],[26,-48],[3,-83],[20,-72],[-10,-51],[28,-86],[16,-87],[-47,-38],[-99,11]],[[3085,8378],[-12,58],[23,31],[-27,100],[-80,43]],[[2989,8610],[48,8],[-7,47],[-54,59],[1,66],[54,62],[67,22],[60,-36],[95,17],[28,38],[-14,46],[23,66],[99,-5],[44,31]],[[3433,9031],[55,58],[93,-16],[75,46]],[[3656,9119],[51,-49],[87,6],[47,-39],[86,-7],[53,-52],[108,-16],[85,-57],[0,-44]],[[4173,8861],[0,-65],[-31,-55],[-46,14],[-39,-43],[-56,19],[-57,-15],[-68,28],[-24,-16],[-75,24],[-83,-6],[-89,-44],[17,-34],[-88,-73],[15,-72],[-40,-33],[-79,28],[-51,41],[-143,-34],[-52,-65],[-87,10],[-12,-92]],[[7619,3500],[-16,128],[35,17],[45,58],[3,43],[41,61],[-1,35],[96,38],[-31,46],[-29,81],[-51,25],[7,44],[-34,22],[-71,-12],[-8,67],[-125,37],[-31,55],[8,38],[-21,53],[-44,27],[-7,105],[-44,37],[-109,-9],[-17,-28],[-70,25],[20,68],[-33,62],[-60,-17],[-65,80],[-19,50],[17,44],[-56,16],[-64,50],[-70,4],[-77,21],[-73,38],[-52,0],[-42,104],[-36,-18],[-234,10],[-80,18],[-6,-63]],[[6215,4960],[-50,17],[-22,-25],[-38,64],[-11,72],[-30,18],[-64,125],[1,49]],[[6001,5280],[101,57],[60,49],[14,65],[-41,46],[42,101],[-28,106],[-31,47],[6,140],[13,18]],[[6137,5909],[32,-67],[4,-80],[80,-65],[43,-55],[59,1],[17,-52],[43,-9],[33,86],[40,35],[34,65],[61,26]],[[6583,5794],[27,-33],[59,-8],[68,28],[60,51],[41,4],[39,36],[74,-16],[52,7],[55,-21],[131,-23],[47,-35],[77,33],[51,5],[49,36],[41,-79],[47,-58],[24,12],[115,-54],[38,-51],[78,18],[67,37],[-38,165],[69,75],[36,58],[24,-3],[156,125],[17,85],[66,54],[44,72],[-42,149],[21,96],[-36,17],[-9,53],[37,22],[-3,84],[-96,106]],[[8069,6841],[55,38]],[[8124,6879],[101,3],[62,-77],[15,-57],[58,-42],[6,-27],[57,-42],[3,-134],[85,-43],[9,-21]],[[8520,6439],[10,-28],[-29,-53],[34,-33],[-86,-50],[15,-47],[-34,-34],[-17,-116],[33,-26],[21,-127],[-23,-30],[20,-69],[-36,-75],[115,-79],[39,-73],[57,-52],[130,-30],[17,-57],[5,-133],[-12,-48],[-49,-59],[23,-43],[2,-72],[45,-65],[-36,-20],[-27,-55],[80,-104],[21,-77],[-51,-51],[26,-51],[-27,-47],[-36,-14],[-39,-54],[-34,-13],[-124,24],[-55,-27],[16,-38],[106,-84],[21,-85],[35,-16],[47,25],[44,-11],[58,38],[23,-20],[52,15],[16,-31],[-9,-62],[50,-14],[0,-93],[16,-55],[-29,-45],[11,-37],[-59,-105],[14,-27],[-39,-53],[-9,-48],[18,-120],[28,-45],[-48,-52],[-19,-49],[93,-122],[18,-80],[62,-65],[69,-9],[63,-59],[28,-70],[43,-29],[-15,-84],[63,-57],[-60,-57],[-21,-65],[22,-66],[-45,-42]],[[9161,2734],[-38,-16],[-31,-56],[-101,6],[-81,58],[-109,-2],[-82,19],[-62,-11],[-25,19],[-131,-2],[-95,72],[-119,-32],[-27,-30],[-43,36],[-67,-6],[-34,-43],[-104,-3],[-12,51],[-120,50],[-10,76],[-27,22],[1,61],[-37,9],[-44,59],[-69,160],[-49,38],[8,162],[-34,69]],[[5852,4553],[62,20],[8,81],[31,9],[72,-23],[134,127],[74,-4],[-2,50],[21,34],[-37,113]],[[7619,3500],[-84,61],[-56,60],[-23,67],[-34,21],[-83,-36],[-26,-50],[5,-46],[-84,-91],[-40,-13],[-116,16],[-31,-18],[-61,6],[-49,-33],[-125,16],[-29,58],[-54,18],[34,109],[2,51],[-21,36],[-148,-50],[-90,25],[-63,-15],[-28,17],[-59,-9],[-87,-54],[-78,-3],[-37,31],[-47,-2],[-55,21],[-101,-48],[-115,54],[-22,71]],[[26102,1391],[-35,-73],[-77,-27],[-104,-53],[-32,-53],[-13,-189],[-100,-37],[-14,-54],[-48,-95],[-44,-32],[-41,-69],[-59,21],[-38,-65],[-93,-34],[-70,-50],[-38,-2],[-25,39],[3,41],[-45,17],[-58,-107],[-61,-11],[-34,-78],[-29,-9],[12,-79],[-44,-15],[-40,15],[-83,3],[-28,30],[-69,-25],[4,-48],[-23,-37],[14,-44],[-38,-65],[-88,-5],[-49,24],[-11,36]],[[24604,261],[5,54],[-59,70],[-70,33],[-39,50],[-3,75],[-46,34],[20,26],[-58,52],[-72,-9],[-8,40],[26,39],[70,9],[19,35],[-12,44],[80,40],[17,52],[45,22],[-1,36]],[[24518,963],[41,37],[-23,37],[19,41],[-13,44],[-49,24],[-4,30],[29,80],[47,13],[15,35],[75,15],[-5,33],[52,81],[53,14],[73,-11],[123,51],[25,-13],[48,97],[71,32],[75,-101],[66,2],[43,54],[-11,147],[7,78],[56,-8],[109,26],[51,32],[138,8],[4,46],[55,95],[27,8],[29,-56],[48,-50],[6,-72],[97,-60],[23,-112],[42,-60],[36,-4],[59,-47],[-14,-97],[61,-41]],[[4379,7274],[13,73],[-60,71],[-40,103],[18,54],[-58,-4],[-57,34],[-35,-17],[-18,-52],[-62,-17],[-70,51],[-32,-6],[-47,-89],[-75,-10],[-74,-37],[-136,-10],[22,-46],[-71,-31],[-7,36],[-64,57],[-16,42],[-48,25],[-29,51],[-35,20],[-28,55],[-41,38],[5,30]],[[3334,7695],[95,-26],[31,-46],[43,-22],[-9,-35],[67,-43],[30,43],[-69,109],[-31,2],[-16,65],[62,136],[51,21],[84,-18],[67,42],[125,10],[29,-57],[157,49],[97,-109],[115,-18],[40,-24],[31,32],[64,1],[33,24],[85,-6],[33,-50]],[[4548,7775],[5,-80],[44,-20],[83,-10],[1,29],[100,53],[51,-3],[90,-50],[44,5],[22,37],[117,-76]],[[5105,7660],[35,-57],[-21,-49]],[[5119,7554],[-44,-52]],[[5075,7502],[-69,-41],[-47,23],[-58,-81],[-50,-117],[-45,25],[-65,4],[-107,-124],[-32,-14],[-65,28],[-81,-37],[-77,106]],[[2003,8859],[-4,-43],[-101,43],[-90,101],[-53,27],[-28,88],[-54,66],[-31,7],[-35,69],[-72,46],[-83,7],[-53,-24],[-57,1],[-65,-21],[-94,0],[-170,19],[-25,20],[-13,128]],[[975,9393],[41,-19],[88,30],[89,50],[149,25],[27,-32],[45,36],[14,59],[43,6],[101,63],[89,-37],[124,29],[56,-18],[87,55],[8,34]],[[1936,9674],[69,3],[15,38],[51,0],[46,25],[81,11],[50,-32],[59,-66],[-37,-40],[19,-45],[-17,-68]],[[2272,9500],[-74,-27],[-14,-52],[-72,-57],[15,-50],[-79,-120],[-31,-95],[4,-92],[-95,-88],[13,-36],[64,-24]],[[9379,14389],[-44,48],[-12,43],[-42,34],[-41,88],[-64,95],[-2,106],[-61,109],[-74,77],[-23,79],[-51,66],[-4,51],[-41,86],[-13,75],[-46,78],[-26,3],[2,76],[47,-4],[17,35],[-19,38],[-46,-32],[-47,55],[22,23],[-40,85],[-57,31],[-62,70],[-9,56],[-43,70],[-3,81],[-57,65],[-59,25],[-40,95],[-15,79]],[[8426,16275],[56,34],[111,10],[41,24],[86,-37],[30,-66],[48,-40],[109,-55],[44,-55],[241,-173],[-18,-116],[88,-25],[23,-70],[76,-23],[38,-35],[69,-25],[0,-97],[-13,-36],[86,-43],[5,-37],[121,-109],[30,-44],[-12,-54],[61,-38],[39,5],[66,-55],[-23,-49],[47,-93],[-8,-102],[-27,-38],[28,-68],[-14,-75],[47,-70],[15,-64],[35,-45],[-5,-65],[-56,-79],[-33,-21],[-46,11],[-50,-35],[-56,-79],[-89,-4],[-44,40],[-74,0],[-93,66],[-26,44]],[[6583,5794],[31,66],[31,166],[-23,63],[-63,54],[1,81],[27,40],[-17,37],[19,43],[82,55],[32,98],[35,65],[11,56],[-46,113],[26,172],[-16,114],[23,50]],[[6736,7067],[76,-10],[69,25],[84,-15],[73,0],[37,-61],[3,-69],[48,-86],[98,90],[60,28],[53,-91],[54,32],[22,-36],[-73,-15],[-9,-84],[73,-16],[53,20],[-12,-175],[32,53],[78,42],[28,56],[55,10],[-14,36],[75,40],[54,58],[170,6],[74,-23],[72,-41]],[[17601,6795],[-108,72],[-23,-34],[-87,11],[-38,79],[-58,19],[-44,63],[-72,38],[-38,37],[-40,-16],[-7,60],[-54,-6],[-97,11],[-118,60],[-27,41],[-93,3],[-59,-25],[-37,68],[-34,-20],[-75,62],[-22,-48],[-32,7],[-95,-44],[-51,-10]],[[16292,7223],[-27,12],[-13,63]],[[16252,7298],[-128,158],[18,123],[30,43],[38,156]],[[16210,7778],[24,9],[88,97],[34,-7],[11,54],[57,47],[117,36],[49,30],[71,10],[41,-9],[36,26],[14,-81],[162,-29],[19,-35],[124,19],[36,47],[68,52],[-18,52],[-83,-3],[-20,54],[-49,25],[-53,70],[-13,88],[44,57],[54,19],[13,45],[92,70],[14,81],[26,35],[-42,67]],[[17126,8704],[42,53],[76,-3],[169,-88],[49,27],[59,-33],[95,-32],[39,30],[75,11],[54,-31],[56,26],[37,-5],[81,63],[12,66],[121,49],[60,47],[50,168],[-25,94],[9,98],[-11,35],[44,59],[13,86],[-8,59],[-30,47],[-63,-16],[-67,12],[-35,41],[10,84],[79,29],[-1,56],[86,22],[22,64],[32,4],[23,-58],[32,-25],[4,-61],[86,-33],[35,-42],[38,20],[149,-26],[88,-115],[-28,-28],[-1,-100],[-25,-37],[35,-108],[8,-207],[31,-9],[9,-105],[58,-65],[34,12],[80,-34],[-116,-100],[6,-34],[-61,-32],[-6,-92],[-68,7],[-29,41],[-60,0],[-55,-28],[-85,16],[-53,-37],[25,-111]],[[18410,8435],[-92,10],[-30,-45],[-89,-56],[-56,2],[-86,-47],[-77,-63],[-80,-44],[-17,-64],[-39,-74],[-37,-32],[-41,-78],[-71,-11],[0,-34],[-44,-34],[7,-75],[-18,-28],[4,-122],[24,-104],[-24,-65],[4,-97],[-32,-51],[1,-51],[27,-31],[-37,-218],[19,-45],[-19,-56],[-6,-127]],[[15916,6039],[-7,-38],[-80,-38],[-24,67],[-62,27],[-115,-5],[-143,61],[16,48],[-18,91],[-31,41],[6,81]],[[15458,6374],[-12,69],[-40,108],[7,64],[-28,240],[14,76],[129,154],[61,42],[8,31],[61,-15],[34,42]],[[15692,7185],[73,48],[93,20],[68,0],[61,36],[74,10],[10,-49],[58,-97],[18,103],[72,11],[33,31]],[[16292,7223],[-35,-51],[31,-61],[56,-179],[1,-57],[25,-58]],[[16370,6817],[-30,-31],[58,-138],[-42,-60],[32,-29],[46,-104],[14,-61],[56,-67],[-72,-112],[12,-77],[59,-107],[-5,-60]],[[15100,4360],[-81,-2],[-28,27],[-156,82],[-150,-40],[-53,-47],[-37,9],[7,63],[-85,32],[-71,53],[-37,-19],[-32,60],[-24,95],[-86,46],[-11,26],[22,96],[-66,67],[-40,15],[-14,65],[70,72],[32,-12],[35,38],[52,-2],[20,107],[-39,36],[-36,-6],[-135,81],[-35,52],[-73,-23],[-166,121],[-68,84]],[[13815,5536],[37,120],[40,27],[43,-18],[33,42],[55,33],[54,-14],[39,61],[-2,44],[51,18],[26,39],[-17,49],[41,13],[127,-19],[54,-73],[20,-60],[59,20],[44,-8],[45,79],[66,-10],[25,136],[-12,128],[110,4],[14,37],[87,-26],[32,35],[56,-41],[2,-61],[92,20],[115,5],[46,88],[40,22],[-4,50],[29,26],[44,-4],[9,53],[77,4],[66,19]],[[15490,5067],[-129,24],[-45,-47],[47,-37],[7,-78],[-100,-147],[-108,-17],[-27,-131],[-22,-48],[7,-136],[-20,-90]],[[975,9393],[-16,21],[20,80],[94,103],[8,47],[65,104],[18,66],[70,132],[45,53],[41,-29],[94,13],[28,48],[78,16],[68,34],[158,-34],[53,-99],[50,-167],[0,-60],[87,-47]],[[6137,5909],[-73,77],[-102,34],[-24,-3],[-59,64],[-31,59],[0,72],[-100,85],[-62,138]],[[5686,6435],[33,27],[98,142],[42,3],[2,44],[48,23],[-21,50]],[[5888,6724],[49,56],[4,92],[52,39],[123,41],[68,45],[38,-28],[75,-10],[124,65],[51,67],[133,46],[16,53]],[[6621,7190],[56,-63],[32,-64],[27,4]],[[17603,5044],[44,19],[46,-33],[53,95],[20,90],[63,-4]],[[18584,7034],[103,46],[37,102],[16,138]],[[18740,7320],[64,27],[9,57],[65,38],[36,103],[27,19],[108,-51],[43,-72],[0,-33],[45,-108],[25,-23],[16,-85],[69,-36],[1,-35],[127,-184],[1,-62],[41,-123],[-45,-103],[-48,-65],[-49,-31],[7,-82],[-13,-98],[-39,-60],[9,-60],[-35,-36],[-21,-88],[-110,-68],[-61,-102],[8,-79],[24,-35],[-5,-74],[17,-30],[-21,-82],[-53,-59],[-30,-79],[20,-29],[-20,-53],[13,-81],[-25,-26],[7,-99],[-45,-42],[-46,17],[-25,-84],[-69,-55],[10,-47],[-45,-92],[19,-41],[-24,-29],[-42,20],[-15,57],[-36,8],[-50,-59],[-66,-19],[-55,19],[-142,8],[-37,-47],[-104,-28],[-29,-40],[-69,-8],[-43,38],[-66,20],[-81,-38],[-44,11],[-38,-27],[-62,6],[-59,-44],[-59,-4],[-50,42],[49,121],[-21,44],[0,104]],[[11245,2022],[-79,2],[-77,57],[-30,-10],[-49,48],[-58,-24],[-52,51],[18,39],[-13,71],[-91,92],[11,15],[-7,93],[-108,50],[-66,-2],[-78,-38],[-66,-3],[-47,-35],[-123,73],[-37,-67],[-59,-57],[-57,-10],[-47,40],[-55,97],[-46,-19],[-119,5],[-4,39],[-59,15],[-84,-57],[-68,5],[-38,63],[-36,15],[-16,94],[-55,-13],[-76,39],[-93,-63],[-72,3],[-64,62],[-84,42]],[[8520,6439],[115,38],[51,0],[106,70],[153,65],[-4,102],[49,-9],[38,20],[65,-4],[51,38],[22,-32],[57,-24],[43,18],[71,-47],[79,33],[51,3],[3,-53],[81,55],[-3,29],[76,40],[100,80],[59,-51],[5,-36],[98,-38],[15,-35],[68,25],[24,-51],[-15,-24],[22,-58],[70,-68],[24,-77],[46,3],[2,-87],[31,-40],[172,-142],[63,-41],[5,-64],[66,-65],[23,-50],[36,-9],[-5,-50],[42,-68],[153,-93],[51,-43],[13,-97],[38,-65],[-37,-80],[26,-61],[97,-52],[45,39],[83,-24],[91,0],[38,-22],[51,-91],[55,-50],[125,-48],[50,-117],[44,-16],[42,-46],[78,-17],[99,28],[66,-30],[11,-30],[72,-6]],[[11866,4914],[9,-44],[-31,-60],[-78,-62],[-71,23],[-61,-147],[-85,21],[-121,-52],[-62,14],[-22,-50],[-72,-24],[-34,25],[-72,-34],[-17,-41],[44,-58],[98,-57],[102,-76],[-9,-69],[37,-49],[41,-21],[16,-62],[73,-39],[92,8],[32,-33],[-16,-128],[-75,-58],[-30,-7],[-90,-117],[-9,-46],[29,-70],[32,15],[54,-81],[43,-27],[62,-118],[2,-77],[-53,-45],[9,-74],[65,-9],[54,-76],[27,-64],[68,-12],[61,-45],[79,-12],[-8,-41],[19,-52],[55,-46]],[[12053,2837],[-68,-111],[-56,-4],[-39,-54],[-84,-39],[-59,-78]],[[11747,2551],[-77,-11],[-18,-51],[3,-83],[-67,-70],[-17,-155],[-59,2],[-16,-33],[-76,39],[-27,-7],[-16,-56],[-59,63],[-18,42],[-82,-32],[2,-58],[25,-119]],[[14640,2447],[-60,-7],[-90,49],[-24,46],[-117,94],[-47,-22],[-25,20],[-47,106],[-48,22],[2,81],[-82,49],[2,71],[-129,0],[-62,37],[-57,61],[-73,-76],[-43,-65],[-77,-75],[-96,-43],[-47,41],[-29,-28],[-46,26],[-5,75],[-71,47],[-67,0],[-54,-23],[-21,35],[-56,-14],[-47,22]],[[13124,2976],[-25,37],[47,79],[-88,68],[-57,120],[-109,4],[-77,29],[-171,83],[-89,-1],[-48,-28],[-47,-2],[-40,189],[-31,47],[40,341],[-31,31],[-46,0],[-46,-27],[-27,38],[-56,21],[-7,67],[75,64],[38,-7],[35,67],[60,22],[47,82],[105,12],[22,37],[65,14],[25,45],[172,1],[25,10],[116,-20],[31,-34],[-29,-89],[42,-29],[23,-53],[66,17],[27,-40],[82,-33],[39,-66],[-29,-50],[23,-48],[74,46],[12,72],[92,-3],[23,-17],[7,-103],[60,-3],[21,21],[65,-27],[39,-67],[80,-47],[70,-72],[50,16],[60,-34],[55,-76],[7,-100],[34,-42],[63,-23],[19,-54],[47,54],[91,-31],[55,-35],[87,-31]],[[14387,3418],[4,-50],[34,-85],[83,-50],[67,-24],[56,18],[39,-44],[92,11],[81,-53],[5,-56],[58,-43],[32,-72],[-26,-68],[-60,-11],[-49,-108],[-33,-21],[-8,-85],[44,-87],[-7,-47],[-38,-47],[-61,-5],[-60,-44]],[[11866,4914],[82,-2],[47,32],[80,0],[33,66],[47,26],[47,81],[33,17],[81,6],[160,94]],[[12476,5234],[76,-7],[95,67],[52,-33],[53,15],[160,-26],[6,43],[43,39],[49,1],[65,81],[48,13],[42,41],[24,62],[29,-22],[32,50],[39,13],[92,-80],[36,-46],[86,4],[19,45],[71,43],[74,16],[64,-24],[84,7]],[[15100,4360],[-1,-47],[56,-33],[-36,-106],[32,-124],[-31,-51],[-80,29],[-72,-24],[5,-38],[-63,-67],[17,-45],[40,-25],[-9,-74],[42,-96],[-6,-73],[-105,-35],[-103,20],[-38,-11],[-42,-68],[-55,4],[-19,-32],[-48,21],[-45,-56],[-88,16],[-64,-27]],[[13124,2976],[-54,-17],[-47,77],[-64,13],[-29,-100],[-45,10],[-65,-14],[-13,-101],[-29,-46],[-49,20],[-166,21],[-118,-25],[-28,26],[-60,-5],[-25,22],[-99,34],[-86,-56],[-82,-22],[-12,24]],[[11747,2551],[45,-55],[52,-23],[10,-82],[32,-58],[-4,-46],[70,-45],[16,-58],[137,-42],[22,-30],[85,-15],[43,-69],[53,-63],[96,-34],[67,84],[1,27],[126,-17],[-5,-91],[58,-87],[115,8]],[[12766,1855],[-21,-79],[-148,-83],[-32,13],[-103,-52],[-28,-39],[-30,-207],[27,-77],[79,-79],[-5,-56],[82,-89],[1,-58],[33,-72],[27,-22],[-7,-88],[11,-45],[-11,-62],[-25,-11],[7,-59],[-28,-38],[-42,-131],[-28,-29],[-82,23],[-28,-40],[-74,-54],[-46,46],[-18,72],[-73,-72],[-46,-11],[-52,12],[0,67],[-58,26],[-10,48],[-44,-9],[-140,44],[-25,90],[-73,44],[2,52],[-36,31],[-15,95],[-107,73],[3,67],[-26,40],[13,34],[-17,85],[-19,25],[-127,22],[-22,41],[60,94],[-7,26],[72,89],[-37,97],[-36,37],[-2,71],[-31,51],[2,63],[-36,41],[-16,58],[-129,52]],[[14640,2447],[9,-51],[-41,-94],[-2,-36],[65,-71],[-62,-39],[-17,-64],[-43,-17],[-31,-44],[1,-49],[-26,-21],[-31,-99],[-37,-75],[-5,-58],[-46,-30],[-65,-14],[-38,19],[-69,151],[-48,-3],[-52,51],[-46,-8],[-45,-50],[-70,14],[-48,-22],[-29,-41],[0,-60],[-33,-90],[-41,-40],[-97,-48],[-82,-26],[-40,-45],[-32,27],[-49,-13],[-34,47],[-125,24],[-59,72],[-100,60],[-48,47],[-74,97],[-42,-13],[-53,35],[-45,-40],[-22,29],[-85,35],[-37,-39]],[[18122,6178],[-17,-62],[-44,-5],[-45,53],[-22,53],[-74,12],[-35,-39],[-74,39],[-28,69],[-29,-22],[-34,111],[-5,111],[-18,70],[14,48],[-20,127],[-90,52]],[[18410,8435],[-3,-117],[-17,-82],[44,-67],[2,-72],[17,-65],[44,-23],[-7,-64],[-25,-11],[-27,-101],[45,-51],[32,-183],[-8,-48],[45,-22],[44,-65],[65,-12],[30,-78],[39,-12],[10,-42]],[[3322,7706],[3,66],[-22,61],[-42,59],[0,63],[30,23],[12,80],[-104,98],[-43,78],[-19,61],[-52,83]],[[4173,8861],[125,48],[24,-22],[47,19],[51,49],[71,-8],[72,-71],[37,-55],[224,158]],[[4824,8979],[28,-20],[-71,-116],[-47,-39],[-2,-43],[-67,-9],[-36,-38],[-47,-90],[-29,-8],[-3,-68],[-27,-35],[-103,11],[-14,-26],[-100,-16],[-13,-54],[-42,-63],[-46,47],[-88,6],[-27,-48],[-67,-15],[-53,21],[-66,-103],[-77,9],[-35,-32]],[[3792,8250],[-53,7],[-31,-51],[-4,-44],[-65,-44],[-67,12],[-24,34],[-109,-8],[2,-75],[-18,-116],[-34,-133],[-60,-61],[-7,-65]],[[8162,7052],[-81,26],[-29,-8],[-76,29],[-93,9],[-61,-26],[-48,38],[-134,53],[-28,-29],[-60,-6],[-68,-28],[-133,-25],[-55,8],[-41,30],[-68,-10],[-50,95],[19,110],[-83,149],[40,54],[-8,43]],[[7105,7564],[44,37],[12,77],[51,78],[78,63],[46,80],[-18,64],[-92,14],[-2,57],[-28,17],[-34,-68],[-64,-8],[-22,-33],[-149,-115],[-80,24],[-81,72],[14,56],[-9,91],[18,43],[-19,55],[28,25],[34,88],[35,17],[-22,62],[-6,125],[-28,31],[12,64],[-7,83],[-60,111],[-47,108],[-39,122]],[[6670,9004],[53,64],[-12,72],[13,33],[-5,80],[12,67],[-57,88],[-63,163],[30,18],[41,116],[52,21],[18,-24],[103,12],[63,-12],[23,80],[-54,71],[-22,112],[-54,60],[34,63]],[[6845,10088],[40,-16],[86,-96],[19,19],[126,-47],[60,9],[79,48],[-18,26],[51,68],[114,60],[39,-38],[104,-39],[26,-55],[48,-29],[13,-90],[61,-42]],[[7693,9866],[2,-64],[30,-103],[-82,-41],[-49,-80],[-92,-49],[-26,-83],[37,-38],[-7,-52],[107,-96],[-39,-41],[39,-45],[55,-16],[110,-127],[145,3],[44,18],[172,-48]],[[8139,9004],[28,-65],[55,-61],[34,-2],[10,-57],[-30,-58],[-1,-183],[35,-64],[8,-51],[41,-19],[11,-155],[30,-47],[49,-15]],[[8409,8227],[-9,-157],[-25,-42],[0,-97],[43,-148],[-18,-24],[-6,-87],[40,-43],[92,7],[15,25],[83,17],[12,18],[104,-41],[-32,-31],[9,-89],[20,-23],[-17,-76],[28,-25],[10,-63],[-36,-47],[-78,-22],[-146,-1],[-56,20],[-34,-25],[-48,-72],[15,-39],[-109,-40],[-43,-49],[-61,-21]],[[2989,8610],[-32,0]],[[2957,8610],[61,30],[-14,34],[-51,33],[17,95],[-67,52],[-37,71],[4,69],[-32,20],[1,48],[-39,23],[-103,33],[-97,148],[4,50],[-41,6],[-69,194],[-69,15]],[[2425,9531],[-32,96],[52,64],[95,7],[-13,34],[56,50],[-26,66],[18,73],[51,93],[66,21],[46,44],[-9,39],[-80,92],[-6,47],[92,25],[140,-45],[214,105],[104,12],[27,-30],[85,-45],[41,4],[48,41],[56,-12],[51,31],[27,-8],[104,27],[80,42],[47,43],[-3,26],[102,4],[97,53],[7,100],[27,41],[39,-5]],[[4028,10666],[12,-34],[-19,-76],[-55,-50],[-1,-54],[-60,-42]],[[3905,10410],[-49,-53],[-11,-52],[-49,-93],[17,-108],[31,-40],[60,-4],[49,-47],[-1,-25],[78,-45],[39,-65]],[[4069,9878],[-119,-61],[-82,8],[-28,-100],[-101,15],[-12,-30],[-96,-37],[-40,-40],[-111,-29],[-40,41],[-37,0],[-53,38],[-63,-42],[-41,-9],[-28,30],[-37,-12],[-57,39],[-14,-52],[-65,-86],[-47,-11],[-1,-57],[-24,-24],[-3,-56],[80,-16],[34,17],[65,-12],[-48,-104],[67,-58],[30,-55],[26,7],[72,-31],[23,-29],[52,-5],[62,-86]],[[27481,2455],[-49,47],[-82,1],[-54,57],[0,89],[23,69],[53,13],[11,58],[-46,16],[-15,77],[-85,-50],[-23,31],[-49,1],[-41,56],[16,35],[-35,79],[16,45],[-83,109],[-56,-18],[-7,60],[-99,38],[-29,28],[-91,-19],[-75,39],[-72,-58],[-48,76],[-7,74],[35,36],[-48,105]],[[26541,3549],[-15,70],[-32,61],[-30,21],[-30,94],[51,58],[-16,44],[3,63],[26,22],[25,73],[64,9],[63,101],[-20,61],[-36,54],[16,41],[-11,49],[-41,42],[10,98],[-78,155],[62,124],[32,116],[-22,50],[13,40],[-104,83],[-79,146],[-98,-11],[-35,20],[-50,-5],[-30,43],[-92,75],[-16,46]],[[26071,5392],[23,65]],[[26094,5457],[8,50],[34,48],[30,87],[-12,54],[-33,34],[-15,112],[2,115],[33,76],[88,52],[22,44],[59,17],[38,83],[57,-16],[29,15],[68,-42],[45,46],[43,-87],[70,8],[43,-11]],[[26703,6142],[45,-32],[-45,-39],[3,-33],[70,-18],[38,-40],[9,-130],[-24,-44],[5,-64],[51,-44],[13,-42],[89,-111],[-33,-12],[19,-72],[47,-24],[45,-47],[32,-80],[97,-77],[27,-57],[-4,-79],[61,-48],[-24,-46],[70,-67],[101,12],[12,-32],[-43,-57],[92,-64],[6,-43],[64,5],[22,-21],[-7,-78],[15,-68],[28,-46],[-23,-35],[8,-143],[-54,-44],[-42,7],[-47,-30],[20,-71],[46,-57],[-13,-47],[31,-17],[29,-94],[69,-40],[17,-46],[76,-21],[94,-61],[41,-134],[159,103],[85,40],[24,-34],[74,-17],[52,-37],[26,-46],[125,-54],[-17,-46],[94,-117],[-3,-86],[53,-82],[38,-20],[5,-109],[36,-46],[0,-52],[-52,-26],[-43,-61],[68,-51],[-13,-27],[73,-45],[-18,-83],[56,-27],[46,-42],[-26,-81],[-26,-31],[54,-94],[0,-59],[-22,-59],[-52,23],[-21,49],[-32,9],[-45,-42],[-105,-21],[-49,-25],[-62,1],[-158,-30],[-154,-76],[-39,-67],[-89,122],[-77,87],[-16,59],[-67,73],[-109,-51],[-34,-45],[-94,-33]],[[5233,7259],[33,6],[93,-61],[72,-23],[5,-76],[78,-98],[12,-53],[-40,-64],[74,21],[84,-30],[71,-12],[120,-163],[53,18]],[[5686,6435],[-63,-3],[-34,27],[-28,87],[-74,3],[-49,-20],[-1,69],[-104,52],[-63,-121],[-90,-12],[-33,-25],[-68,14],[-72,-13],[-33,-29],[-61,16],[-43,-51],[-61,-9],[-62,38],[-30,41],[-71,-7],[-50,10],[-50,-21],[-49,3],[-117,51],[-9,72],[-59,14]],[[4312,6623],[-3,51]],[[4309,6674],[86,24],[95,-10],[8,52],[125,71],[120,-68],[67,-59],[91,66],[140,118],[35,73],[7,70],[40,54],[59,19],[-9,45],[41,51],[19,79]],[[15692,7185],[-18,82],[-54,70],[-53,-16],[-52,84],[-54,-7],[-25,80]],[[15436,7478],[39,-24],[97,-28],[44,-1],[12,146],[46,57],[98,23],[30,40],[27,77],[44,22]],[[15873,7790],[14,-16],[107,-37],[103,19],[3,47],[52,-23],[58,-2]],[[23774,2393],[-103,33],[-26,102],[27,15],[-26,94],[-43,47]],[[23603,2684],[18,102],[70,63],[11,48],[53,73],[-7,27]],[[23748,2997],[47,34],[39,79],[47,25],[47,-4],[29,53],[-10,73],[-31,99],[-42,29],[23,32],[-21,121],[32,26],[62,108],[55,124],[61,-3],[54,15],[48,-30],[45,12],[35,-26],[68,19]],[[24907,3044],[-32,-79],[-121,-132]],[[24754,2833],[-58,-54],[-59,13],[-66,-55],[-48,-87],[-38,7],[-56,-56],[-91,-9],[-15,-31],[-67,-5],[-8,-54],[-101,47],[-48,-10],[-63,44],[-45,-37],[-35,-102],[-84,5],[-28,-41],[-70,-15]],[[17476,5163],[-37,17],[-58,-5],[-42,48],[-46,-4],[-56,78],[-100,56],[-13,51],[-73,42],[-33,61],[-61,14],[8,108],[17,61],[-7,43],[-69,144],[-46,21],[-62,104],[-31,129],[-67,117],[13,144],[-68,70],[-74,167],[-15,60],[-34,12],[-61,92],[-16,50],[-75,-26]],[[17603,5044],[-53,82],[-74,37]],[[26541,3549],[-33,-37],[-31,17],[-55,-72],[-4,-27],[-71,-1],[-68,-48],[-81,44],[-30,-45],[-48,27],[-33,-22],[-59,1],[-32,-28],[4,-49],[-37,-67],[-8,-70],[27,-65],[-7,-64],[-87,-58],[14,-58],[-10,-87],[35,-25],[1,-51],[80,-106],[49,-115],[6,-57],[35,-11],[20,-82],[23,-7],[38,-72],[-8,-75],[31,-86],[-2,-63],[43,-89],[41,-23],[17,-79],[65,-102]],[[26366,1797],[-56,-46],[-73,-26],[2,-52],[-51,-28],[-19,-48],[26,-65],[-17,-69],[-76,-72]],[[24518,963],[-88,37],[-30,34],[-59,-14],[-49,61],[-65,26],[-82,-31],[-48,9],[-39,126],[-40,27],[3,50],[45,88],[-72,15],[-37,53],[-92,-4],[-50,16],[-30,74],[-8,59],[-64,33]],[[23713,1622],[-55,29],[-14,53],[37,20],[20,62],[-11,156],[-74,-54],[-15,60],[-42,27],[38,116],[38,54],[31,13],[30,51]],[[23696,2209],[70,-4],[89,-91],[43,24],[81,-61],[58,-8],[48,19],[-5,-63],[14,-37],[85,-110],[-3,-56],[41,-34],[68,45],[44,48],[47,10],[7,62],[82,63],[38,70],[24,8],[42,102],[69,46],[-14,83],[23,63],[95,30],[86,86],[33,50],[-2,47],[-47,34],[-20,51],[16,34],[-19,66],[-35,47]],[[25345,3842],[64,20],[73,97],[57,90],[24,65],[71,78],[-5,90],[-23,52],[18,62],[57,13],[24,73],[114,59],[85,34],[-31,68],[-1,73],[35,54],[6,62],[-30,115],[95,81],[65,39],[13,41],[-29,26],[-41,76],[42,123],[43,59]],[[6427,7321],[-28,-11],[-23,-62],[-44,-34],[-10,-44],[-64,1],[-52,69],[-78,79],[-28,9]],[[6100,7328],[-15,44],[48,34],[-113,56],[-1,75],[-45,35],[-25,68],[-59,69],[22,32],[-23,92],[-26,43],[31,55],[1,52],[-80,34],[-3,44],[37,67],[4,80],[18,31]],[[5871,8239],[30,8],[69,70]],[[5970,8317],[70,-35],[64,-65],[19,-46],[-13,-51],[50,-60],[29,-61],[77,-42],[63,-10],[36,17],[86,-4],[-3,-76],[13,-113],[-65,-13],[-6,-76],[-60,-76],[46,-51],[18,-56],[-23,-72],[56,-106]],[[23774,2393],[-11,-48],[-36,-20],[-46,-71]],[[23681,2254],[-112,57],[-112,-21],[-100,-120],[-6,-135],[-66,-49],[-72,14],[-64,-62],[-48,-13],[-39,-35]],[[23062,1890],[-31,-42],[-46,9],[-12,62],[-152,41],[-41,34],[-18,55]],[[22927,2458],[68,41],[92,-12],[35,38],[2,55],[57,63],[31,-30],[68,3],[35,-63],[90,40],[120,113],[39,-56],[39,34]],[[4512,1780],[78,25],[9,80],[29,73],[68,62],[68,-18],[33,-38],[46,47],[54,3],[103,72],[19,73],[-6,66]],[[5013,2225],[85,-64],[103,109],[35,-2],[38,-123],[-17,-30],[35,-56],[89,-13],[141,97],[101,-13],[15,21],[101,-61],[28,-52],[3,-125],[-15,-72],[-56,-37],[-32,-64],[-42,-21],[-58,-74],[11,-94],[-8,-71],[-31,-24],[21,-87],[88,-21],[54,-42],[21,-68],[-100,-23],[-30,-96],[-24,-23],[43,-77],[0,-72],[54,-8],[48,-27],[42,8],[37,-29],[16,-66],[-13,-52],[-78,-121],[-12,-110],[-19,-89],[-20,-15],[-76,20],[-58,-15],[-12,-58],[-48,-75],[-61,-55],[-27,44],[-57,25],[-54,0],[-89,55],[-18,39],[-37,8],[-44,53],[-37,-6],[-25,-80],[-152,10],[-31,41],[13,93],[-28,82],[-75,14],[-45,78],[-81,27],[-41,-26],[-27,-44],[-35,48],[8,103],[-80,44],[-27,36],[-52,1],[-31,74],[-46,-29],[-77,15],[-34,-40],[-81,37],[0,28],[-112,73],[-84,-7],[-32,32],[-45,-7],[-50,-54],[-60,-24],[-47,29],[-110,-34],[-115,-64],[-37,-39],[-48,24],[-59,-48],[-84,-11],[-98,24],[-23,25],[-112,-9],[-10,32],[-89,0],[-63,90],[-137,30],[-56,57],[-26,77],[61,34],[73,-8],[26,50],[42,30],[-19,78],[-50,33],[-8,33],[54,86],[5,60],[51,35],[74,77],[11,96],[72,86]],[[8816,18451],[70,76],[34,8],[-6,56],[37,10],[21,154],[28,42],[166,31],[-27,69],[23,46],[-26,39],[23,32],[-29,36],[48,70],[137,35],[82,-11],[71,-55],[46,-59],[89,84],[83,-22],[46,-82],[47,1],[7,43],[120,-12],[86,143],[-19,110],[50,43],[48,100],[59,-40],[49,8],[56,-23],[35,26],[88,-30],[29,-39],[97,13],[81,33],[48,47],[40,-43],[39,29],[46,-84],[-96,-42],[-47,-42],[21,-100],[31,-22],[-19,-53],[71,-90],[26,-74],[-24,-40],[1,-130],[33,-56],[-7,-45],[41,-156],[-22,-37],[49,-85],[-38,-52],[-8,-49],[-43,-36],[35,-32],[-7,-102],[22,-45],[-20,-60],[-51,-34],[-46,-55],[13,-114],[53,-144],[48,14],[53,-70],[64,-9],[29,-137],[53,-99],[-79,-45],[-34,-38],[-9,-118],[-46,-68],[42,-67],[10,-49],[-13,-101]],[[10824,16853],[-34,-52],[-3,-50],[-53,-29],[-9,-37],[-53,-35],[40,-109],[1,-41],[64,-115],[19,-57],[-27,-61],[-101,-54],[-21,-67],[56,-20],[9,-70],[84,-158],[-30,-94],[-45,-14],[-5,-63],[33,-89],[-6,-45],[-37,-48],[-44,99],[-1,36],[-68,100],[-62,-36],[-34,16],[-123,-32],[-46,12],[-22,43],[-145,72],[-26,106],[-76,47],[-73,3],[-116,116],[-85,72],[-68,-20],[-42,56],[-41,23],[-34,88],[40,130],[-31,63],[-48,-9],[-36,35],[-2,58],[-104,33],[-30,33],[-63,27],[-83,105],[-32,59],[-87,-20],[-42,34],[-71,26],[11,48],[65,94],[-18,58],[-87,35],[-26,31],[-90,27],[1,30],[-48,120],[65,119],[-38,18],[8,40],[51,38],[-67,31],[-7,53],[22,45],[-134,-5],[-19,33],[22,71],[38,23],[-56,94],[-41,-7],[-54,-40],[-42,16],[-61,70],[-14,88],[42,61],[52,27],[5,40],[84,58],[41,82],[64,-7],[3,88],[50,6],[-17,46]],[[23748,2997],[-44,65],[-99,8],[-28,80],[58,47],[-68,90],[-32,6],[-42,-32],[-75,-2],[-23,42],[-71,59],[-42,77],[-3,52],[33,113],[-22,57],[37,50],[31,74],[38,41],[32,2],[45,-71],[-22,-62],[0,-96],[35,-40],[144,59],[33,56],[3,41],[35,50],[41,14],[22,71],[-2,75],[-59,41],[29,91],[66,83],[-39,36],[15,78],[-9,35],[-73,66]],[[24577,5064],[85,-5],[44,-43],[8,-76],[28,-24]],[[22550,2685],[63,52],[83,8],[54,55],[-16,53],[-60,-20],[-36,53],[-41,-4],[-14,46],[-51,17],[-16,102],[-45,34]],[[22471,3081],[0,35],[-36,47],[-33,-9],[-22,71],[-24,20],[84,149],[14,117],[-37,32],[-14,54],[27,59],[46,-7],[39,29],[-14,83],[39,63],[-7,43],[19,99],[89,28],[75,-6],[50,39],[40,-3],[73,83]],[[2957,8610],[-103,43],[-36,47],[-71,61],[-61,19],[-86,112],[-74,4],[-146,91],[-147,-55],[-76,-14],[-46,-28],[-108,-31]],[[2272,9500],[77,-10],[76,41]],[[17476,5163],[11,-41],[-70,-132],[-47,5],[-69,-72],[-51,4],[-61,72],[-51,-12],[-59,16]],[[3742,3884],[-40,-2],[-195,86],[-71,51],[-103,38],[-30,21],[-93,10],[-51,43],[-126,-97],[-45,39],[-38,-9],[-50,26],[-72,65],[-18,41],[-11,99],[44,114],[8,55],[-108,24],[34,58],[33,178],[94,63],[24,35],[-4,58],[-70,-7],[-39,33],[-2,79],[-61,14],[7,51],[49,113],[-73,-1],[-15,35],[39,49],[25,98],[23,5],[58,65],[138,52],[70,-8],[14,-35],[-22,-53],[6,-80],[-16,-72],[18,-24],[121,191],[-10,89],[207,44],[37,49],[-19,60],[50,13],[84,-57],[-36,-59],[42,-26],[32,-47],[58,49],[51,-1],[74,-65],[42,-14],[15,46],[114,13],[68,27]],[[4687,4142],[-42,-6],[-22,-61],[-44,-35],[-65,-25],[-55,46],[-47,-33],[-89,35],[-18,-82],[-124,7],[-13,-29],[-126,-60],[-118,5],[-32,-15],[-150,-5]],[[9204,10604],[-57,-48],[-67,-1],[-72,-30],[-32,17],[-71,-8],[-141,64],[-69,-23],[-128,29],[-26,-17],[-153,-32],[-42,-19],[-35,-45],[-84,-38],[71,-59],[18,-39],[98,-66],[56,-11],[97,23],[64,0],[60,33],[102,20],[92,-1],[80,13],[46,22],[58,2],[96,-27],[110,-62],[15,-61],[-81,-3],[-53,-27],[-29,21],[-67,-3],[-75,-58]],[[8985,10170],[-116,-26],[-50,-47],[-34,27],[-145,18],[-70,-40],[-77,26],[-104,20],[-35,-13],[-66,12],[-21,-19],[-110,-33],[-14,-34],[-82,-32],[-39,22],[-135,-95],[-41,-51],[-95,-43],[-58,4]],[[6845,10088],[-70,41],[-16,40]],[[6759,10169],[15,61],[87,63],[-9,104],[49,66],[-17,34],[52,55],[4,68],[-21,40],[-58,29],[10,84],[39,45],[62,12],[-15,40],[58,39],[-13,40],[-55,19],[-59,-4],[-63,53],[18,41],[-81,104],[29,53],[-79,96],[9,34],[-49,60],[-18,68],[-67,37]],[[6587,11510],[22,67],[46,65],[56,19],[48,38],[18,38],[-21,111],[29,54],[101,73],[8,63],[24,29],[-13,41],[66,84],[-4,66],[-38,69],[-31,22],[-13,73],[36,55],[76,35],[77,-35],[50,5],[35,28]],[[7159,12510],[60,-32],[79,-9],[25,-45],[145,1],[21,-59],[42,11],[159,-104],[61,-26],[8,-45],[46,-28],[55,-87],[18,-60],[73,-38],[69,-17],[13,-70],[33,-41],[45,-11],[24,-39],[6,-99],[39,-60],[-19,-23],[-20,-108],[29,-16],[-3,-66],[59,-68],[147,-85],[68,-68],[134,-56],[80,-5],[66,-97],[42,-45],[86,-60],[28,-41],[39,-7],[75,-95],[46,-27],[70,-184],[97,3]],[[3334,7695],[-12,11]],[[3792,8250],[16,-54],[109,-123],[86,44],[93,3],[93,-11],[25,-33],[86,14],[105,-29],[40,-56],[58,-47],[-27,-34],[82,-103],[-10,-46]],[[4069,9878],[72,-11],[21,-19],[98,-27],[40,-24],[85,-2],[56,60],[98,48],[69,-40],[34,5],[40,53],[23,-27],[17,-87],[44,-26],[31,15],[132,5],[45,-103],[38,-14]],[[5222,9468],[-37,-10],[-75,-97],[-42,70],[-40,-5],[-81,82],[-21,-32],[-146,3],[-91,-43],[-79,8],[-68,-27],[1,79],[-20,31],[-112,57],[-53,-26],[-212,2],[-45,-17],[-50,53],[-114,54],[-82,-44],[-16,-82],[23,-35],[0,-63]],[[3862,9426],[-84,9],[-64,53],[-54,-3],[-29,-37],[-92,40],[-69,-12],[43,-111],[-8,-96],[28,-60],[38,-6],[85,-84]],[[4494,3289],[-48,-36],[-39,3],[-35,33],[-66,4],[-23,26],[-55,7],[-60,61],[-57,9],[-26,34],[-59,24],[-30,-11],[-73,74],[-74,5],[-41,46],[-79,37],[-15,23],[-101,15],[-38,-18],[-125,-30],[9,-44],[-57,-28],[-49,-1],[-46,56],[-81,0],[-44,-26],[-78,-13],[-102,-41],[-14,-23],[-79,-39],[-38,-46],[-159,-53]],[[2712,3337],[-78,45],[-19,60],[40,28],[-25,48],[-50,-14],[-21,28],[-72,26],[44,66],[53,4],[57,51],[58,27],[59,-2],[69,-39],[90,41],[63,5],[39,33],[163,6],[101,12],[29,31],[67,-12],[113,33],[31,30],[111,14],[68,-15],[40,41]],[[4807,4011],[-9,-119],[-41,-26],[19,-75],[-23,-24],[1,-61],[-65,20],[-68,-39],[11,-74],[-17,-64],[-35,-35],[-22,-64],[-60,-61],[26,-42],[-30,-58]],[[8816,18451],[-33,9],[-91,139],[-55,37],[-6,80],[-19,30],[26,154],[-8,43],[-84,50],[8,83],[-17,101],[44,21],[-34,81],[-86,17],[-50,-65],[-159,93],[41,50],[37,76],[587,-2],[814,1],[715,-2],[649,2],[860,0],[639,0],[-27,-116],[45,-43],[48,-3],[25,-94],[52,-4],[-7,-56],[28,-27],[2,-131],[-49,-65],[12,-30],[65,-38],[11,-34],[-33,-48],[7,-42],[52,-70],[40,-3],[55,53],[22,75],[63,4],[17,43],[45,-14],[11,-98],[-42,-51],[14,-50],[3,-101],[79,-85],[26,-6],[-12,-71],[-49,10],[-51,-140],[-48,-28],[-26,23],[-65,5],[-55,-20],[-49,-69],[-6,-91],[-62,-38],[27,-36],[-26,-42],[-27,-96],[-56,-5],[-99,23],[-45,-44],[33,-112],[43,-26],[-16,-111],[-29,-27],[-28,-142],[39,-23],[66,26],[42,-20],[17,-99],[73,-47],[3,-54],[55,-13],[35,-33],[147,-24],[-8,-101],[-37,-38],[9,-47],[-86,-201],[-104,63],[-27,-20],[-2,-85],[-64,-53],[5,-80],[-44,-8],[-39,-50],[-56,19],[-41,-105],[-52,-25],[-69,13],[15,57],[-70,82],[-122,30],[-148,8],[-18,-53],[-71,35],[-68,-43],[-48,-53],[-24,-72],[5,-35],[-47,-54],[-90,20],[-62,-49],[-9,46],[-107,10],[-52,-38],[-35,-157],[-100,-60],[-57,11],[-9,82],[-48,40],[38,103],[-24,21],[15,62],[-15,90],[-49,73],[-11,73],[-139,73],[-66,58],[-19,75],[-73,15],[-42,30]],[[27481,2455],[53,-97],[-18,-107],[-30,-43],[60,-91],[-26,-74],[-68,21],[-25,-9],[6,-69],[58,-98],[-43,-46],[-19,-54],[-81,-38],[-5,-120],[-53,-119],[5,-95],[-73,-90],[-78,-47],[-8,-44],[-60,-17],[-33,-61],[-46,-126],[-63,15],[-31,-22],[-61,17],[-25,47],[-103,29],[-17,74],[7,47],[-24,26],[40,79],[-40,64],[-69,37],[14,88],[-30,61],[-76,39],[-50,-35],[-31,9],[4,118],[-76,73]],[[24842,5563],[139,82],[25,45],[65,4]],[[25071,5694],[93,-14],[170,92],[25,-77],[50,-8],[35,-38],[63,-25],[76,12],[95,-99],[47,-11],[30,-41],[50,-4],[43,-30],[81,-17],[41,37],[124,-14]],[[6001,5280],[-33,-28],[-80,1],[-48,-84],[-42,-32],[-37,12],[-38,-42]],[[8139,9004],[26,55],[198,69],[100,73],[36,-30],[67,11],[20,27],[109,44],[50,-16],[88,38],[65,-6],[48,36],[95,23],[54,-2],[61,25],[43,-4],[78,24],[153,-46],[113,-10],[7,-44],[102,-19],[12,71],[99,49],[49,-11],[76,33],[57,-6]],[[9945,9388],[82,-59],[31,14],[61,-52],[29,1],[92,-49],[17,-49],[-31,-56],[-18,-97],[-49,-71],[-99,-108],[-64,-41],[-56,-12],[-60,-108],[22,-70],[-3,-76],[23,-26],[-125,-99],[-63,-15],[-24,18],[-86,-58],[-200,-58],[-68,2],[-29,-93],[-123,-31],[-233,35],[-92,-45],[-89,45],[-151,37],[-78,-15],[-121,37],[-31,-62]],[[3232,6730],[-51,46],[-45,-7],[-80,82],[-7,65],[-35,28],[-46,101],[-1,81],[-33,-3],[-66,36],[-80,70],[-61,33],[-12,60],[-60,54],[-2,87],[-38,43],[14,152],[34,69]],[[3070,8326],[8,-74],[65,-54],[59,-79],[24,-201],[73,-234],[-24,-67],[0,-87],[37,-93],[43,-77],[0,-125],[-30,-154],[30,-117]],[[21195,4550],[-60,62],[-49,33],[-69,24],[64,103],[38,23],[-19,124],[59,64],[-73,78],[47,71],[-20,34],[-92,31],[-29,54],[29,24],[-25,60]],[[20996,5335],[-31,109],[29,49],[-30,71],[31,134],[-23,80],[12,62],[48,6],[87,98],[4,34],[75,19],[49,-71],[43,-10],[8,-145],[97,-40],[40,15],[64,-67],[31,-60],[14,-90],[-7,-89],[17,-32],[-14,-57],[34,-80],[45,-70],[2,-48],[48,-33],[-6,-66],[62,-85],[31,-20],[-7,-62],[-33,-85],[-27,-33],[6,-113],[-81,-76],[-59,81],[-98,-37],[-48,1],[-44,-23],[-63,25],[-35,-57],[-72,-20]],[[22471,3081],[-21,-41],[-61,3],[-10,-24],[-66,20],[-37,-31],[14,-69],[-38,-68],[-77,56],[-33,-51],[-6,-69]],[[22136,2807],[-70,19],[-100,-14]],[[21966,2812],[-19,85],[28,25],[-2,52],[-34,38],[34,22],[2,50],[30,120],[-95,222],[12,64],[-33,40],[28,52],[-9,42],[31,40],[0,51],[-26,32],[41,52],[-15,120],[-29,40],[-10,106],[40,63],[-3,86],[-28,17],[-53,74],[-106,33],[-24,124],[-58,80],[71,44],[54,2],[74,-61],[56,-100],[46,25],[65,87],[47,42],[35,-10],[40,38],[54,83],[22,60],[79,13]],[[21966,2812],[-45,-99],[-65,-56],[-34,-58],[-120,-77],[-33,14],[5,47],[-72,26],[-7,103],[20,27],[13,83],[-54,44],[-53,-14],[-91,21],[-29,25],[25,66],[36,184],[-69,38],[24,90],[45,102],[35,141],[-4,40],[-37,47],[-50,4],[-14,58],[68,119],[-55,24],[7,43],[-22,55],[-53,47],[-64,18],[-29,-24],[-60,22],[25,98],[42,42],[-9,38],[39,32],[-7,88],[-36,58],[4,109],[-25,48],[-41,30],[19,35]],[[20996,5335],[-137,-150],[-51,-16],[-74,-75],[-118,13],[10,120],[-23,121],[20,65],[-26,107],[-108,11],[-113,-30],[11,37],[-31,68],[-76,33],[-32,125],[-35,19],[-20,73],[21,52],[-49,94],[-52,24],[19,52],[83,116],[58,28],[20,38],[41,13],[70,137],[63,76],[106,-14],[9,-42],[-6,-89],[18,-100],[157,79],[36,-4],[6,59],[41,6],[53,76],[0,72],[-17,28],[34,46],[56,8],[70,-18],[46,79],[-23,19],[77,97],[106,-54],[185,22],[12,33],[64,5],[70,63],[32,-38],[106,-5],[45,115],[91,65],[43,-26],[45,-63],[100,-79],[58,34],[7,37],[45,14],[35,64],[88,-7],[36,-54],[-38,-63],[29,-41],[-55,-68],[-15,-63],[-32,-22],[-6,-97],[-32,-48],[-6,-65],[-27,-58]],[[3862,9426],[23,-73],[45,-47],[140,-64],[151,-15],[49,13],[65,-19],[62,-37],[117,-4],[61,-21],[64,-76],[66,-31],[118,-24],[1,-49]],[[3022,2691],[-41,47],[18,57],[-42,150],[-85,123],[-20,99],[-67,23],[-66,57],[12,35],[-19,55]],[[4494,3289],[12,-42],[-39,-62],[-78,-37],[-56,21],[-39,-9],[-42,-40],[-48,-6],[-22,-99],[-66,-26],[-26,-81],[-76,-66],[-54,-24],[-88,-91],[-41,-133],[36,-107],[27,-3],[44,-54],[57,-19],[86,3],[48,-32],[62,40],[87,20],[26,38],[67,-4],[49,66],[62,56],[42,2],[45,-91],[3,-48],[39,1],[45,66],[160,26],[9,33],[49,6],[33,67],[83,11],[106,-5],[21,-94],[-9,-133],[42,-16],[-31,-78],[-37,-4],[-34,-42],[-43,15],[-43,-34],[51,-55]],[[22166,2661],[-21,55],[-29,18],[20,73]],[[5163,10478],[-11,-49],[-120,-21],[-18,-84],[-34,-28],[-67,-2],[-27,24],[-51,1],[12,-58],[-29,-16],[-3,-63],[-72,-34],[-109,113],[-100,-20],[-53,3],[-91,81],[-40,-22],[-63,40],[-81,0],[-96,51],[-91,-15],[-16,-47],[-60,-18],[-38,96]],[[4028,10666],[27,31],[67,2],[-6,69],[50,2],[227,53],[16,-24],[-27,-78],[121,-11],[36,32],[36,-9],[66,50],[55,-10],[50,-59],[44,18],[92,-27],[51,-37],[-45,-59],[20,-36],[41,31],[71,-21],[40,17],[103,-122]],[[8985,10170],[69,-87],[98,-61],[-17,-39],[22,-36],[-71,-127],[-47,-174],[3,-92],[65,-14],[129,1],[109,-68],[57,-12],[322,-3],[54,-14],[161,-8],[69,38],[63,-36],[-9,-29],[-96,6],[-21,-27]],[[13857,8782],[83,118],[3,82],[84,82],[-15,26],[74,79],[-49,33],[52,41],[66,106],[-11,34],[80,79],[40,72],[-29,31],[15,69],[61,73],[37,23],[82,105],[31,-13],[150,141],[145,122],[64,83],[102,-81],[5,-104],[29,-27],[43,-86],[37,-3],[9,-49],[43,-17],[36,24],[78,-37],[16,22],[78,-24]],[[15296,9786],[63,-11],[47,15],[22,-65],[34,-18],[38,46],[68,-83],[26,44],[72,30],[31,-43],[51,-15],[82,20],[24,-10],[71,23],[37,38],[105,9],[76,31],[31,-92],[53,-6],[12,-42],[47,3],[65,-31],[15,-36],[81,23],[57,-78],[-5,-40],[63,-121],[-9,-80],[-72,-73],[-63,-24],[-61,-4],[-24,-72],[-2,-172],[36,-47],[-30,-104],[0,-67],[-33,-43],[-16,-70]],[[16288,8621],[-28,-20],[-61,31],[-21,-152],[-90,34],[-16,41],[-37,14],[-86,-87]],[[15949,8482],[-91,15],[-35,-28],[-77,-3],[-40,33],[-14,70],[-52,59],[-10,40],[-59,-6],[-3,52],[-59,61],[-10,74],[-84,43],[-66,-3],[12,48],[-12,74],[-59,110],[-29,-38],[-66,-28],[-69,94],[-21,94],[-79,45],[-42,-17],[-70,12],[-61,-44],[-115,15],[-71,-37],[-46,-43],[-42,-72],[-49,19],[-21,48],[-69,3],[-42,-35],[-21,-74],[-33,-51],[-112,-62],[-22,-102],[-26,-49],[-4,-135],[-49,-57],[-30,-74],[-88,-79],[1,-46],[-33,-38],[-67,79],[-46,86],[-55,28],[76,159],[-32,60]],[[15296,9786],[20,41],[-15,35],[20,44],[-41,60],[-61,50],[22,67],[29,24],[21,76],[-51,129],[80,-5],[26,-35],[160,4],[50,-19],[21,51],[84,29],[63,8],[68,-37],[91,16],[90,-18],[31,34],[141,-28],[70,-41],[15,-45],[50,-21],[93,-87],[110,-35],[43,-36],[51,4],[126,60],[28,-24],[58,0],[69,-25],[94,13],[70,-15],[8,-31],[119,-11],[51,-81],[43,-45],[-12,-67],[-46,-36],[-47,-81],[-84,-15],[-27,-35],[-94,-61],[15,-70],[49,-37],[36,-58],[-11,-76],[38,-28],[-17,-50],[-54,-43],[-17,-70],[-44,-26],[-22,-95],[-56,-79],[67,-23],[-5,-31],[53,-31],[14,-34],[103,-133]],[[17082,8713],[-70,-24],[-30,20],[-139,-18],[-96,79],[5,38],[-52,35],[-67,-23],[-51,-36],[-15,-34],[2,-81],[-58,21],[-59,-2],[-27,-26],[-53,6],[-45,-39],[-39,-8]],[[5163,10478],[113,-15],[76,15],[27,32],[-24,59],[27,78],[60,76],[51,27],[139,-68],[22,18],[91,-13],[46,78],[-16,119],[48,55],[103,-20],[-10,69],[70,90],[55,0],[-1,65],[59,88],[-31,44],[-22,92],[2,49],[79,9],[89,-15],[55,33],[94,-10],[31,48],[49,-24],[9,42],[50,7],[32,-26],[51,30]],[[6759,10169],[-89,48],[-18,-37],[-16,-98],[-30,-37],[-74,-38],[9,-40],[-54,-23]],[[5233,7259],[-1,65],[-116,141],[-41,37]],[[5119,7554],[69,-61],[51,-15],[17,29],[58,-31],[75,8],[60,-61],[77,-17],[34,-25],[58,-7],[34,-55],[79,-22],[63,-57],[44,-8],[67,-41],[43,43],[35,8],[63,67],[54,19]],[[6427,7321],[49,-57],[146,-24]],[[6622,7240],[-1,-50]],[[6622,7240],[32,44],[-17,75],[24,36],[58,33],[36,-82],[31,-31],[35,30],[-17,103],[45,114],[89,53],[77,-27],[70,-5],[20,-19]],[[8162,7052],[1,-45],[-65,-57],[26,-71]],[[12476,5234],[-33,29],[4,70],[49,52],[-3,36],[-109,25],[-9,70],[-4,149],[-23,66],[-58,48],[-10,58],[-45,86],[2,38],[-107,4],[-25,-15],[-95,28],[-17,27],[-61,-14],[-89,10],[-38,51],[-32,133],[-55,73],[-9,56],[8,106],[13,41],[-18,110],[-28,57],[-31,107],[-4,68],[-25,62],[-13,155],[25,62],[-24,36],[21,43],[39,25],[61,96],[-17,58],[74,-1],[31,34],[107,44],[78,1],[55,54],[-43,38],[-15,42],[40,116],[41,57],[94,79],[49,53],[-41,30],[45,51],[84,-22],[75,48],[98,-5],[-27,-46],[24,-152],[34,-32],[116,8],[54,-13],[-16,-63],[37,-50],[60,11],[92,-51],[21,-35],[123,14],[31,-79],[69,-9],[31,13],[77,-50],[43,-8],[69,-97],[32,6],[96,-69],[125,5],[35,-33],[41,2],[70,43],[53,50],[-8,79],[86,52],[30,0],[67,165],[-29,53],[27,41],[3,53],[-38,70]],[[13916,7837],[38,24],[53,-14],[22,-41],[44,2],[19,60],[52,31],[40,-24],[46,3],[59,30],[64,-47],[52,-59],[5,-59],[30,-37],[23,-82],[56,-38],[46,-83],[51,-32],[26,-50],[67,-45],[92,-12],[57,31],[76,-37],[75,35],[118,-16],[60,48],[136,-10],[49,53],[64,10]],[[23480,1304],[33,47],[73,-17],[52,3],[20,70],[-13,41],[18,59],[25,19],[25,96]],[[24604,261],[-55,-59],[-36,-5],[-54,-40],[-33,-50],[-34,17],[-52,-17],[-48,-43],[-91,-3],[-48,-53],[-42,-1],[-30,38],[-75,-16],[-20,-29],[-81,5],[17,90],[-89,27],[-108,52],[-73,64],[-45,-21],[-50,36],[41,50],[-40,52],[-1,57],[-21,51],[34,24],[31,65],[-49,41],[60,121],[-52,39],[21,97],[36,70],[-17,41],[49,31],[-3,44],[-30,81],[-1,59],[-61,-49],[-80,22],[-69,89],[54,24],[21,42]],[[23480,1304],[-22,68],[-88,20],[-55,47],[-68,-22],[-51,80],[-41,-4],[-64,47],[11,31],[-29,89],[46,36],[-27,48],[-2,94],[-28,52]],[[23681,2254],[15,-45]],[[13916,7837],[-11,40],[-90,53],[16,39],[-34,75],[-33,10],[-130,120],[-76,45],[-52,52],[0,75],[-82,27],[-77,40],[-52,57],[20,62],[166,181],[138,23],[107,50],[131,-4]],[[15949,8482],[22,-132],[-19,-95],[-49,-43],[-53,-81],[-3,-71],[43,-60],[-7,-69],[19,-22],[-15,-110],[-14,-9]],[[4309,6674],[-9,35],[-67,47],[1,44],[-129,52],[-48,-21],[-31,33],[6,153],[-46,82],[-4,52],[-67,15],[-24,25],[25,56],[72,-11],[44,33],[62,-19],[29,-29],[51,21],[112,6],[93,26]],[[17082,8713],[44,-9]],[[7649,14212],[-52,180],[27,68],[-16,38],[20,43],[41,13],[45,53],[51,12],[-2,43],[-45,41],[21,39],[-39,72],[-64,63],[-5,32],[70,59],[60,99],[-22,31],[-74,-21],[-42,35],[-79,29],[18,40],[-29,71],[-43,35],[-16,49],[23,59],[-2,59],[21,89],[122,164],[-33,88],[-46,33],[-12,40],[57,13],[36,48],[71,29],[108,18],[41,31],[39,-10],[170,153],[-34,91],[44,53],[153,40],[24,45],[44,13],[56,-93],[70,-24]],[[9379,14389],[-24,-14],[-3,-98],[21,-65],[101,-11],[45,-46],[76,-105],[29,-115],[35,-88],[-30,-162],[-43,-51],[-59,-15],[-34,14],[-94,-41],[-39,-97],[14,-40],[117,-156],[-5,-88],[-33,-36],[-10,-69],[-39,-68]],[[9404,13038],[-42,53],[-112,77],[-53,18],[-37,-26],[-85,-30],[-36,109],[-106,32],[-34,-14],[-84,7],[-94,83],[-58,26],[-9,55],[-110,46],[-37,0],[-68,77],[-49,14],[-39,-46],[-49,33],[-25,-19],[-52,47],[-43,-10],[-42,31],[5,55],[-28,40],[-48,10],[14,40],[-31,41],[-64,36],[-32,46],[-3,48],[-150,74],[-55,50],[-39,71],[-5,56],[-55,44]],[[5970,8317],[-50,46],[17,189],[32,51],[42,31],[-36,46],[-35,7],[17,67],[75,24],[22,-13],[50,51],[50,-8],[69,29],[170,117],[154,63],[26,-12],[97,-1]],[[5105,7660],[22,22],[-15,73],[20,62],[43,17],[20,157],[44,22],[-5,79],[62,5],[22,63],[64,85],[21,55],[129,-69],[73,44],[62,-33],[97,-14],[40,16],[67,-5]],[[9404,13038],[32,-32],[74,-23],[89,-124],[70,-5],[33,-38],[88,-50],[23,-68],[1,-53],[73,-177],[72,-123],[7,-71],[-42,-100],[36,-112],[55,-32],[-1,-79],[-19,-42],[28,-157],[-21,-46],[-55,-39],[-8,-102],[52,-5],[-14,-72],[76,-17],[7,-43],[-31,-104],[-23,-20],[120,-71],[50,-111],[10,-70],[-24,-10],[-77,-83],[-74,-115],[32,-14],[96,-77],[170,-43],[92,-70],[-7,-65],[-43,-122],[-187,43],[-51,-3],[-89,25],[-68,38],[-71,12],[-46,24],[-66,2],[-128,68],[-153,-35],[-44,16],[-244,-39]],[[7159,12510],[12,27],[-52,97],[30,49],[-27,88],[-50,29],[-75,20],[11,60],[54,25],[10,50],[-14,77],[-112,15],[-125,31],[-34,61],[39,87],[-87,76],[-5,53],[67,27],[20,91],[47,84],[85,63],[6,58],[40,39],[41,2],[24,40],[70,13],[24,26],[61,137],[41,1],[73,80],[7,64],[61,16],[76,-5],[21,36],[-1,58],[54,21],[81,-17],[17,23]],[[1311,8371],[15,-30],[-46,-84],[-31,14],[-38,-52],[-55,-8],[-47,-45],[-36,-62],[-28,-12],[-87,-97],[-74,19],[-109,12],[-74,61],[-80,-21],[-137,59],[-19,63],[12,72],[-59,172],[-29,129],[-120,249],[0,28],[-63,148],[21,55],[46,-19],[127,-96],[13,-51],[98,-38],[61,21],[1,29],[-63,40],[-10,28]],[[25071,5694],[29,120],[-3,69],[36,30],[28,139],[-49,50],[83,139],[62,-12],[79,47],[20,28],[67,20],[25,46],[5,56],[28,52],[2,74],[52,2],[54,-36],[35,1],[32,54],[117,23],[8,58],[32,43],[57,9],[41,37],[1,54],[38,63],[56,32],[30,42],[53,39],[-38,63],[36,32],[-12,33],[55,15],[24,35],[38,-12],[15,-43],[74,16],[51,-140],[64,-54],[-24,-70],[49,-28],[63,24],[71,-51],[28,9],[44,-41],[21,-74],[-59,-60],[9,-33],[-31,-75],[25,-51],[107,1],[36,-89],[12,-71],[-40,-34],[-4,-133]],[[3298,7549],[16,108],[56,-30],[28,-55],[35,-20],[29,-51],[48,-25],[16,-42],[64,-57],[7,-36],[71,31],[-22,46],[136,10],[74,37],[75,10],[47,89],[32,6],[70,-51],[62,17],[18,52],[35,17],[57,-34],[58,4],[-18,-54],[40,-103],[60,-71],[-23,-77],[-83,-22],[-112,-6],[-51,-21],[-29,29],[-62,19],[-44,-33],[-72,11],[-25,-56],[24,-25],[67,-15],[4,-52],[46,-82],[-6,-153],[-110,-114],[-160,52],[-81,-3],[-98,45],[-64,49],[-110,54],[-55,112],[21,53],[16,157],[-12,109],[-75,171]],[[15157,10793],[40,-39],[44,22],[-5,70],[68,96],[52,38],[97,10],[79,-22],[14,-41],[-29,-192],[-54,-118],[-24,-103],[45,-77],[56,-70],[47,-24],[63,5],[273,-12],[65,-56],[7,-81],[223,-80],[75,-52],[-12,-54],[-58,12],[-143,10],[-100,17],[-75,38],[-56,-12],[-53,-57],[-17,-59],[70,-138],[2,-95],[-34,-31],[-85,-22],[-84,49],[-78,-32],[-48,60],[-73,-31],[-58,70],[-70,0],[-20,172],[-71,38],[20,82],[45,69],[-8,103],[-71,77],[-39,168],[-71,102],[-9,62],[-71,60],[-27,67],[32,80],[73,-22],[53,-57]],[[17049,8440],[93,146],[-17,142],[37,21],[98,-11],[113,-59],[84,-1],[98,-44],[172,35],[156,-70],[97,-12],[73,-37],[149,-12],[90,21],[93,-75],[9,-80],[-10,-153],[-62,-39],[-55,14],[-35,38],[-72,3],[-92,-137],[-53,-26],[-46,0],[-54,53],[-46,-3],[-31,-74],[-51,-83],[-92,-79],[-62,-84],[-125,-68],[-56,-4],[-50,21],[-61,-40],[-15,-52],[-57,-20],[-42,64],[20,79],[-33,31],[-157,38],[-41,41],[-100,-2],[-65,47],[-17,33],[29,51],[36,14],[27,224],[47,80],[76,69]],[[17892,8603],[-75,25],[78,38],[70,52],[64,103],[103,55],[45,140],[-20,127],[1,110],[-58,66],[-68,146],[-48,2],[-27,42],[-238,39],[31,48],[44,12],[32,99],[48,7],[66,-36],[41,-48],[37,-2],[115,77],[67,98],[40,5],[38,-29],[27,-90],[112,-63],[100,5],[67,-25],[43,7],[67,-83],[-30,-121],[29,-335],[53,-64],[20,-95],[47,-80],[45,-27],[-19,-68],[-138,-180],[-17,-108],[55,-177],[3,-66],[49,-48],[36,-240],[39,-73],[-1,-102],[-80,-45],[-26,-135],[48,-131],[-13,-62],[-70,-79],[-130,145],[-113,91],[0,175],[-60,79],[9,169],[-15,151],[-41,84],[38,134],[-4,104],[-37,97],[-78,31],[-139,-38],[-86,43],[-42,-5],[-63,37],[-71,12]],[[18271,9787],[-80,186],[-84,27],[99,179],[65,-25],[193,23],[106,21],[164,145],[58,19],[97,-55],[123,-106],[35,5],[38,40],[8,98],[73,97],[63,38],[51,8],[40,-17],[56,7],[54,38],[92,29],[125,-6],[22,-23],[30,-89],[43,-3],[121,52],[54,-21],[105,-175],[64,-54],[149,-61],[92,47],[68,-163],[32,-47],[188,-49],[180,-30],[101,46],[65,2],[103,49],[100,-10],[-3,-58],[-70,-83],[-27,-118],[-76,-91],[-18,-53],[54,-114],[56,-22],[92,-59],[14,-132],[-28,-21],[-68,-10],[-73,10],[-64,-13],[-36,44],[-49,-11],[-40,-144],[-48,-70],[-69,38],[-62,52],[-47,-9],[-84,35],[-130,37],[-39,-31],[-24,-60],[-44,15],[-19,71],[20,64],[-11,57],[-105,14],[-40,36],[-18,99],[25,58],[-29,53],[-120,107],[-85,41],[-66,10],[-51,25],[-100,-47],[-57,-9],[-53,72],[-50,127],[-52,54],[-177,13],[-189,58],[-207,-1],[-33,-19],[-3,-106],[30,-66],[86,-18],[122,-40],[21,-58],[-163,-70],[-44,-32],[-69,-2],[-58,24],[-38,-45],[-29,-62],[-31,-18],[-75,87],[-38,-7],[-51,24],[-119,-1],[-107,64],[-27,89]],[[16257,7173],[35,49],[51,11],[95,44],[32,-7],[22,48],[75,-62],[34,20],[37,-68],[59,25],[93,-3],[27,-41],[118,-60],[97,-11],[54,6],[7,-60],[40,16],[38,-37],[72,-38],[44,-63],[58,-19],[38,-79],[87,-11],[23,34],[72,-38],[11,-28],[79,-27],[36,-31],[20,-127],[-14,-48],[18,-70],[5,-111],[34,-111],[29,22],[28,-69],[74,-39],[35,39],[74,-12],[22,-53],[45,-53],[44,5],[21,62],[43,-41],[-12,-55],[19,-65],[-46,-60],[-10,-72],[8,-68],[-63,-26],[13,-81],[-60,-142],[-70,-34],[-10,-39],[-73,-56],[23,-127],[-27,-70],[-32,-31],[-63,4],[-20,-90],[-53,-95],[-46,33],[-44,-19],[-53,82],[-48,33],[-85,-169],[-47,5],[-69,-72],[-51,4],[-61,72],[-51,-12],[-68,31],[-71,9],[8,70],[-59,43],[-35,70],[-94,54],[59,66],[-41,76],[-68,-2],[-63,-29],[-21,-76],[-23,-20],[-43,34],[-2,43],[-31,42],[8,40],[-43,27],[24,99],[-78,142],[24,30],[6,80],[-36,62],[15,25],[-13,81],[10,47],[-59,107],[-12,77],[72,112],[-56,67],[-14,61],[-46,104],[-32,29],[42,60],[-58,138],[30,31],[-25,58],[-1,57],[-56,179],[-31,62]]],"objects":{"MasterCombined":{"type":"GeometryCollection","geometries":[{"arcs":[[0]],"type":"Polygon","properties":{"HU_10_NAME":"Asotin","POPULATION":""}},{"arcs":[[1,2,3,4]],"type":"Polygon","properties":{"HU_10_NAME":"Lochsa","POPULATION":"Lochsa River"}},{"arcs":[[-2,5]],"type":"Polygon","properties":{"HU_10_NAME":"Lolo","POPULATION":"Lolo Creek"}},{"arcs":[[-4,6,7,8]],"type":"Polygon","properties":{"HU_10_NAME":"Selway","POPULATION":"Selway River"}},{"arcs":[[-8,9]],"type":"Polygon","properties":{"HU_10_NAME":"SFClearwater","POPULATION":"South Fork Clearwater River"}},{"arcs":[[10,11,12,13]],"type":"Polygon","properties":{"HU_10_NAME":"BearValley","POPULATION":""}},{"arcs":[[14,15,16,17]],"type":"Polygon","properties":{"HU_10_NAME":"BigCreek","POPULATION":""}},{"arcs":[[18,19,20,21,22,23,24]],"type":"Polygon","properties":{"HU_10_NAME":"BigMF","POPULATION":""}},{"arcs":[[25,26,27]],"type":"Polygon","properties":{"HU_10_NAME":"BigSheep","POPULATION":""}},{"arcs":[[28,29,30]],"type":"Polygon","properties":{"HU_10_NAME":"Calapooia","POPULATION":""}},{"arcs":[[31,32,33,34]],"type":"Polygon","properties":{"HU_10_NAME":"Camas","POPULATION":""}},{"arcs":[[35,36,37,38]],"type":"Polygon","properties":{"HU_10_NAME":"Catherine","POPULATION":""}},{"arcs":[[39,40,-21]],"type":"Polygon","properties":{"HU_10_NAME":"Chamberlain","POPULATION":""}},{"arcs":[[41]],"type":"Polygon","properties":{"HU_10_NAME":"Chinook","POPULATION":""}},{"arcs":[[42,43,44]],"type":"Polygon","properties":{"HU_10_NAME":"Cispus","POPULATION":""}},{"arcs":[[45,46,47,48,49,50,51,52,53,54]],"type":"Polygon","properties":{"HU_10_NAME":"Clackamas","POPULATION":""}},{"arcs":[[55,-17,56,57]],"type":"Polygon","properties":{"HU_10_NAME":"Clatskanie","POPULATION":""}},{"arcs":[[58,59,60,61,62]],"type":"Polygon","properties":{"HU_10_NAME":"Coweeman","POPULATION":""}},{"arcs":[[63,64,65,66,67,68,69,70,71]],"type":"Polygon","properties":{"HU_10_NAME":"DeschutesE","POPULATION":""}},{"arcs":[[-54,72,-64,73]],"type":"Polygon","properties":{"HU_10_NAME":"DeschutesW","POPULATION":""}},{"arcs":[[74,75,76]],"type":"Polygon","properties":{"HU_10_NAME":"EFSalmon","POPULATION":""}},{"arcs":[[77,78,79,80,81,82]],"type":"Polygon","properties":{"HU_10_NAME":"EFLewis","POPULATION":""}},{"arcs":[[83,84,85,86]],"type":"Polygon","properties":{"HU_10_NAME":"Elochoman","POPULATION":""}},{"arcs":[[87,88]],"type":"Polygon","properties":{"HU_10_NAME":"Entiat","POPULATION":""}},{"arcs":[[89,90,-68]],"type":"Polygon","properties":{"HU_10_NAME":"Fifteenmile","POPULATION":""}},{"arcs":[[91,92,93,94,95,96]],"type":"Polygon","properties":{"HU_10_NAME":"GrandeRondeLower","POPULATION":""}},{"arcs":[[-38,97,98,99,-93,100,101]],"type":"Polygon","properties":{"HU_10_NAME":"GrandeRondeMid","POPULATION":""}},{"arcs":[[102,103,-98,-37,104]],"type":"Polygon","properties":{"HU_10_NAME":"GrandeRondeUpper","POPULATION":""}},{"arcs":[[-85,105]],"type":"Polygon","properties":{"HU_10_NAME":"Grays","POPULATION":""}},{"arcs":[[106,107,108,109,-90,-67]],"type":"Polygon","properties":{"HU_10_NAME":"Hood","POPULATION":""}},{"arcs":[[110,-28,111,112]],"type":"Polygon","properties":{"HU_10_NAME":"Imnaha","POPULATION":""}},{"arcs":[[113,-71,114,115,116,117]],"type":"Polygon","properties":{"HU_10_NAME":"JohnDayLow","POPULATION":""}},{"arcs":[[118,119,120]],"type":"Polygon","properties":{"HU_10_NAME":"JohnDayMF","POPULATION":""}},{"arcs":[[-116,121,122,-103,123,-120,124]],"type":"Polygon","properties":{"HU_10_NAME":"JohnDayNF","POPULATION":""}},{"arcs":[[-118,125,126]],"type":"Polygon","properties":{"HU_10_NAME":"JohnDaySF","POPULATION":""}},{"arcs":[[-126,-117,-125,-119,127]],"type":"Polygon","properties":{"HU_10_NAME":"JohnDayUp","POPULATION":""}},{"arcs":[[128,-97,129,-112,-27]],"type":"Polygon","properties":{"HU_10_NAME":"Joseph","POPULATION":""}},{"arcs":[[130,-63,131,132,133]],"type":"Polygon","properties":{"HU_10_NAME":"Kalama","POPULATION":""}},{"arcs":[[134,135,136,137,138,139,140]],"type":"Polygon","properties":{"HU_10_NAME":"Klickitat","POPULATION":""}},{"arcs":[[-60,141,142,143,144,145,146]],"type":"Polygon","properties":{"HU_10_NAME":"LCowlitz","POPULATION":""}},{"arcs":[[147,148,149,150,151]],"type":"Polygon","properties":{"HU_10_NAME":"Lemhi","POPULATION":""}},{"arcs":[[152,-108,153,-51,154,155]],"type":"Polygon","properties":{"HU_10_NAME":"LGorge","POPULATION":""}},{"arcs":[[156,157,158,-94,-100]],"type":"Polygon","properties":{"HU_10_NAME":"Lookingglass","POPULATION":""}},{"arcs":[[159,160,161,-32,162,163]],"type":"Polygon","properties":{"HU_10_NAME":"Loon","POPULATION":""}},{"arcs":[[164,-101,-92,-129,-26,-111,165]],"type":"Polygon","properties":{"HU_10_NAME":"Lostine","POPULATION":""}},{"arcs":[[166,167,-77,168,169,170,-163,-35,171,-149]],"type":"Polygon","properties":{"HU_10_NAME":"LowerSalmonMS","POPULATION":""}},{"arcs":[[172,173,174,175]],"type":"Polygon","properties":{"HU_10_NAME":"LWhiteSalmon","POPULATION":""}},{"arcs":[[-160,176,177,178,-13,179]],"type":"Polygon","properties":{"HU_10_NAME":"Marsh","POPULATION":""}},{"arcs":[[-29,180,181]],"type":"Polygon","properties":{"HU_10_NAME":"McKenzie","POPULATION":""}},{"arcs":[[182,183]],"type":"Polygon","properties":{"HU_10_NAME":"Methow","POPULATION":""}},{"arcs":[[184,-24,185,-33,-162]],"type":"Polygon","properties":{"HU_10_NAME":"MFSalmonLower","POPULATION":""}},{"arcs":[[-12,186,187,-25,-185,-161,-180]],"type":"Polygon","properties":{"HU_10_NAME":"MFSalmonUpper","POPULATION":""}},{"arcs":[[188,-87,189,-143]],"type":"Polygon","properties":{"HU_10_NAME":"Mill","POPULATION":""}},{"arcs":[[190,-39,-102,-165]],"type":"Polygon","properties":{"HU_10_NAME":"Minam","POPULATION":""}},{"arcs":[[191,-47,192]],"type":"Polygon","properties":{"HU_10_NAME":"Molalla","POPULATION":""}},{"arcs":[[193,194,-138,195,196,197,198]],"type":"Polygon","properties":{"HU_10_NAME":"Naches","POPULATION":""}},{"arcs":[[-79,199,-134,200]],"type":"Polygon","properties":{"HU_10_NAME":"NFLewis","POPULATION":""}},{"arcs":[[-61,-147,201,-43,202,203]],"type":"Polygon","properties":{"HU_10_NAME":"NFToutle","POPULATION":""}},{"arcs":[[204,205,-193,-46,206]],"type":"Polygon","properties":{"HU_10_NAME":"NSantiam","POPULATION":""}},{"arcs":[[-183,207]],"type":"Polygon","properties":{"HU_10_NAME":"Okanogan","POPULATION":""}},{"arcs":[[-167,-148,208]],"type":"Polygon","properties":{"HU_10_NAME":"Pahsimeroi","POPULATION":""}},{"arcs":[[-34,-186,-23,209,210,-150,-172]],"type":"Polygon","properties":{"HU_10_NAME":"Panther","POPULATION":""}},{"arcs":[[-52,-154,-107,-66,211]],"type":"Polygon","properties":{"HU_10_NAME":"Sandy","POPULATION":""}},{"arcs":[[-140,212,213]],"type":"Polygon","properties":{"HU_10_NAME":"Satus","POPULATION":""}},{"arcs":[[-49,214,-58,215]],"type":"Polygon","properties":{"HU_10_NAME":"Scappoose","POPULATION":""}},{"arcs":[[216,217]],"type":"Polygon","properties":{"HU_10_NAME":"Secesh","POPULATION":""}},{"arcs":[[218,219,220,-19,-188]],"type":"Polygon","properties":{"HU_10_NAME":"EFSFSalmon","POPULATION":""}},{"arcs":[[221,-218,222,-40,-20,-221]],"type":"Polygon","properties":{"HU_10_NAME":"SFSalmon","POPULATION":""}},{"arcs":[[-132,-62,-204,223]],"type":"Polygon","properties":{"HU_10_NAME":"SFToutle","POPULATION":""}},{"arcs":[[224,-205,225,-181,-31]],"type":"Polygon","properties":{"HU_10_NAME":"SSantiam","POPULATION":""}},{"arcs":[[226,-219,-187,-11]],"type":"Polygon","properties":{"HU_10_NAME":"Sulphur","POPULATION":""}},{"arcs":[[227,-145,228]],"type":"Polygon","properties":{"HU_10_NAME":"Tilton","POPULATION":""}},{"arcs":[[-213,-139,-195,229]],"type":"Polygon","properties":{"HU_10_NAME":"Toppenish","POPULATION":""}},{"arcs":[[230,231,232,233]],"type":"Polygon","properties":{"HU_10_NAME":"Touchet","POPULATION":""}},{"arcs":[[-232,234,235]],"type":"Polygon","properties":{"HU_10_NAME":"Tucannon","POPULATION":""}},{"arcs":[[-202,-146,-228,236,-197,237,-44]],"type":"Polygon","properties":{"HU_10_NAME":"UCowlitz","POPULATION":""}},{"arcs":[[-153,238,-82,239,-173,240,241,-109]],"type":"Polygon","properties":{"HU_10_NAME":"UGorge","POPULATION":""}},{"arcs":[[-110,-242,242,-135,243,-69,-91]],"type":"Polygon","properties":{"HU_10_NAME":"UGorge2","POPULATION":""}},{"arcs":[[244,245,-157,-99,-104,-123]],"type":"Polygon","properties":{"HU_10_NAME":"Umatilla","POPULATION":""}},{"arcs":[[246,-169,-76,247]],"type":"Polygon","properties":{"HU_10_NAME":"UpperSalmon","POPULATION":""}},{"arcs":[[-247,248,-178,249,-170]],"type":"Polygon","properties":{"HU_10_NAME":"Valley","POPULATION":""}},{"arcs":[[-246,250,-234,251,-158]],"type":"Polygon","properties":{"HU_10_NAME":"WallaWalla","POPULATION":""}},{"arcs":[[252,-83,-239,-156]],"type":"Polygon","properties":{"HU_10_NAME":"Washougal","POPULATION":""}},{"arcs":[[-159,-252,-233,-236,253,-95]],"type":"Polygon","properties":{"HU_10_NAME":"Wenaha","POPULATION":""}},{"arcs":[[254,-88,255,256]],"type":"Polygon","properties":{"HU_10_NAME":"Wenatchee","POPULATION":""}},{"arcs":[[-241,-176,257,-136,-243]],"type":"Polygon","properties":{"HU_10_NAME":"WhiteSalmon","POPULATION":""}},{"arcs":[[-240,-81,258,-174]],"type":"Polygon","properties":{"HU_10_NAME":"Wind","POPULATION":""}},{"arcs":[[259,-199,260,-257]],"type":"Polygon","properties":{"HU_10_NAME":"Yakima","POPULATION":""}},{"arcs":[[-250,-177,-164,-171]],"type":"Polygon","properties":{"HU_10_NAME":"Yankee","POPULATION":""}},{"arcs":[[-15,261]],"type":"Polygon","properties":{"HU_10_NAME":"Youngs","POPULATION":""}},{"arcs":[[-211,262,-151]],"type":"Polygon","properties":{"HU_10_NAME":"NFSalmon","POPULATION":""}},{"arcs":[[263]],"type":"Polygon","properties":{"HU_10_NAME":"SalmonCr","POPULATION":""}},{"arcs":[[264]],"type":"Polygon","properties":{"HU_10_NAME":"FallTucannon","POPULATION":""}},{"arcs":[[265]],"type":"Polygon","properties":{"HU_10_NAME":"FallGrandRonde","POPULATION":""}},{"arcs":[[266]],"type":"Polygon","properties":{"HU_10_NAME":"FallLowerSnake","POPULATION":""}},{"arcs":[[267]],"type":"Polygon","properties":{"HU_10_NAME":"FallClearwater","POPULATION":""}},{"arcs":[[268]],"type":"Polygon","properties":{"HU_10_NAME":"Wallowa","POPULATION":""}}]}}};	
var mpops = ["Cascade","Cascades Eastern Slope Tributaries","Clearwater River","Coastal","Gorge","Grande Ronde / Imnaha","Grande Ronde River","Hells Canyon","Imnaha River","John Day River","Lower Snake","Middle Fork Salmon River","Salmon River","Snake River","South Fork Salmon River","Stanley Basin","Umatilla And Walla Walla River","Upper Columbia / East Slope Cascades","Upper Salmon River","Wallowa","Willamette","Willamette - Cascade","Yakima River Group", "Dry Clearwater","Wet Clearwater"];
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

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

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
var normalize_juvs=true;
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

d3.csv(datafile, function (data) {
d3.csv(metafile, function (_metadata) {
d3.csv("data/NOAA_SPS_Analysis.csv", function (_criteria) {

	var dateFormat1 = d3.time.format("%Y-%m-%d");
	
	var sum=0;
	nfish=0
	var nrows = data.length;

	metadata = _metadata;
	Default = {};
	Default.plotted_range = [1945,2016];
	Current = {};
	Default.year_range = [+data[0].YEAR,+data[0].YEAR];
	Current.plotted_range = [Default.plotted_range[0],Default.plotted_range[1]];
	
	data.forEach(function (d) {
		var popid = nmfs_id[d.POPID];
		if(!popid)console.log(d.POPID + " " + popid)
		//console.log(d.POPID + ":" + popid)
		var thisPop = pop_lookup[pop_lookup_from_ID[popid]];
		d.Pop = thisPop.popcode;
		d.Mpop = thisPop.mpop;
		d.Run = thisPop.run;
		d.Species = thisPop.species;
		d.ESU = thisPop.esu;
		d.METAID = +d.METAID;
		d.Year = +d.YEAR;
		Default.year_range[0] = d.Year<Default.year_range[0] ? d.Year : Default.year_range[0];
		Default.year_range[1] = d.Year>Default.year_range[1] ? d.Year : Default.year_range[1];
		//d.Geomean = +d.Geomean;
		//d.Geomean5 = +d.Geomean5;
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
			if(p.pops[v.Pop])p.pops[v.Pop] ++;
			else p.pops[v.Pop] = 1;
            return p;
        },

        function (p, v) {
			//if(v.Spawners*v.has_spawn>0)
			p.n--;
			if(p.pops[v.Pop])p.pops[v.Pop] --;
			else delete p.pops[v.Pop];
			if(p.pops[v.Pop]<=0)delete p.pops[v.Pop];
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
			  //p.Pops[v.Pop] = {TSAIJ: v.TSAIJ, TSAEJ: v.TSAEJ, NOSAIJ: v.NOSAIJ, NOSAEJ: v.NOSAEJ, PHOSIJ: v.PHOSIJ, NOSJF: v.NOSJF, HOSJF: v.HOSJF, AGE2PROP: v.AGE2PROP, AGE3PROP: v.AGE3PROP, AGE4PROP: v.AGE4PROP, AGE5PROP: v.AGE5PROP, AGE6PROP: v.AGE6PROP, AGE7PROP: v.AGE7PROP};
			  var vars = ["TSAIJ","TSAEJ","NOSAIJ","NOSAEJ","PHOSIJ","PHOSEJ","NOSJF","HOSJF","AGE2PROP","AGE3PROP","AGE4PROP","AGE5PROP","AGE6PROP","AGE7PROP","JPOPFIT","JPOPFITNOTES","JTOTALNATURAL","JAGE0PROP","JAGE1PROP","JAGE2PROP","JAGE3PROP","JAGE4PLUSPROP","PPOPFIT","PPOPFITNOTES","PABUNDANCE","PAGE0PROP","PAGE1PROP"];
              p.Pops[v.Pop] = {};
			  vars.forEach(function(d){
				if(v[d] != "" & +v[d] >= 0)p.Pops[v.Pop][d] = +v[d];
			  });
			  p.Pops[v.Pop].METAID = v.METAID;
			  return p;
          },
          function (p, v) {
		      --p.n;
			  delete p.Pops[v.Pop];
              return p;
          },
          function () { return {n:0, Pops: {}}; }
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
	.legend(dc.legend().x(150).y(10).itemHeight(13).gap(5))	
    .group(speciesDim.group());

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
			return Object.keys(kv.value.pops).length>0;
			//return kv.value!=0; 
		});
	})
    .width(375)
    .height(250)
	.margins({top: 0, left: 0, right: 10, bottom: 40})
    .dimension(esuDim)
	.keyAccessor(function (p) {return p.key;})
	.valueAccessor(function (p) {
		//return esu_popcount[p.key];
		return Object.keys(p.value.pops).length;
		//return p.value;
		})
    .group(getGroup(esuDim))
	.transitionDuration(100)
	.on('postRedraw',function(){
//		addESULabel();
		plotYears();
		});

mpopGroup = mpopDim.group();		
mpop
	.data(function(group) {
      return group.all().filter(function(kv) {
	  return kv.value > 0; 
	  });
  })
    .width(375)
    .height(325)
    .radius(70)
	.cx(70)
	.cy(80)
    .dimension(mpopDim)
	.minAngleForLabel(3)
	.legend(dc.legend().x(150).y(10).itemHeight(13).gap(5))
	.colors(color)	
    .group(mpopGroup);		
	
pop
	.data(function(group) {
      return group.all().filter(function(kv) {
	  return kv.value > 0; 
	  });
  })
    .width(320)
    .height(150)
    .radius(70)
	.cx(70)
	.cy(80)
	.minAngleForLabel(3)	
    .dimension(popDim)
    .group(popDim.group());
				

rrun
	.data(function(group) {
      return group.all().filter(function(kv) {
	  return kv.value > 0; 
	  });
  })
    .width(320)
    .height(150)
    .radius(70)
	.cx(70)
	.cy(80)
	.dimension(rrunDim)
    .group(rrunDim.group());	
	


	species.filter("Chinook");
	//pdx_speciesDim.filter("Chinook");
	dc.renderAll();
	buildMap();
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
var spawn_data = {TSAIJ:[],TSAEJ:[],NOSAIJ:[],NOSAEJ:[],ALLSPAWN:[]};
var hatch_data = {PHOSNOT:[],PHOSIJ:[],PHOSEJ:[],ALLHATCH:[]};
var jack_data = {JACKNOT:[],HOSJF:[],NOSJF:[],ALLJACKS:[]};
var age_data = {AGENOT:[],AGE2PROP:[],AGE2PROP:[],AGE3PROP:[],AGE4PROP:[],AGE5PROP:[],AGE6PROP:[],AGE7PROP:[],ALLAGES:[]};
var juv_data = {"JTOTALNATURAL": [],"JAGE0PROP": [],"JAGE1PROP": [],"JAGE2PROP": [],"JAGE3PROP": [],"JAGE4PLUSPROP": [],"PABUNDANCE": [],"PAGE0PROP": [],"PAGE1PROP": [], ALLJUVS: []};
var meta_data = [];

var qdata = [];//quality control

//mapdiv.style("opacity", 0);
tipdiv.style("opacity", 0);

var _width = 940;
if(window.innerWidth < 1410)_width = 800;

var _height = pop.filters().length == 1 ? 500 : species.hasFilter() ? 900 : show_empty ? 1400 : 1200;
var show_meta = pop.filters().length == 1 ? true : false

var margin = {top: 20, right: 50, bottom: 50, left: 275},
    width = _width - margin.left - margin.right,
    height = _height - margin.top - margin.bottom;
	

//remove previously created charts
d3.selectAll(".chosen").remove();

var svg1 = d3.select('#spawnplot').append("svg").attr("class","chosen").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
var svg2 = d3.select('#hatchplot').append("svg").attr("class","chosen").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
var svg3 = d3.select('#ageplot').append("svg").attr("class","chosen").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
var svg4 = d3.select('#jackplot').append("svg").attr("class","chosen").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
var svg5 = d3.select('#juvplot').append("svg").attr("class","chosen").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);
var svg6 = d3.select('#analplot').append("svg").attr("class","chosen").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom);	
	
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

var max_juv = 0;
var max_juvs = {};

nmfs.forEach(function(d){
	max_spawns[d.popcode]=0;
	max_juvs[d.popcode]=0;
});

var indexed_data = {};

var spawn_vars = ["TSAIJ","TSAEJ","NOSAIJ","NOSAEJ"];
var hatch_vars = ["PHOSIJ","PHOSEJ"];
var jack_vars = ["NOSJF","HOSJF"];
var age_vars = ["AGE2PROP","AGE2PROP","AGE3PROP","AGE4PROP","AGE5PROP","AGE6PROP","AGE7PROP"]
var juv_vars = ["JTOTALNATURAL","JAGE0PROP","JAGE1PROP","JAGE2PROP","JAGE3PROP","JAGE4PLUSPROP","PABUNDANCE","PAGE0PROP","PAGE1PROP"]

if(wild_only)spawn_vars.remove("TSAIJ","TSAEJ");
if(no_jacks)spawn_vars.remove("TSAIJ","NOSAIJ");

var poprows = {};

data.forEach(function (d) {
	year=+d.key;
	if(year >= Current.year_range[0] & +year <= Current.year_range[1]){
	indexed_data[year.toString()] = d.value.Pops;
	var keys = Object.keys(d.value.Pops);
	keys.forEach(function (dd) {
		var mpop = pop_lookup[dd].mpop;
		active_mpops[mpop] = true;
		var allspawn = {year: year, pop: dd, TSAIJ: "NA" ,TSAEJ: "NA", NOSAIJ: "NA", NOSAEJ:"NA", METAID: d.value.Pops[dd].METAID};
		var allhatch = {year: year, pop: dd, PHOSIJ: "NA" ,PHOSEJ: "NA"};
		var allages = {year: year, pop: dd,"AGE2PROP":"NA","AGE2PROP":"NA","AGE3PROP":"NA","AGE4PROP":"NA","AGE5PROP":"NA","AGE6PROP":"NA","AGE7PROP":"NA"};
		var alljacks = {year: year, pop: dd, HOSJF:"NA",NOSJF:"NA"}
		var alljuvs = {year: year, pop: dd, JTOTALNATURAL: "NA",JAGE0PROP: "NA",JAGE1PROP: "NA",JAGE2PROP: "NA",JAGE3PROP: "NA",JAGE4PLUSPROP: "NA",PABUNDANCE: "NA",PAGE0PROP: "NA",PAGE1PROP: "NA"}
		
		poprows[dd]=true;
		
		spawn_vars.forEach(function(v){
			var value;
			if(d.value.Pops[dd][v]){
				value = d.value.Pops[dd][v];
				spawn_data[v].push({year: year, pop: dd, value: value});
				if(value > max_spawn)max_spawn = value;
				max_spawns[dd] = value > max_spawns[dd] ? value : max_spawns[dd];
				allspawn[v] = value.toString();
			}
		});
		spawn_data["ALLSPAWN"].push(allspawn);
		
		var offset = 0;
		hatch_vars.forEach(function(v){
			var value;
			if(d.value.Pops[dd][v]){
				value = d.value.Pops[dd][v];
				hatch_data[v].push({year: year, pop: dd, value: value});
				allhatch[v] = value.toString();
				offset += value
			}
		});		
		hatch_data["ALLHATCH"].push(allhatch);
		if(offset>0)hatch_data["PHOSNOT"].push({year: year, pop: dd, value: 1});
		
		
		
		offset = 0;
		age_vars.forEach(function(v){
			var value;
			if(d.value.Pops[dd][v]){
				value = d.value.Pops[dd][v];
				age_data[v].push({year: year, pop: dd, value: value, offset: offset});
				offset += value
				allages[v] = value.toString();
			}
		});
		age_data.ALLAGES.push(allages);
		
		offset = 0;
		jack_vars.forEach(function(v){
			var value;
			if(d.value.Pops[dd][v]){
				value = d.value.Pops[dd][v];
				jack_data[v].push({year: year, pop: dd, value: value});
				alljacks[v] = value.toString();
				offset += value
			}
		});		
		jack_data["ALLJACKS"].push(alljacks);
		if(offset>0)jack_data["JACKNOT"].push({year: year, pop: dd, value: 1});
		meta_data.push({year: year, pop: dd, metadata: metadata[d.value.Pops[dd].METAID-1]});
		
		offset = 0;
		juv_vars.forEach(function(v){
			var value;
			if(d.value.Pops[dd][v]){
				value = d.value.Pops[dd][v];
				if(v=="JTOTALNATURAL" | v == "PABUNDANCE" & value > 0){
					juv_data[v].push({year: year, pop: dd, value: value, offset: offset});
					offset += value;
					if(value + offset > max_juv)max_juv = value + offset;
					max_juvs[dd] = value + offset > max_juvs[dd] ? value + offset : max_juvs[dd];
				}	
				alljuvs[v] = value.toString();
			}
		});
		if(offset>0)juv_data["ALLJUVS"].push(alljuvs);
	});
   }
});

//console.log(juv_data)


function filterByActive(obj) {
//	if(!max_spawns[obj.popcode]>0  & !show_empty)return false;
	if(!poprows[obj.popcode]>0  & !show_empty)return false;
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


var species_filters = species.filters();
var mpop_filters = mpop.filters();
var run_filters = rrun.filters();
var esu_filters = esu.filters();
var pop_filters = pop.filters();

var nmfs1 = [];
for(i=0;i<nmfs.length;i++){
	nmfs1.push(nmfs[i]);
}

//clear previous, then show populations on map
clearPopulation().style("fill-opacity",0);	

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
//show populations on map
	nmfs1[i].locations.forEach(function (d) {
		d3.selectAll("." + d)
		.style("fill-opacity",.75)
	});
}

pops = pops.reverse();

getDomain = function(){
	return pops;
}

var npops = getDomain().length;	
var nmpops = 0;
for(i=0;i<mpops.length;i++)if(active_mpops[mpops[i]])nmpops++;
	
bar_scale = height/(npops+1)*.9;
bar_scale2 = height/(npops+1);

var xValue = function(d) { return x(d.year);}, // data -> value
	yValue = function(d) { return y(d.Pop);},
    x = d3.scale.linear().domain(Current.plotted_range).range([0, width]), // value -> display
	y = d3.scale.ordinal().rangeBands([0, height], 1);
	y.domain(getDomain());
    var xAxis = d3.svg.axis().scale(x).orient("bottom").tickFormat(d3.format("d"));
	var yAxis = d3.svg.axis().scale(y).orient("left");


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
addGridBackground(focus3);
addGridBackground(focus4);
addGridBackground(focus5);

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

//addGrid(focus1);
addGrid(focus2);
addGrid(focus3);
//addGrid(focus4);

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
			else if(max_spawns[d]==0)changed=false;
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
			else if(max_spawns[d]==0)changed=false;
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


var agecolors = ["#bdbdbd","#9ecae1","#4292c6","#08519c","#08306b","#525252","#aaaaaa"];
var ageColor = function(type){
	
	switch(type) {
		case "AGE2PROP":
			return agecolors[0];
		case "AGE3PROP":
			return agecolors[1];
		case "AGE4PROP":
			return agecolors[2];
		case "AGE5PROP":
			return agecolors[3];
		case "AGE6PROP":
			return agecolors[4];
		case "AGE7PROP":
			return agecolors[5];			
		default:
			return "#aaaaaa";
	}	
}

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

addPopulationBackground(focus1);
addPopulationBackground(focus2);
addPopulationBackground(focus3);
addPopulationBackground(focus4);
addPopulationBackground(focus5);
//addPopulationBackground(focus6);
//}
						
addAxes(focus1,"spawner");
addAxes(focus2,"hatch");
addAxes(focus3,"age");
addAxes(focus4,"jack");
addAxes(focus5,"juv");
//addAxes(focus6,"harvbrood");

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
      .attr("xlink:href", "images/back_icon.jpg")
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
		var smax = normalize_spawn ? max_spawns[d.pop] : max_spawn; 
		var jmax = normalize_juvs ? max_juvs[d.pop] : max_juv;
		addScale(svg1,width+margin.left+1,y(d.pop) - bar_scale/2 + margin.top,smax,bar_scale,true)
		addScale(svg5,width+margin.left+1,y(d.pop) - bar_scale/2 + margin.top,jmax,bar_scale,true)
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


addGrid2(focus1);
addGrid2(focus4);
addGrid2(focus5);

addPopulationBars(focus1);
addPopulationBars(focus2);
addPopulationBars(focus3);
addPopulationBars(focus4);
addPopulationBars(focus5);

var spawn_colors = {TSAIJ:"#808080",TSAEJ:"#bdbdbd",NOSAIJ:"#4292c6",NOSAEJ:"#08519c"};
var spawn_names = ["TSAIJ","TSAEJ","NOSAIJ","NOSAEJ"];

var addSpawnBars = function(target, type){
	var bars = target.append("g").attr("class", type);
	var data = spawn_data[type];
	bars.selectAll("rect")
      .data(data)
	  .enter().append("rect")
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) {
		//console.log(d)
	    var smax = normalize_spawn ? max_spawns[d.pop] : max_spawn;
		var offset = bar_scale*(1-d.value/smax); 
		var yy = y(d.pop) - bar_scale/2 + offset; 
		return yy;
	  })
      .attr("height", function(d) {
		var smax = normalize_spawn ? max_spawns[d.pop] : max_spawn;
		var h = (d.value/smax)*bar_scale; 
		return h; 
	  })
      .style("fill", function(d) { return spawn_colors[type]; })
	  .style("stroke","#999999");
}

	spawn_names.forEach(function(d){
		addSpawnBars(focus1,d);
	});
	
var hatch_colors = {PHOSNOT:"#eeeeee",PHOSIJ:"#4292c6",PHOSEJ:"#08519c"};
var hatch_names = ["PHOSNOT","PHOSIJ","PHOSEJ"];	
	
var addHatchBars = function(target, type){
	var bars = target.append("g").attr("class", type);
	var data = hatch_data[type];
	bars.selectAll("rect")
      .data(data)
	  .enter().append("rect")
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) {
		//console.log(d)

		var offset = bar_scale*(1-d.value); 
		var yy = y(d.pop) - bar_scale/2 + offset; 
		return yy;
	  })
      .attr("height", function(d) {

		var h = d.value*bar_scale; 
		return h; 
	  })
      .style("fill", function(d) { return hatch_colors[type]; })
	  .style("stroke","#999999");
}

	hatch_names.forEach(function(d){
		addHatchBars(focus2,d);
	});

var addAgeBars = function(target, type){
	var bars = target.append("g").attr("class", type);
	var data = age_data[type];
	bars.selectAll("rect")
      .data(data)
	  .enter().append("rect")
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) {
		var offset = bar_scale*(1-d.value-d.offset); 
		var yy = y(d.pop) - bar_scale/2 + offset; 
		return yy;
	  })
      .attr("height", function(d) {

		var h = d.value*bar_scale; 
		return h; 
	  })
      .style("fill", function(d) {
			var c =  ageColor(type);
			return c;
		})
	  .style("stroke","#999999");
}

	age_vars.forEach(function(d){
		addAgeBars(focus3,d);
	});

var jack_colors = {JACKNOT:"#eeeeee",HOSJF:"#4292c6",NOSJF:"#08519c"};
//var jack_names = ["JACKNOT","HOSJF","NOSJF"];
var jack_names = ["HOSJF","NOSJF"];

var halfWidth = function(){
	return .5*.75*(x(2000)-x(1999));
}	
	
var addJackBars = function(target, type){
	var bars = target.append("g").attr("class", type);
	var data = jack_data[type];
	bars.selectAll("rect")
      .data(data)
	  .enter().append("rect")
      .attr("width", function(d){
		//if(type=="ALLJACKS")return halfWidth()*2;
		//else return halfWidth();//half width
		return halfWidth()*2;
		})
	  .attr("x", function(d) { 
		//if(type=="HOSJF")return x(d.year);
		//else return x(d.year) - halfWidth();
		return x(d.year) - halfWidth();
		})
      .attr("y", function(d) {

		var offset = bar_scale*(1-d.value); 
		var yy = y(d.pop) - bar_scale/2 + offset; 
		return yy;
	  })
      .attr("height", function(d) {

		var h = d.value*bar_scale; 
		return h; 
	  })
      .style("fill", function(d) { return jack_colors[type]; })
	  .style("stroke","#999999");
}

	jack_names.forEach(function(d){
		addJackBars(focus4,d);
	});

var juv_colors = {JTOTALNATURAL:"#4292c6",PABUNDANCE:"#08519c"};
var juv_names = ["JTOTALNATURAL","NOSJF"];	

var addJuvBars = function(target, type){
	var bars = target.append("g").attr("class", type);
	var data = juv_data[type];
	bars.selectAll("rect")
      .data(data)
	  .enter().append("rect")
      .attr("width", .75*(x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .375*(x(d.year+1)-x(d.year)); })
      .attr("y", function(d) {
	    var jmax = normalize_juvs ? max_juvs[d.pop] : max_juv;
		var offset = bar_scale*(1-(d.value + d.offset)/jmax); 
		var yy = y(d.pop) - bar_scale/2 + offset; 
		return yy;
	  })
      .attr("height", function(d) {
		var jmax = normalize_juvs ? max_juvs[d.pop] : max_juv;
		var h = (d.value/jmax)*bar_scale; 
		return h; 
	  })
      .style("fill", function(d) {
			var c =  juv_colors[type];;
			return c;
		})
	  .style("stroke","#999999");
}

	juv_vars.forEach(function(d){
		addJuvBars(focus5,d);
	});
	
	
var setPopTextDecoration = function(pop,mode){
	if(mode=="on"){
		d3.selectAll("text.pop" + pop_lookup[pop].popid).style('text-decoration','underline');
		d3.selectAll("text.pop" + pop_lookup[pop].popid).style('text-decoration-color', 'red');
	}
	else{
		d3.selectAll("text.pop" + pop_lookup[pop].popid).style('text-decoration','none');
	}
}

var mouseOverHTML = function(d,mode){
if(mode=="spawner"){ 
	return '<table width="200"><tr><th>Year</th><td>' + d.year + '</td></tr><tr><th valign="top">NOSA w/o jacks</th><td>' + d.NOSAEJ + '</td></tr><tr><th valign="top">NOSA with jacks</th><td>' + d.NOSAIJ + '</td></tr><tr><th valign="top">Total w/o jacks</th><td>' + d.TSAEJ +  '</td></tr><th valign="top">Total with jacks</th><td>' + d.TSAIJ + '</td></tr></table>';
	}
else if(mode=="hatch")return '<table width="125"><tr><th>Year</th><td>' + d.year + '</td></tr><tr><th>PHOSIJ</th><td>' + d.PHOSIJ + '</td></tr><tr><th valign="top">PHOSEJ</th><td>' + d.PHOSEJ +  '</td></tr></table>';
else if(mode=="age"){
	var txt = '<table width="125"><tr><th>Year</th><td>' + d.year + '</td></tr>';
	txt = d.AGE7PROP != "NA" ? txt + '<tr><th>Age 7</th><td>' + d.AGE7PROP + '</td></tr>' : txt;
	txt = d.AGE6PROP != "NA" ? txt + '<tr><th>Age 6</th><td>' + d.AGE6PROP + '</td></tr>' : txt;
	txt = d.AGE5PROP != "NA" ? txt + '<tr><th>Age 5</th><td>' + d.AGE5PROP + '</td></tr>' : txt;
	txt = d.AGE4PROP != "NA" ? txt + '<tr><th>Age 4</th><td>' + d.AGE4PROP+ '</td></tr>' : txt;
	txt = d.AGE3PROP != "NA" ? txt + '<tr><th>Age 3</th><td>' + d.AGE3PROP + '</td></tr>' : txt;
	txt = d.AGE2PROP != "NA" ? txt + '<tr><th>Age 2</th><td>' + d.AGE2PROP + '</td></tr>' : txt;
	txt = txt + '</table>';
	return txt;
}
else if(mode=="jack")return '<table width="125"><tr><th>Year</th><td>' + d.year + '</td></tr><tr><th>HOSJF</th><td>' + d.HOSJF + '</td></tr><tr><th valign="top">NOSJF</th><td>' + d.NOSJF+  '</td></tr></table>';

else if(mode=="juv"){
	var txt = '<table width="200"><tr><th>Year</th><td>' + d.year + '</td></tr>';
	txt = d.JTOTALNATURAL != "NA" ? txt + '<tr><th>Juv out</th><td>' + d.JTOTALNATURAL + '</td></tr>' : txt;
	txt = d.JAGE0PROP != "NA" ? txt + '<tr><th>Juv out Age 0</th><td>' + d.JAGE0PROP+ '</td></tr>' : txt;
	txt = d.JAGE1PROP != "NA" ? txt + '<tr><th>Juv out Age 1</th><td>' + d.JAGE1PROP + '</td></tr>' : txt;
	txt = d.JAGE2PROP != "NA" ? txt + '<tr><th>Juv out Age 2</th><td>' + d.JAGE2PROP+ '</td></tr>' : txt;
	txt = d.JAGE3PROP != "NA" ? txt + '<tr><th>Juv out Age 3</th><td>' + d.JAGE3PROP+ '</td></tr>' : txt;
	txt = d.PABUNDANCE != "NA" ? txt + '<tr><th>Presmolt</th><td>' + d.PABUNDANCE + '</td></tr>' : txt;
	txt = d.PAGE0PROP != "NA" ? txt + '<tr><th>Presmolt Age 0</th><td>' + d.PAGE0PROP + '</td></tr>' : txt;
	txt = d.PAGE1PROP != "NA" ? txt + '<tr><th>Presmolt Age 1</th><td>' + d.PAGE1PROP + '</td></tr>' : txt;
	txt = txt + '</table>';
	return txt;
}
	return "NA";
}

var setMouseOver = function(target,datasource,mode){
	target.selectAll("rect")
      .data(datasource)
	  .enter().append("rect")
      .attr("width", (x(2000)-x(1999)))
	  .attr("x", function(d) { return x(d.year) - .5*(x(2000)-x(1999)); })
      .attr("y", function(d) {
	    return y(d.pop) - bar_scale2/2; 
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
			drawCursor(target,d.year,d.pop);
			setPopTextDecoration(d.pop,"on");
			showMPG(d.pop);
			showPopulation(d.pop);
        })                  
	  .on("mouseout", function(d) {       
            tipdiv.transition()        
                .duration(20)      
                .style("opacity", 0);
			d3.selectAll(".curse").remove();
			setPopTextDecoration(d.pop,"off");
			clearPopulation();

	  })
	  .on("click", function(d) {       
		showMeta(d.pop,d.year,d.METAID);
	  });	  
}

setMouseOver(focus1.append("g").attr("class", "mouseover"),spawn_data.ALLSPAWN,"spawner");
setMouseOver(focus2.append("g").attr("class", "mouseover"),hatch_data.ALLHATCH,"hatch");
setMouseOver(focus3.append("g").attr("class", "mouseover"),age_data.ALLAGES,"age");
setMouseOver(focus4.append("g").attr("class", "mouseover"),jack_data.ALLJACKS,"jack");
setMouseOver(focus5.append("g").attr("class", "mouseover"),juv_data.ALLJUVS,"juv");
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

var setYearArrow = function(direction,xpos){

d3.selectAll(".chosen")
	  .append("image")
      .attr("xlink:href", "images/" + direction + "_year_arrow.jpg")
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
d3.selectAll(".dc-chart g.row text").style("fill","black");
d3.selectAll(".y.axis").selectAll("text").style("font-size","12px");
d3.selectAll("#metatable").remove();



var showMeta = function(pop,year,metaid){

if(show_meta){
mdata = metadata[metaid-1];

d3.selectAll("#metatable").remove();
var table = d3.select("#metadiv").append("table").attr("id","metatable").attr("border","1").attr("width",width+margin.left);
var row = table.append("tr").attr("class", "metarow");
row.append("th").attr("align","left").text("Population");
row.append("td").attr("align","left").text(pop);
row = table.append("tr").attr("class", "metarow");
row.append("th").attr("align","left").text("Year");
row.append("td").attr("align","left").text(year);
var metavars = ["CONTACTAGENCY","SUBMITAGENCY","POPFIT","POPFITNOTES","PROTMETHNAME","PROTMETHURL","PROTMETHDOCUMENTATION","METHODADJUSTMENTS","COMMENTS","NULLRECORD","DATASTATUS","LASTUPDATED","INDICATORLOCATION","METRICLOCATION","MEASURELOCATION","CONTACTPERSONFIRST","CONTACTPERSONLAST","CONTACTPHONE","CONTACTEMAIL","METACOMMENTS","LASTMODIFIEDON"];	
var addMetaRow = function(v){
	var row = table.append("tr").attr("class", "metarow");

	var t0 = row.append("th");
	t0.attr("align", "left");
	t0.text(v);
	var t1 = row.append("td").attr("align", "left")
	if(mdata[v].indexOf("http")==0){
		var a = t1.append("a")
		a.attr("href",mdata[v]);
		a.attr("target","_new");
		a.text(mdata[v]);
	}
	else if(mdata[v].indexOf("@")>-1){
		var a = t1.append("a")
		a.attr("href","mailto://" + mdata[v]);
		a.attr("target","_new");
		a.text(mdata[v]);
	}	
	else t1.text(mdata[v]);
}

metavars.forEach(function(d){

	switch(d) {
		case "PROTMETHURL":
			addMetaRow(d);
			break;
		case "INDICATORLOCATION":
			addMetaRow(d)
			break;
		case "METRICLOCATION":
			addMetaRow(d)
			break;
		case "MEASURELOCATION":
			addMetaRow(d)	
		break;
		case "PROTMETHDOCUMENTATION":
			addMetaRow(d)	
		break;		
		default:
			addMetaRow(d)
	}	
});
}
}	


};


//end of plotYears///////////////////////////////////////////////////








