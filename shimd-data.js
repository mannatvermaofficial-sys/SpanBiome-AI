// Shared SHIMD ingredient database + OPMSS engine — used by SpanBiome Portal's Formulation Lab
// and by TMSI Ingredient Calculator.dc.html. Single source of truth (avoids duplicating ~400
// graded ingredients inline in either DC file).
(function(){
  function M(tag,name,params,rows){ return {tag,name,params,rows:rows.map(r=>({name:r[0],vals:r[1],optimal:r[2],evidence:r[3],listed:r[4]}))}; }

  function buildData(){
    return [
      M('Module 1','Surfactants · SCMSI',['MS','Cleansing','Mildness','Barrier','Irritation'],(function(){
        const A=(n,cl,ev,g,cls,opt)=>[n,{MS:g,Cleansing:cl,Mildness:g,Barrier:g,Irritation:g},opt||'2–10%',ev,g,cls];
        const rows=[
          A('Decyl Glucoside','B','I','A','Nonionic'),A('Coco Glucoside','B','I','A','Nonionic'),A('Lauryl Glucoside','B','I','A','Nonionic'),
          A('Caprylyl/Capryl Glucoside','B','II','A','Nonionic','1–5%'),A('Sodium Cocoyl Glutamate','B','I','A','Anionic'),A('Disodium Cocoyl Glutamate','B','I','A','Anionic'),
          A('Sodium Lauroyl Glutamate','B','I','A','Anionic'),A('Sodium Cocoyl Glycinate','B','I','A','Anionic'),A('Sodium Lauroyl Sarcosinate','B','II','A','Anionic'),
          A('Sodium Methyl Cocoyl Taurate','B','II','A','Anionic'),A('Sodium Methyl Lauroyl Taurate','B','II','A','Anionic'),A('Sodium Lauroyl Methyl Isethionate','B','II','A','Anionic'),
          A('Sodium Cocoyl Isethionate','B','I','A','Anionic'),A('Sodium Lauroyl Isethionate','B','II','A','Anionic'),A('Sodium Lauroyl Lactylate','B','II','A','Anionic','1–5%'),
          A('Sodium Cocoyl Lactylate','B','II','A','Anionic','1–5%'),A('Sodium Lauroyl Methyl Glucamide','B','II','A','Anionic/Glucamide'),A('Capryloyl/Caproyl Methyl Glucamide','B','II','A','Glucamide'),
          A('Lauroyl/Myristoyl Methyl Glucamide','B','II','A','Glucamide'),A('Sodium Lauryl Glucose Carboxylate','B','II','A','Anionic'),A('Sodium Cocoyl Apple Amino Acids','B','III','A','Anionic'),
          A('Sodium Cocoyl Rice Amino Acids','B','III','A','Anionic'),A('Sodium Cocoyl Wheat Amino Acids','B','III','A','Anionic'),A('Sodium Cocoyl Hydrolyzed Wheat Protein','B','III','A','Anionic','1–5%'),
          A('Sodium Cocoyl Sarcosinate','B','II','A','Anionic'),A('Potassium Cocoyl Glycinate','B','II','A','Anionic'),A('Sodium C14-16 Olefin Sulfonate','A','I','C','Anionic','3–10%'),
          A('Sodium Lauryl Sulfoacetate','A','II','B','Anionic'),A('Disodium Laureth Sulfosuccinate','B','I','A','Anionic'),A('Disodium Lauryl Sulfosuccinate','B','II','A','Anionic'),
          A('Sodium Laureth Sulfate (SLES / Sodium Lauryl Ether Sulfate)','A','I','C','Anionic','3–15%'),A('Sodium Lauryl Sulfate (SLS)','A','I','D','Anionic','1–5%'),A('Ammonium Lauryl Sulfate','A','I','D','Anionic'),
          A('Ammonium Laureth Sulfate','A','I','C','Anionic','3–15%'),A('Sodium Dodecylbenzenesulfonate','A','II','D','Anionic','1–5%'),A('TEA-Dodecylbenzenesulfonate','A','II','D','Anionic','1–5%'),
          A('Cocamidopropyl Betaine','B','I','A','Amphoteric'),A('Sodium Cocoamphoacetate','B','I','A','Amphoteric'),A('Disodium Cocoamphodiacetate','B','I','A','Amphoteric'),
          A('Sodium Lauroamphoacetate','B','II','A','Amphoteric'),A('Sodium Lauroamphopropionate','B','II','A','Amphoteric'),A('Sodium Cocoamphopropionate','B','II','A','Amphoteric'),
          A('Lauramidopropyl Betaine','B','II','A','Amphoteric'),A('Coco-Betaine','B','I','A','Amphoteric'),A('Caprylyl/Capryl Betaine','B','II','A','Amphoteric','1–5%'),
          A('PEG-7 Glyceryl Cocoate','B','II','A','Nonionic/Refatting','1–5%'),A('PEG-200 Hydrogenated Glyceryl Palmate','B','II','A','Nonionic/Refatting','1–5%'),A('Polysorbate 20','C','II','B','Nonionic','0.5–3%'),
          A('Polysorbate 80','C','II','B','Nonionic','0.5–3%'),A('Decylamine Oxide','B','II','B','Amine Oxide','1–5%'),A('Lauramine Oxide','A','I','B','Amine Oxide','1–5%'),
          A('Cocamine Oxide','A','II','B','Amine Oxide','1–5%'),

          A('Sodium PEG-7 Olive Oil Carboxylate (Olivem 400)','B','II–III','A','Anionic (olive-derived)','5–12%'),A('Zinc Coceth Sulfate','B','I–II','A','Anionic (zinc-complexed)','2–8%'),
          A('Disodium Capryloyl Glutamate','B','I','A','Anionic (amino-acid-based)','2–8%'),A('Laureth-9','B','I','B','Nonionic (alkyl PEG ether)','1–4%'),
          A('Trideceth-12','B','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),A('C11-15 Pareth-7','C','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('C12-13 Pareth-3','C','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),A('C12-13 Pareth-23','B','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('PPG-5-Ceteth-20','C','I','C','Nonionic solubilizer (PPG/PEG ether)','0.5–3%'),A('PEG-55 Propylene Glycol Oleate','B','I','B','Nonionic solubilizer/surfactant','1–5%'),
          A('Laureth-5 Carboxylic Acid','B','II','B','Nonionic (alkyl ether carboxylic acid)','1–5%'),A('Trideceth-8','B','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('Potassium Cocoate','B','I','B','Anionic (soap)','2–8%'),A('Cocamidopropylamine Oxide','A','I','A','Amphoteric (amine oxide)','0.5–4%'),
          A('Methyl Gluceth-20','A','II','A','Nonionic (alkyl glucoside ether)','0.5–5%'),A('Trideceth-10','B','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('PEG-7 Propylheptyl Ether','B','I','B','Nonionic (Guerbet-alcohol PEG ether)','0.5–3%'),A('Acrylates/Beheneth-25 Methacrylate Copolymer','A','I','A','Nonionic (rheology-modifying copolymer)','0.1–1.7%'),
          A('Sodium Methyl 2-Sulfolaurate','B','II','A','Anionic (sulfonated fatty ester)','2–10%'),
          A('Coceth-7','B','II','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('Laureth-10','B','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('Undeceth-5','B','II','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('Undeceth-11','B','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('Laureth-4','C','I','C','Nonionic (low-mole ethoxylate; marine toxicity flag)','0.5–3%'),
          A('Laureth-3','C','I','C','Nonionic (low-mole ethoxylate; marine toxicity flag)','0.5–3%'),
          A('Trideceth-2','B','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('Sodium Laurate','C','I','C','Anionic (soap)','2–8%'),
          A('Sodium Xylenesulfonate','B','I','B','Hydrotrope (aromatic sulfonate)','1–5%'),
          A('Lauryl Hydroxysultaine','A','I','A','Amphoteric (alkyl sultaine, non-nitrosatable)','0.5–5%'),
          A('Sodium Cocoyl Alaninate','A','II','A','Anionic (amino-acid-based)','2–8%'),
          A('Sodium Cocoyl Collagen Amino Acids','A','II','A','Anionic (amino-acid-based)','2–8%'),
          A('Cocoyl Sarcosine','B','I','B','Anionic (acyl sarcosine; nitrosation caution)','1–5%'),
          A('Cocamide MIPA','B','I','B','Alkanolamide (MIPA; lower nitrosamine risk than DEA/MEA)','0.5–5%'),
          A('Sodium Cocoate','B','I','B','Anionic (soap)','0.5–3%'),A('Sodium Lauroyl Oat Amino Acids','A','II','A','Anionic (amino-acid-based)','2–8%'),
          A('Laureth-2','B','II','B','Nonionic (alkyl PEG ether)','0.5–3%'),A('C12-14 Sec-Pareth-5','C','II','C','Nonionic (secondary alkyl PEG ether)','0.5–3%'),
          A('C12-14 Sec-Pareth-7','B','II','A','Nonionic (secondary alkyl PEG ether)','0.5–3%'),
          A('PEG-100 Stearate','A','I','B','Nonionic (PEG ester)','0.5–5%'),A('Steareth-6','A','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('Trideceth-3','A','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),A('Trideceth-6','A','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('C12-13 Alketh-3','A','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),A('C12-13 Alketh-23','A','I','B','Nonionic (alkyl PEG ether)','0.5–3%'),
          A('Polysorbate 21','A','I','A','Nonionic (polysorbate)','0.2–2%'),
          A('Sodium Coceth Sulfate','C','II','C','Anionic (ethoxylated sulfate)','2–10%'),
        ];
        rows.forEach(r=>{ if(/Polysorbate/.test(r[0])){ r[1].Irritation='A'; } });
        return rows;
      })()),
      M('Module 2','Conditioning Agents · CSMCI',['MS','Conditioning','Barrier','Static Ctrl','Build-up','Irritation'],(function(){
        const C=(n,ms,bu,ir,ev,g,cls,opt)=>[n,{MS:ms,Conditioning:'A',Barrier:(ms==='A'?'A':(ms==='C'?'B':'A')),'Static Ctrl':'A','Build-up':bu,Irritation:ir},opt||'0.5–3%',ev,g,cls];
        const rows=[
          C('Behentrimonium Methosulfate','A','B','A','I','A','Cationic conditioner','1–5%'),
          C('Behentrimonium Chloride','B','B','B','I','B','Cationic quat','0.5–3%'),
          C('Steartrimonium Chloride','B','B','B','II','B','Quat','0.2–3%'),
          C('Cetrimonium Chloride (Cetyltrimethylammonium Chloride)','C','B','C','I','C','Cationic quat','0.1–2%'),
          C('Stearamidopropyl Dimethylamine','A','B','A','II','A','Cationic/amine conditioner','0.5–3%'),
          C('Behenamidopropyl Dimethylamine','A','B','A','II','A','Cationic/amine conditioner','0.5–3%'),
          C('Brassicamidopropyl Dimethylamine','A','B','A','II','A','Cationic conditioner','0.5–3%'),
          C('Hydroxypropyl Guar Hydroxypropyltrimonium Chloride','A','B','A','I','A','Cationic polymer','0.1–1%'),
          C('Guar Hydroxypropyltrimonium Chloride','A','B','A','I','A','Cationic polymer','0.1–1%'),
          C('Polyquaternium-7','B','B','B','I','B','Cationic polymer','0.2–3%'),
          C('Polyquaternium-10','B','B','B','I','B','Cationic polymer','0.1–1%'),
          C('Polyquaternium-11','B','B','B','II','B','Cationic polymer','0.1–1%'),
          C('Polyquaternium-16','B','B','B','II','B','Cationic polymer','0.1–1%'),
          C('Polyquaternium-22','B','B','B','II','B','Cationic polymer','0.1–1%'),
          C('Polyquaternium-37','B','C','B','II','B','Cationic polymer','0.1–2%'),
          C('Polyquaternium-44','B','B','B','III','B','Cationic polymer','0.1–1%'),
          C('Polyquaternium-47','B','B','B','II','B','Cationic polymer','0.1–1%'),
          C('Polyquaternium-55','B','B','B','III','B','Cationic polymer','0.1–1%'),
          C('Polyquaternium-67','B','B','B','III','B','Cationic polymer','0.1–1%'),
          C('Polyquaternium-28','B','B','B','II','B','Cationic polymer','0.1–1%'),
          C('Polyquaternium-30','A','A','A','I','A','Cationic film-forming polymer','0.2–2%'),
          C('Quaternium-33','B','B','B','II','B','Lanolin-derived cationic conditioner (18-MEA restoration)','0.5–3%'),
          C('Polyquaternium-39','B','B','B','III','B','Cationic polymer','0.1–1%'),
          C('Hydrolyzed Keratin','A','A','A','I','A','Protein conditioner','0.5–5%'),
          C('Hydrolyzed Wheat Protein','A','A','A','I','A','Protein conditioner','0.5–5%'),
          C('Hydrolyzed Soy Protein','A','A','A','II','A','Protein conditioner','0.5–5%'),
          C('Hydrolyzed Silk Protein','A','A','A','II','A','Protein conditioner','0.1–2%'),
          C('Hydrolyzed Collagen','A','A','A','II','A','Protein conditioner','0.5–5%'),
          C('Decyl Alcohol','B','B','B','III','B','Fatty alcohol','0.1–2%'),
          C('Octyldodecanol','A','B','A','II','A','Branched fatty alcohol','0.5–5%'),
          C('Glyceryl Stearate','A','B','A','I','A','Ester/emollient conditioner','0.5–5%'),
          C('Glyceryl Stearate SE','A','B','A','II','A','Self-emulsifying conditioner','0.5–5%'),
          C('PEG-40 Hydrogenated Castor Oil','B','B','A','II','B','Solubilizer/conditioner','0.1–3%'),
          C('Cetearyl Glucoside','A','A','A','II','A','Nonionic conditioning/emulsifier','0.5–5%'),
          C('Stearamidopropyl PG-Dimonium Chloride Phosphate','A','B','A','II','A','Cationic conditioner','0.5–3%'),
          C('Palmitamidopropyltrimonium Chloride','A','B','A','II','A','Cationic conditioner','0.2–3%'),
          C('Quaternium-80','B','B','B','II','B','Silicone quat','0.1–2%'),
          C('Quaternium-91','B','B','B','II','B','Cationic quat','0.1–2%'),
          C('Cassia Hydroxypropyltrimonium Chloride','A','B','A','III','A','Cationic botanical polymer','0.1–1%'),
          C('Milk Protein Extract','A','A','A','I','A','Protein conditioner','0.5–3%'),
          C('Soy Protein Extract','A','A','A','I','A','Protein conditioner','0.5–4%'),
          C('Wheat Protein Extract','A','A','B','I','B','Protein conditioner','0.2–1.7%'),
          C('Cocamide DEA','C','A','C','I','C','Alkanolamide (nitrosamine caution)','0.5–3%'),
          C('Hydrolyzed Rice Protein','A','A','A','I','A','Protein conditioner','0.5–3%'),
          C('Keratin (Hydrolyzed)','A','B','B','I','B','Protein conditioner','0.5–3%'),
          C('Panthenyl Hydroxypropyl Steardimonium Chloride (Panthequat)','A','A','A','II','A','Cationic panthenol conditioner','0.5–3%'),
          C('Polyquaternium-73','B','A','B','III','B','Cationic quat polymer','0.1–2%'),
          C('Diethylene Glycol Monoethyl Ether (Transcutol)','A','B','A','I','A','Solvent/penetration enhancer','1–10%'),
          C('Hydroxypropyl Oxidized Starch PG-Trimonium Chloride','A','A','A','II','A','Cationic starch polymer','0.2–2%'),
          C('Polyglyceryl-3 Laurate','A','B','A','II','A','Polyglyceryl ester conditioner','0.5–3%'),
          C('Polyglyceryl-4 Caprate','A','B','A','II','A','Polyglyceryl ester conditioner','0.5–3%'),
          C('PPG-1-PEG-9 Lauryl Glycol Ether','B','B','B','III','B','Nonionic ether conditioner','0.5–3%'),
          C('PEG-60 Almond Glycerides','B','B','B','I','B','PEG-ester conditioner','0.5–2%'),
          C('PEG-90 Glyceryl Isostearate','A','B','A','I','A','PEG-ester conditioner','0.5–3%'),
          C('Polyquaternium-6','B','B','B','I','B','Cationic homopolymer (DADMAC; nitrosamine caution)','0.1–1.2%'),
          C('Polyquaternium-53','B','B','B','II','B','Cationic polymer','0.1–1%'),
          C('Quaternium-87','B','B','B','II','B','Imidazolium quat (biodegradable, no volume loss)','0.1–2%'),
          C('Quaternium-98 (Genadvance Repair)','B','B','B','II','B','Quaternary ammonium salt','0.5–3%'),
          C('Stearalkonium Chloride','C','C','C','I','C','Long-chain quat (CIR-reaffirmed; class MS caution)','0.1–1%'),
          C('Cetrimonium Bromide (Cetyltrimethylammonium Bromide)','D','D','D','I','C','Quat bromide salt (more potent than chloride)','0.05–0.3%'),
          C('Hydroxypropyl Bis-Hydroxyethyldimonium Chloride','B','B','B','II','B','Cationic polymer (very low build-up)','0.1–2%'),
          C('Acrylamidopropyltrimonium Chloride/Acrylamide Copolymer','B','B','B','II','B','Cationic copolymer (film-forming)','0.1–1%'),
          C('Hydroxypropyltrimonium Hyaluronate','A','A','A','II','A','Cationic hyaluronate derivative','0.05–2%'),
          C('Cocamidopropyl PG-Dimonium Chloride Phosphate','A','A','A','II','A','Cationic phospholipid (milder than traditional quats)','0.5–3%'),
          C('Hydrolyzed Quinoa Protein','A','A','A','I','A','Protein hydrolysate (antioxidant/cytoprotective)','0.5–3%'),
          C('Hydrolyzed Soy Protein Extract','A','A','A','II','A','Protein hydrolysate extract (legume allergen)','0.5–5%'),
          C('Hydrolyzed Cicer Seed Extract','A','A','A','I','A','Chickpea peptide (95% ROS reduction, UV/ozone)','0.5–3%'),
          C('Pisum Sativum (Pea) Peptide','A','A','A','II','A','Pea peptide (+14% hair diameter)','0.5–2%'),
          C('Hydrolyzed Adansonia Digitata Seed Extract','B','B','B','III','B','Baobab seed hydrolysate','0.5–3%'),
          C('Cetearamidoethyl Diethonium Hydrolyzed Rice Protein','B','B','B','III','B','Cationic protein conditioner','0.5–3%'),
          C('Polysorbate 60','B','B','B','I','B','Nonionic emulsifier (necrosis at 10% in animal study)','0.5–3%'),
          C('Polyglyceryl-6 Caprylate','A','A','A','I','A','Polyglyceryl ester (PEG-free solubilizer)','0.5–3%'),
          C('Butyloctanol','A','A','A','II','A','Branched emollient/solvent (prebiotic-adjacent)','0.05–1%'),
          C('Hydroxypropyltrimonium Honey','A','B','A','III','A','Cationic natural conditioner','0.1–2%'),
          C('Didecyldimonium Chloride','C','C','C','II','C','Dialkyl quat (disinfectant-adjacent)','0.05–0.5%'),
          C('Polyacrylamidopropyltrimonium Chloride (N-DurHance A-1000)','B','B','B','III','B','Cationic homopolymer','0.5–3%'),
          C('Alpha-Glucan Hydroxypropyltrimonium Chloride (AURIST AGC)','A','B','A','III','A','Cationic biopolymer','0.6–3%'),
          C('Ethylene Glycol Monostearate (EGMS / Glycol Stearate)','A','B','A','III','B','Pearlizing wax ester/emollient','0.5–2%'),
          C('Hydrolyzed Yeast Protein','A','A','A','II','A','Protein conditioner','0.1–3%'),
          C('Hydrolyzed Corn Protein','A','A','A','I','A','Protein conditioner','0.5–3%'),
          C('Tyrosine','A','A','A','I','A','Free amino acid (NMF)','0.05–0.5%'),
          C('Wheat Amino Acids','A','B','A','II','A','Amino acid complex','0.5–5%'),
          C('Soy Amino Acids','A','B','A','II','A','Amino acid complex','0.5–5%'),
          C('Arginine HCl','A','A','A','II','A','Free amino acid (NMF/cationic)','0.1–2%'),
          C('Serine','A','A','A','II','A','Free amino acid (NMF)','0.1–2%'),
          C('Threonine','A','A','A','II','A','Free amino acid (NMF)','0.1–2%'),
          C('Proline','A','A','A','II','A','Free amino acid (NMF/collagen-adjacent)','0.1–2%'),
          C('Glycine','A','A','A','II','A','Free amino acid (NMF/buffering)','0.05–1%'),
          C('Zinc Chloride','A','A','A','II','A','Mineral salt (trace-mineral/stabilizer)','0.01–0.5%'),
          C('PEG-35 Castor Oil','B','B','A','II','B','Solubilizer','0.5–3%'),
          C('Ethoxydiglycol','B','B','B','II','C','Solvent/penetration enhancer','0.5–3%'),
          C('Cocos Nucifera (Coconut) Milk / Milk Protein','A','B','A','II','A','Plant-derived protein/humectant complex','0.5–5%'),
          C('PPG-26-Buteth-26','B','B','A','II','B','Solubilizer/emulsifier','0.5–2%'),
          C('Cocamidopropyl Hydroxysultaine','A','A','A','I','A','Amphoteric surfactant (sulfobetaine)','2–8%'),
          C('Sodium Isethionate','A','A','A','II','A','Mild anionic conditioning/buffering agent','0.5–3%'),
          C('Hydrogenated Coconut Acid','A','B','A','II','B','Fatty acid/co-surfactant','0.5–3%'),
          C('Hydroxypropyltrimonium Hydrolyzed Wheat Protein','A','A','A','II','A','Cationic protein conditioner','0.5–3%'),
          C('Divinyldimethicone/Dimethicone Copolymer','A','A','A','II','A','Silicone elastomer conditioner','0.5–3%'),
          C('Glutamic Acid','A','A','A','II','A','Free amino acid (NMF)','0.1–2%'),
          C('Hydrolyzed Vegetable Protein PG-Propyl Silanetriol','A','A','A','II','A','Protein-silicone hybrid conditioner','0.25–1%'),
          C('Pisum Sativum (Pea) Protein','A','B','A','II','A','Plant protein conditioner','0.5–3%'),
          C('Quaternium-95','B','B','B','II','B','Silicone-modified quat','0.1–2%'),
          C('Bis-Aminopropyl Diglycol Dimaleate','A','A','A','II','A','Polymeric conditioner/film-former','0.1–2%'),
          C('Pseudozyma Epicola/Camellia Sinensis Seed Oil Ferment Extract Filtrate','A','A','A','II','A','Fermented plant-oil conditioner','0.1–1%'),
          C('Pseudozyma Epicola/Argania Spinosa Kernel Oil Ferment Filtrate','B','B','B','III','C','Fermented plant-oil conditioner','0.1–1%'),
        ];
        return rows;
      })()),
      M('Module 3','Humectants · HSMCI',['MS','Humectant Efficacy','Barrier Support','Osmotic Concern','Irritation'],(function(){
        const H=(n,ms,he,ev,g,cls,opt)=>[n,{MS:ms,'Humectant Efficacy':he,'Barrier Support':(ms==='A'?'A':'B'),'Osmotic Concern':(ms==='A'?'A':'B'),Irritation:(ms==='A'?'A':'B')},opt||'1–5%',ev,g,cls];
        const rows=[
          H('Glycerin','A','A','I','A','Humectant','1–10%'), H('Betaine','A','A','I','A','Osmolyte/humectant','1–5%'),
          H('Sodium PCA','A','A','I','A','NMF','0.5–5%'), H('Sodium Lactate','A','A','I','A','NMF/humectant','0.5–5%'),
          H('Sodium Hyaluronate','A','A','I','A','Humectant/polymer','0.05–1%'), H('Hyaluronic Acid','A','A','I','A','Humectant/polymer','0.01–1%'),
          H('Hydrolyzed Hyaluronic Acid','A','A','II','A','Low-MW humectant','0.01–1%'), H('Sorbitol','A','A','I','A','Polyol','1–10%'),
          H('Xylitol','A','A','II','A','Polyol/prebiotic-associated','0.5–5%'), H('Trehalose','A','A','II','A','Disaccharide/osmolyte','0.5–5%'),
          H('Mannitol','A','B','II','A','Polyol','0.5–5%'), H('Propylene Glycol','A','A','I','A','Glycol','1–5%'),
          H('Butylene Glycol','A','A','I','A','Glycol','1–10%'),
          H('Pentylene Glycol','A','A','II','A','Glycol','1–5%'), H('Hexylene Glycol','B','B','II','B','Glycol','0.5–5%'),
          H('1,2-Hexanediol','A','B','II','A','Glycol','0.5–5%'), H('Caprylyl Glycol','A','B','II','A','Glycol','0.2–2%'),
          H('Saccharide Isomerate','A','A','II','A','Carbohydrate complex','0.5–5%'), H('Hydroxyethyl Urea','A','A','II','A','Urea derivative','1–10%'),
          H('Urea','A','A','I','A','NMF component','2–10%'),
         
          H('Beta-Glucan','A','A','I','A','Polysaccharide','0.1–1%'),
          H('Panthenol','A','A','I','A','Pro-vitamin/humectant','0.5–5%'),
          H('Glycereth-26','A','A','II','A','Polyether humectant','1–10%'), H('PEG-8','A','B','II','A','Polyether humectant','1–10%'),
          H('PEG-12','A','B','II','A','Polyether humectant','1–10%'),
          H('Dipropylene Glycol','A','A','I','A','Glycol','1–5%'), H('Erythritol','A','B','II','A','Polyol','0.5–5%'),
          H('Xylitylglucoside','A','A','I–II','A','Sugar-derived humectant','0.5–3%'), H('Anhydroxylitol','A','A','I–II','A','Sugar-derived humectant','0.5–3%'),
          H('Maltitol','A','B','II','A','Polyol','1–10%'), H('Sucrose','A','B','I–II','A','Sugar (humectant/physical exfoliant)','1–20%'),
          H('Safflower Glucoside','A','B','III','B','Sugar-derived humectant','0.5–3%'), H('Mel Extract (Honey Extract)','A','A','I','A','Botanical humectant/antimicrobial','0.5–5%'),
          H('Fermented Rice Water','B','C','III','B','Botanical humectant/fermentation-derived','0.5–5%'), H('Oryza Sativa (Rice) Bran Water','A','B','II','A','Botanical humectant/steam-distillate','0.5–5%'),
          H('Cocos Nucifera (Coconut) Water','A','A','I','A','Botanical humectant','0.5–5%'), H('Bacillus/Rice Ferment Filtrate','A','B','II','A','Fermented botanical humectant','0.5–5%'),
          H('Propanediol','A','A','I','A','Glycol (bio-based)','1–10%'), H('Dimethyl Isosorbide','A','B','I','A','Solvent/humectant','1–10%'),
          H('Acetamide MEA','B','B','I','B','Ethanolamide humectant (CIR 7.5% leave-on ceiling; nitrosamine caution)','1–5%'),
          H('Isopentyldiol','A','A','I','A','Alkane diol humectant','0.5–5%'),
          H('Methyl Gluceth-10','A','A','I','A','Alkyl glucoside ether humectant','0.5–5%'), H('Glucose','A','A','I','A','Simple sugar humectant','1–5%'),
          H('Rhamnose','A','A','II','A','Rare sugar humectant','0.5–3%'), H('Triethylene Glycol','A','B','I','B','Glycol (CIR: avoid on damaged skin)','0.5–3%'),
        ];
        return rows;
      })()),
      M('Module 4','Barrier Lipids · BMLCI',['MS','BR','LC','TEWL','LA','AI','OS','IR'],(function(){
        const L=(n,cls,ms,br,lc,tewl,la,ai,os,ir,opt,caution,disr,ev,g)=>[n,{MS:ms,BR:br,LC:lc,TEWL:tewl,LA:la,AI:ai,OS:os,IR:ir},opt,ev,g,cls,{caution,disr}];
        const rows=[
          L('Ceramide NP','Ceramide','A','A','A','A','A','A','A','A','0.05–1%','1–2%','>2%','I','A'),
          L('Ceramide AP','Ceramide','A','A','A','A','A','A','A','A','0.05–1%','1–2%','>2%','II','A'),
          L('Ceramide EOP','Ceramide','A','A','A','A','A','A','A','A','0.05–1%','1–2%','>2%','II','A'),
          L('Ceramide EOS','Ceramide','A','A','A','A','A','A','A','A','0.05–1%','1–2%','>2%','II','A'),
          L('Ceramide NS','Ceramide','A','A','A','A','A','A','A','A','0.05–1%','1–2%','>2%','II','A'),
          L('Ceramide AS','Ceramide','A','A','A','A','A','A','A','A','0.05–1%','1–2%','>2%','II','A'),
          L('Ceramide NG','Ceramide','A','A','A','A','A','A','A','A','0.05–1%','1–2%','>2%','II','A'),
          L('Ceramide AG','Ceramide','A','A','A','A','A','A','A','A','0.05–1%','1–2%','>2%','II','A'),
          L('Ceramide AH','Ceramide','A','A','A','A','A','A','A','A','0.05–1%','1–2%','>2%','II','A'),
          L('Phytosphingosine','Ceramide precursor','A','A','A','A','A','A','A','A','0.05–0.5%','0.5–1%','>1%','II','A'),
          L('Sphingosine','Ceramide precursor','B','A','A','A','A','A','B','B','0.05–0.5%','0.5–1%','>1%','II','B'),
          L('Cholesterol','Sterol','A','A','A','A','A','A','A','A','0.1–2%','2–5%','>5%','I','A'),
          L('Lecithin','Phospholipid','A','A','A','B','A','A','B','A','0.5–3%','3–5%','>5%','II','A'),
          L('Hydrogenated Lecithin','Phospholipid','A','A','A','A','A','A','A','A','0.5–3%','3–5%','>5%','II','A'),
          L('Linoleic Acid','Essential FA','A','A','A','A','A','A','B','A','0.1–2%','2–5%','>5%','I','A'),
          L('Alpha-Linolenic Acid','Essential FA','A','B','A','B','A','A','B','A','0.1–2%','2–5%','>5%','II','A'),
          L('Gamma-Linolenic Acid','Essential FA','A','B','A','B','A','A','C','A','0.1–2%','2–5%','>5%','II','A'),
          L('Arachidonic Acid','PUFA','B','B','B','B','B','C','C','B','0.05–0.5%','0.5–1%','>1%','III','B'),
          L('Palmitic Acid','Saturated FA','B','B','B','B','B','B','A','A','0.5–3%','3–5%','>5%','II','B'),
          L('Stearic Acid','Saturated FA','B','B','B','B','B','B','A','A','0.5–3%','3–5%','>5%','II','B'),
          L('Behenic Acid','Saturated FA','B','B','B','B','B','B','A','A','0.5–3%','3–5%','>5%','III','B'),
          L('Oleic Acid','MUFA','C','C','C','C','C','B','B','B','0.1–1%','1–3%','>3%','I','C'),
          L('Lauric Acid','Free fatty acid','B','B','B','C','B','B','A','C','0.1–2%','2–5%','>5%','I','C'),
          L('Myristic Acid','Saturated FA','C','B','B','B','B','B','A','B','0.1–1%','1–3%','>3%','III','C'),
          L('Caprylic/Capric Triglyceride','Emollient lipid','A','A','A','B','B','A','A','A','1–10%','10–20%','>20%','II','A'),
          L('Squalane','Biomimetic emollient','A','A','A','A','A','A','A','A','0.5–10%','10–20%','>20%','I','A'),
          L('2-Oleamido-1,3-Octadecanediol','Ceramide-like lipid','A','A','A','A','A','A','A','A','0.05–0.5%','0.5–1%','>1%','II','A'),
          L('Helianthus Annuus (Sunflower) Seed Oil','Plant oil (linoleic-rich)','A','A','A','A','A','A','B','A','1–10%','10–20%','>20%','II','A'),
          L('Hydrogenated Polyisobutene','Synthetic hydrocarbon emollient','A','A','A','A','A','A','A','A','0.5–5%','5–10%','>10%','I','A'),
          L('Isopropyl Jojobate','Jojoba-derived ester emollient','A','A','A','B','A','A','B','A','1–8%','8–15%','>15%','II','A'),
          L('Jojoba Alcohol','Jojoba-derived fatty alcohol','A','A','A','A','A','A','A','A','1–5%','5–10%','>10%','I','A'),
          L('Jojoba Esters','Jojoba-derived wax ester blend','A','A','A','A','A','A','A','A','1–10%','10–15%','>15%','I','A'),
          L('Argania Spinosa (Argan) Kernel Oil','Plant oil (oleic/linoleic-rich)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','II','A'),
          L('Olea Europaea (Olive) Fruit Oil','Plant oil (oleic-dominant)','B','B','B','C','B','B','B','B','1–10%','10–20%','>20%','II–III','B'),
          L('Prunus Amygdalus Dulcis (Sweet Almond) Oil','Plant oil (oleic/linoleic-rich)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','II','A'),
          L('Sweet Almond Oil Polyglyceryl-4 Esters','Almond-derived ester emollient/solvent','A','A','A','B','A','A','B','A','1–5%','5–10%','>10%','II','A'),
          L('Butyrospermum Parkii (Shea) Butter','Plant butter (stearic/oleic-rich)','A','A','A','A','A','A','A','A','1–15%','15–25%','>25%','I–II','A'),
          L('Theobroma Cacao (Cocoa) Seed Butter','Plant butter (stearic/palmitic-rich)','A','A','A','B','A','A','B','A','1–15%','15–25%','>25%','II','A'),
          L('Simmondsia Chinensis (Jojoba) Seed Oil','Wax ester (sebum-mimetic)','A','A','A','A','A','A','A','A','1–10%','10–20%','>20%','II','A'),
          L('Glycine Soja (Soybean) Oil','Plant oil (linoleic-rich)','B','B','A','B','A','B','B','A','1–10%','10–20%','>20%','II','B'),
          L('Triticum Vulgare (Wheat) Germ Oil','Plant oil (linoleic-rich, vitamin E-dense)','B','B','A','C','A','B','B','B','0.5–5%','5–10%','>10%','II–III','B'),
          L('Paraffinum Liquidum (Light Liquid Paraffin / Mineral Oil)','Occlusive hydrocarbon','A','A','A','A','A','B','A','A','1–15%','15–25%','>25%','I','A'),
          L('Cocos Nucifera (Coconut) Oil','Plant oil (lauric-acid-rich, saturated)','B','C','A','C','B','B','C','D','1–10%','10–15%','>15%','I','C'),
          L('Hydrogenated Palm Glycerides Citrate','Emulsifier/emollient (citrate ester)','A','B','A','C','B','B','B','B','0.5–5%','5–10%','>10%','II','B'),
          L('Glyceryl Oleate','Emulsifier/emollient (monoglyceride)','A','A','A','B','A','A','B','A','0.5–5%','5–10%','>10%','I','A'),
          L('Hydrogenated Castor Oil','Occlusive/emulsifier wax','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('C13-15 Alkane (Hemisqualane)','Hydrocarbon emollient','A','A','A','A','A','A','A','A','0.5–10%','10–15%','>15%','I','A'),
          L('Hydrogenated Ethylhexyl Olivate','Olive-derived ester','A','A','A','B','A','A','B','A','1–10%','10–15%','>15%','II','A'),
          L('Hydrogenated Rapeseed Oil','Hydrogenated plant oil','A','A','A','B','A','A','B','A','1–10%','10–15%','>15%','II','A'),
          L('Carthamus Tinctorius (Safflower) Seed Oil','Plant oil','A','A','A','B','A','A','B','A','1–10%','10–15%','>15%','I','A'),
          L('Hydrogenated Olive Oil Unsaponifiables','Olive-derived unsaponifiables','A','A','A','B','A','A','B','A','0.5–5%','5–10%','>10%','II','A'),
          L('Orbignya Oleifera (Babassu) Seed Oil','Plant oil','A','A','A','B','A','A','B','A','1–10%','10–15%','>15%','I','A'),
          L('Isopropyl Palmitate','Alkyl ester','B','B','B','D','B','B','C','C','0.5–5%','5–10%','>10%','I','C'),
          L('Phytosteryl/Isostearyl/Cetyl/Stearyl/Behenyl Dimer Dilinoleate','Dimer dilinoleate ester','A','A','A','A','A','A','A','A','0.5–5%','5–10%','>10%','I','A'),
          L('Oryza Sativa (Rice) Bran Oil','Plant oil (oryzanol/tocotrienol-rich)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','II','A'),
          L('Prunus Armeniaca (Apricot) Kernel Oil','Plant oil (oleic/linoleic-rich)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Helianthus Annuus (Sunflower) Seed Extract','Plant extract (linoleic/tocopherol-rich)','A','B','A','B','A','A','B','A','0.5–3%','3–5%','>5%','II–III','B'),
          L('PPG-3 Benzyl Ether Myristate','Synthetic ester emollient','A','A','A','A','A','A','A','A','0.5–3%','3–5%','>5%','I','A'),
          L('Octyldodecyl Ricinoleate','Synthetic ester emollient (castor-derived)','A','A','A','B','A','A','B','A','0.5–5%','5–10%','>10%','I','A'),
          L('Cetyl Esters','Synthetic ester emollient/occlusive','A','A','A','B','A','A','B','A','1–10%','10–15%','>15%','I','A'),
          L('Vitis Vinifera (Grape) Seed Oil','Plant oil (linoleic-rich, antioxidant)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Persea Gratissima (Avocado) Oil','Plant oil (oleic-rich, occlusive)','B','B','B','C','B','B','B','B','1–10%','10–20%','>20%','II','B'),
          L('Glyceryl Linoleate','Ester/essential-fatty-acid emollient','A','A','A','B','A','A','B','A','0.5–5%','5–10%','>10%','I','A'),
          L('Glyceryl Linolenate','Ester/essential-fatty-acid emollient','A','A','A','B','A','A','B','A','0.5–5%','5–10%','>10%','I','A'),
          L('Macadamia Ternifolia (Macadamia) Seed Oil','Plant oil (palmitoleic-rich, sebum-like)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Sesamum Indicum (Sesame) Seed Oil','Plant oil (balanced oleic/linoleic)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Ricinus Communis (Castor) Seed Oil','Plant oil (ricinoleic-dominant)','A','A','A','C','B','A','C','B','1–10%','10–20%','>20%','I','B'),
          L('Isopropyl Myristate','Synthetic ester emollient','B','A','B','D','B','B','B','C','1–10%','10–15%','>15%','I','C'),
          L('Isohexadecane','Synthetic branched hydrocarbon','A','A','A','B','A','A','A','B','1–10%','10–15%','>15%','II','B'),
          L('Adansonia Digitata (Baobab) Seed Oil','Plant oil (balanced, non-comedogenic)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','II','A'),
          L('Euphorbia Antisyphilitica / Cerifera (Candelilla) Wax','Plant wax (occlusive/structuring)','A','A','A','B','A','A','B','A','0.5–5%','5–10%','>10%','I','A'),
          L('Brassica Campestris (Rapeseed)/Aleurites Fordii (Tung) Oil Copolymer','Plant-oil copolymer film-former','B','B','B','B','B','B','B','B','0.5–3%','3–5%','>5%','III','B'),
          L('Wheat Germ Acid (Triticum Vulgare)','Fatty-acid fraction (wheat germ)','A','A','A','C','B','A','B','B','0.5–3%','3–5%','>5%','II','B'),
          L('Sclerocarya Birrea (Marula) Seed Oil','Plant oil (oleic-dominant, low comedogenic)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Isosorbide Dicaprylate','Bio-derived ester emollient (aquaporin-3 upregulation)','A','A','A','A','A','A','A','A','1–5%','5–10%','>10%','I','A'),
          L('Linum Usitatissimum (Linseed/Flaxseed) Seed Oil','Plant oil (alpha-linolenic-rich; drying oil)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Cannabis Sativa (Hemp) Seed Oil','Plant oil (linoleic/gamma-linolenic-rich)','B','A','A','B','A','B','B','B','1–10%','10–20%','>20%','I','B'),
          L('Camellia Sinensis (Green Tea) Seed Oil','Plant oil (antioxidant-rich; distinct from leaf extract)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Nelumbo Nucifera (Lotus) Seed Oil','Plant oil','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Vaccinium Macrocarpon (Cranberry) Seed Oil','Plant oil (balanced omega-3/6)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Solanum Lycopersicum (Tomato) Seed Oil','Plant oil (lycopene-adjacent antioxidant)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','I','A'),
          L('Ethyl Linoleate','Fatty-acid ethyl ester','A','A','A','B','A','A','B','A','1–10%','10–15%','>15%','I','A'),
          L('Ethyl Oleate','Fatty-acid ethyl ester (solvent/penetration enhancer)','A','B','A','B','A','B','B','B','1–10%','10–15%','>15%','II','B'),
          L('Caprylic Acid','Medium-chain free fatty acid (antimicrobial-adjacent)','A','A','A','B','A','A','B','A','0.5–5%','5–10%','>10%','I','A'),
          L('Crambe Abyssinica Seed Oil','Plant oil (erucic-acid-rich)','A','A','A','B','A','A','B','A','1–10%','10–20%','>20%','II','A'),
          L('Phospholipids','Phospholipid (mixed complex)','A','A','A','B','A','A','B','A','0.5–3%','3–5%','>5%','I','A'),
        ];
        return rows;
      })()),
      M('Module 5','Hair Growth Actives · HGSSI',['GP','AG','FA','DHT','FP','SC','HA','AI'],(function(){
        const G=(n,cls,gp,ag,fa,dht,fp,sc,ha,ai,opt,ev,mm,g)=>[n,{GP:gp,AG:ag,FA:fa,DHT:dht,FP:fp,SC:sc,HA:ha,AI:ai},opt,ev,g,cls,{mm}];
        const rows=[
          G('Minoxidil','Vasodilator (Rx/OTC-drug, jurisdiction-dependent)','A','A','A','C','A','B','A','B','2–5%*','I','B','A'),
          G('Aminexil','Anti-fibrosis peptide','B','B','B','C','B','B','B','B','1.5–3%','II','B','B'),
          G('Redensyl®','Peptide/DHQG complex','B','B','B','C','B','B','B','B','~1–3%','II–III','B','B'),
          G('Procapil®','Vitamin B3/oleanolic/biotinoyl complex','B','B','B','B','B','B','B','B','~1–3%','II–III','B','B'),
          G('Capixyl™','Peptide + red clover complex','B','B','B','B','B','B','B','B','~1–3%','II–III','B','B'),
          G('Baicapil™','Botanical extract complex','B','B','B','C','B','B','B','B','~1–3%','II–III','B','B'),
          G('AnaGain™','Pea sprout extract','B','B','B','C','B','B','B','B','~2–4%','II–III','B','B'),
          G('Caffeine','Methylxanthine','B','B','B','C','B','B','B','B','0.2–1%','II','A/B','B'),
          G('Adenosine','Nucleoside','A','A','B','C','B','B','B','B','~0.5%','I–II','A','A'),
          G('Melatonin','Peptide/signal-molecule active','B','B','B','C','B','B','B','A','0.0033–1%','II','A','B'),
          G('Copper Peptide (GHK-Cu)','Peptide/signal-molecule active','B','B','B','C','B','B','B','B','0.005–0.03%','II–III','B','B'),
          G('Finasteride (topical, compounded)','Rx/compounded drug active','A','A','A','A','A','B','A','B','0.1–0.25%','II','C','B'),
          G('Spironolactone (topical, compounded)','Rx/compounded drug active','B','B','B','B','B','B','B','B','~5%','III','C','C'),
          G('Rosmarinic Acid (isolated)','Isolated botanical-derived active','B','B','B','C','B','B','A','A','0.1–1%','III','A','B'),
          G('Biochanin A','Isolated botanical-derived active','B','B','B','B','B','B','A','A','0.1–1%','III','B','B'),
          G('Trichogen™','Commercial complex','B','B','B','C','B','B','B','B','~1–2%','III','B','B'),
          G('Follicusan™','Commercial complex','B','B','B','C','B','B','B','B','~1–3%','III','B','B'),
          G('Biotinoyl Tripeptide-1','Peptide/signal-molecule active','B','B','B','C','B','B','B','B','0.001–0.01%','III','B','B'),
          G('Copper Tripeptide-1','Peptide/signal-molecule active','B','B','B','C','B','B','B','B','0.005–0.03%','III','B','B'),
          G('Dipeptide Diaminobutyroyl Benzylamide Diacetate (Syn-Ake)','Peptide/signal-molecule active','C','D','C','C','B','B','B','B','0.001–4%','III','Neuromuscular (myorelaxant) mechanism; no independent hair/scalp evidence — off-label use in hair formulas','C'),
          G('Saw Palmetto Extract (Serenoa Repens)','Botanical DHT-active','B','B','B','A','B','A','B','B','1–6%','I–II','Randomized placebo-controlled oral trial data; topical route thinner','B'),
          G('Taurine','Amino-acid active','A','B','B','B','B','A','A','A','0.5–2%','I–II','Direct ex-vivo human hair-follicle study (Collin 2006)','A'),
          G('Pisum Sativum Sprout Extract (AnaGain)','Plant sprout extract','A','B','A','B','A','A','B','A','1–4%','I','FGF7 +56%, noggin +85% gene-expression data in plucked human follicles','A'),
          G('Adenosine Phosphate','Nucleotide active','B','A','B','C','B','B','B','B','0.1–0.5%','II','Phosphorylated form; distinct bioavailability from free Adenosine','B'),
          G('Dihydroquercetin Glucoside (DHQG)','Redensyl constituent (glycosylated flavonoid)','A','B','B','B','B','A','B','B','4.44–5.62mM','II','HFDPc metabolism + ORSc proliferation in vitro','B'),
          G('Epigallocatechin Gallate Glucoside (EGCG2)','Redensyl constituent (glycosylated catechin)','A','B','B','B','A','A','B','B','0.4–0.605mM','II','Glucosylated EGCG; improved solubility/stability','B'),
          G('Ethyl Nicotinate','Rubefacient/vasodilator','C','B','B','C','C','B','B','C','0.1–0.5%','I','Vasodilation is not a demonstrated growth mechanism','C'),
          G('Hexyl Nicotinate','Rubefacient/vasodilator','C','B','B','C','C','B','B','C','0.05–0.3%','I','Stronger penetration/rubefacient effect than niacin','C'),
          G('Capsicum Annuum Extract (Rubefacient use)','Rubefacient botanical','C','B','B','C','C','B','B','C','0.01–0.1%','I','CIR-reviewed; aflatoxin/N-nitroso contaminant caution','C'),
          G('Hexapeptide-11','Peptide/signal-molecule active','B','B','B','B','B','A','A','B','0.0001–0.01%','III','Biofermented peptide; AR upregulation in vitro only','B'),
          G('Creatine','Cellular-energy active','B','C','C','C','C','B','B','B','0.5–3%','III','Cellular energy support; limited independent hair-specific data','B'),
          G('Exosomes (plant/cosmetic-grade, topical)','Emerging/heterogeneous evidence','C','C','C','C','C','C','C','C','Supplier-variable','IV','C','C'),
        ];
        rows.push(
          G('Apigenin','Isolated flavonoid (Procapil constituent)','B','B','B','B','B','B','B','B','0.01–0.1%','II','','B'),
          G('Oleanolic Acid','Isolated triterpenoid (Procapil constituent)','B','B','B','B','B','B','B','B','0.01–0.1%','II','','B'),
          G('Resveratrol','Polyphenol','B','B','B','B','C','B','A','A','0.01–0.5%','II–III','','B'),
          G('Palmitoyl Tripeptide-1','Peptide/signal-molecule active','B','B','B','B','C','B','B','B','0.001–0.05%','I–II','','B'),
          G('Palmitoyl Tetrapeptide-7','Peptide/signal-molecule active','B','B','B','B','C','B','B','B','0.001–0.05%','I–II','','B'),
          G('Oligopeptide-2','Growth-factor mimetic (IGF-1 analog)','C','C','C','D','C','C','C','C','0.0001–0.001%','III','','C'),
          G('Sodium DNA (PDRN)','Polydeoxyribonucleotide (medical/injectable-derived)','C','C','C','C','C','C','C','C','0.1–1%','III','Restricted — EWG VERIFIED products cannot contain without substantiation','C'),
          G('sh-Oligopeptide-78 (K18Peptide)','Biomimetic keratin-structural peptide','A','B','B','C','B','B','B','B','0.001–0.1%','III','','B'),
          G('Coffea Arabica (Coffee) Seed/Bean Extract','Botanical extract (roasted)','B','C','B','C','B','B','B','B','0.5–3%','III','Roasted bean/seed extract; distinct from green/unroasted variant','B'),
          G('Coffea Arabica (Green/Unroasted Coffee) Seed Extract','Botanical extract (unroasted)','B','C','B','C','B','B','B','B','0.5–3%','III–IV','Distinct from roasted Coffea Arabica extract; lower peer-reviewed evidence','B'),
          G('Acetyl Tetrapeptide-3','Peptide/signal-molecule active','B','B','B','C','B','B','B','B','0.001–0.01%','II','','B'),
          G('Argania Spinosa Callus Culture Extract (Argan Stem Cells / PhytoCellTec Argan)','Plant stem-cell extract','B','B','B','C','B','B','B','B','0.1–2%','III','','B'),
          G('Curcuma Longa (Turmeric) Callus Culture Conditioned Media (Capillia LongaPPF)','Plant stem-cell conditioned media','B','B','B','C','B','B','B','B','0.1–2%','III','','B'),
          G('Mucopolysaccharides (Tricosaccaride)','Vegetable-based complex','B','B','B','C','B','B','B','B','0.5–2%','III','','B'),
          G('Trifolium Pratense (Red Clover) Flower Extract','Isoflavone-rich botanical','A','B','A','C','B','B','A','A','0.5–3%','II','','A'),
        );
        return rows;
      })()),
      M('Module 6','Botanical Extracts · BHSMI',['GP','DHT','AI','AM','AO','BR','SR','MS','IR'],(function(){
        const B=(n,cls,gp,dht,ai,am,ao,br,sr,ms,ir,ev,util,target,g)=>[n,{GP:gp,DHT:dht,AI:ai,AM:am,AO:ao,BR:br,SR:sr,MS:ms,IR:ir},'—',ev,g,cls,{util,target}];
        const rows=[
          B('Aloe vera','Barrier Support','C','C','A','B','A','A','C','A','A','II','Soothing/barrier support','Sensitive, irritated scalp','A'),
          B('Green Tea','Antioxidant Botanicals','B','B','A','B','A','B','B','A','A','II','Antioxidant/follicular support','Oily, inflammatory scalp','A'),
          B('Rosemary Extract','DHT/Scalp Botanicals','B','B','B','B','A','B','A','B','B','II','Hair-growth/scalp stimulation','Hair thinning, oily scalp','B'),
          B('Licorice','Traditional Ayurvedic Botanicals','C','C','A','B','A','A','B','A','A','II–III','Anti-inflammatory/soothing','Sensitive/inflammatory scalp','A'),
          B('Onion (Allium Cepa Bulb Extract)','DHT/Scalp Botanicals','B','C','A','B','A','B','B','B','B','II','Hair-growth support','Alopecia/hair thinning','B'),
          B('Ginseng','Traditional Ayurvedic Botanicals','B','B','B','B','A','B','B','A','A','II–III','Follicular stimulation','Hair thinning','B'),
          B('Hibiscus','Traditional Ayurvedic Botanicals','C','C','B','B','A','B','B','A','A','III','Conditioning/scalp support','Dry, dull scalp/hair','B'),
          B('Saw Palmetto','DHT/Scalp Botanicals','B','A','B','B','B','B','B','B','A','II','Anti-androgen support','Androgen-related thinning','B'),
          B('Pumpkin Seed','DHT/Scalp Botanicals','B','B','B','B','A','B','B','A','A','II','Hair-growth nutritional/follicular support','Hair thinning','B'),
          B('Neem','Traditional Ayurvedic Botanicals','C','C','A','A','A','B','B','B','B','II–III','Scalp antimicrobial/anti-inflammatory','Dandruff/oily scalp','B'),
          B('Turmeric','Antioxidant Botanicals','C','C','A','B','A','B','B','A','A','II','Anti-inflammatory/antioxidant','Inflammatory scalp','B'),
          B('Gotu Kola','Traditional Ayurvedic Botanicals','C','C','A','B','A','A','C','A','A','II–III','Barrier/anti-inflammatory support','Sensitive scalp','B'),
          B('Oat','Barrier-Support Botanicals','C','C','A','B','A','A','C','A','A','I–II','Barrier restoration/soothing','Dry, sensitive scalp','B'),
          B('Chamomile Extract','Barrier-Support Botanicals','C','C','A','B','A','A','C','A','A','II','Soothing/anti-inflammatory','Sensitive/itchy scalp','B'),
          B('Amla (Phyllanthus Emblica)','Traditional Ayurvedic Botanicals','B','B','B','B','A','B','B','A','A','II','Antioxidant/hair conditioning','Hair thinning/dry scalp','A'),
          B('Fenugreek','Traditional Ayurvedic Botanicals','C','C','B','B','A','A','B','A','A','III','Conditioning/scalp support','Dry scalp/hair','B'),
          B('Calendula','Barrier-Support Botanicals','C','C','A','B','A','A','C','A','A','II–III','Soothing/anti-inflammatory','Sensitive scalp','A'),
          B('Arnica','Additional Botanicals','C','C','B','B','A','B','C','B','C','III','Scalp stimulation','Scalp discomfort','B'),
        ];
        rows.push(
          B('Epilobium Angustifolium (Willowherb/Fireweed) Extract','Anti-inflammatory Botanicals','C','C','A','B','A','A','B','A','A','II','Anti-inflammatory/anti-dandruff','Dandruff, itchy scalp','A'),
          B('Nasturtium Officinale (Watercress) Extract','Hair-Growth Signaling Botanicals','C','C','B','B','A','B','B','A','A','II','Follicular growth signaling','Hair thinning','B'),
          B('Zingiber Officinale (Ginger) Root Extract','Traditional Ayurvedic Botanicals','C','C','B','B','A','B','B','A','A','II–III','Circulation/scalp stimulation','Hair thinning','B'),
          B('Rosa Canina (Rosehip) Flower/Fruit Extract','Antioxidant Botanicals','A','C','A','B','A','A','A','A','A','I','Antioxidant/vitamin C source','Oxidative scalp stress, dull/damaged hair','A'),
          B('Scutellaria Baicalensis (Chinese Skullcap) Root Extract','DHT/Scalp Botanicals','B','A','A','B','A','B','A','A','A','I–II','DHT/androgen-related support','Androgenic hair thinning','A'),
          B('Euterpe Oleracea (Açaí) Fruit Extract','Antioxidant Botanicals','B','C','B','B','A','B','B','A','A','II','Antioxidant/scalp protection','General maintenance','B'),
          B('Punica Granatum (Pomegranate) Extract','Antioxidant Botanicals','B','C','B','B','A','B','B','A','A','II','Antioxidant/scalp protection','General maintenance','B'),
          B('Origanum Vulgare (Oregano) Leaf Extract','Antimicrobial Botanicals','C','C','B','B','B','B','C','B','C','II','Antimicrobial support','Microbial imbalance','B'),
          B('Musa Sapientum (Banana) Fruit Extract','Conditioning Botanicals','C','C','B','B','B','B','B','A','A','III','Conditioning/scalp support','Dry hair/scalp','B'),
          B('Morinda Citrifolia (Noni) Fruit Extract','Traditional Ayurvedic Botanicals','C','C','B','B','B','B','B','A','A','III','Conditioning/scalp support','General maintenance','B'),
          B('Arctium Lappa (Burdock) Root Extract','Traditional Ayurvedic Botanicals','C','C','B','B','B','B','B','A','A','IV','Traditional hair-growth support','Hair thinning','C'),
          B('Glycine Soja (Soybean) Germ Extract','DHT/Scalp Botanicals','A','A','A','B','A','A','A','A','A','I','DHT/androgen-related support','Androgenic hair thinning','A'),
          B('Triticum Vulgare (Wheat) Germ Extract','DHT/Scalp Botanicals','A','B','A','B','A','A','B','A','A','II','Hair-growth/antioxidant support','Hair thinning','A'),
          B('Leontopodium Alpinum (Edelweiss) Callus Culture Extract','Antioxidant Botanicals','A','C','A','B','A','A','B','A','A','I','Hair-growth support/antioxidant','Hair thinning, oxidative scalp stress','A'),
          B('Chenopodium Quinoa Seed Extract','DHT/Scalp Botanicals','A','A','A','B','A','A','A','A','A','I','Hair-growth/DHT support','Androgenic thinning','A'),
          B('Artemisia Umbelliformis Flower Extract','Antioxidant Botanicals','C','C','A','B','A','B','B','A','B','II','Antioxidant/anti-inflammatory','General maintenance','B'),
          B('Larix Europaea (Larch) Wood Extract','Barrier-Support Botanicals','C','B','A','B','B','B','B','A','A','II','Humectant/conditioning support','Dry scalp','B'),
          B('Cymbopogon Citratus (Lemongrass) Extract','Antimicrobial Botanicals','B','C','B','B','B','B','C','B','B','II','Antimicrobial/sebum-relevant','Oily scalp, folliculitis','B'),
          B('Azadirachta Indica (Neem) Leaf Extract','Traditional Ayurvedic Botanicals','C','C','A','A','A','B','C','B','C','II','Antimicrobial/anti-dandruff','Dandruff, oily scalp','B'),
          B('Tricosaccaride','Circulation/DHT Botanicals','B','C','A','B','B','B','B','A','A','II–III','Follicular microcirculation support','Hair thinning','B'),
          B('Tricalgoxyl','Circulation/DHT Botanicals','B','C','A','B','A','B','B','A','A','II–III','Algal polysaccharide, follicular support','Hair thinning','B'),
          B('Asparagopsis Armata Extract','Barrier-Support Botanicals','A','C','A','B','A','A','A','A','A','I','Marine algae, soothing/hydrating','Sensitive scalp','A'),
          B('Himanthalia Elongata Extract','Barrier-Support Botanicals','A','C','A','B','A','A','A','A','A','II','Marine algae, mineral/hydration support','Dry scalp','A'),
          B('Undaria Pinnatifida Extract','Barrier-Support Botanicals','A','C','A','B','A','A','A','A','A','I','Marine algae (fucoidan-rich)','General maintenance','A'),
          B('Glycosaminoglycans','Barrier-Support Botanicals','A','C','A','A','A','A','A','A','A','I','ECM/hydration support (CIR-reviewed)','Dry, sensitive scalp','A'),
          B('Sodium Chondroitin Sulfate','Barrier-Support Botanicals','B','C','A','B','A','A','A','A','A','II','Dermal papilla/connective-tissue support','Hair thinning','B'),
          B('Xylishine','Barrier-Support Botanicals','A','C','A','A','A','A','A','A','A','I–II','Scalp ceramide +27%, barrier +41%','Dry, damaged scalp/hair','A'),
          B('Unitrienol T-27','Sebum-Regulating Botanicals','A','C','A','A','A','A','B','A','A','II','Sterol-pathway sebum normalization','Oily scalp','A'),
          B('Coenzyme Q10 (Ubiquinone)','Antioxidant Botanicals','B','C','A','B','A','A','A','A','A','II','Hair keratin gene expression (ex-vivo)','Ageing scalp/hair','A'),
          B('Hedera Helix (Ivy) Extract','Clarifying/Antimicrobial Botanicals','B','C','A','C','A','B','B','A','A','II','Saponin cleansing/purifying','Oily scalp, buildup','B'),
          B('Malus Domestica (Apple) Fruit Extract','Antioxidant Botanicals','A','C','A','B','A','A','B','A','A','I','CIR-reviewed fruit extract (NOT stem/callus form)','General maintenance','A'),
          B('Avena Sativa (Oat) Kernel Extract','Barrier-Support Botanicals','A','C','A','A','A','A','A','A','A','I','Soothing/barrier, sensitive-skin standard','Sensitive, irritated scalp','A'),
          B('Capsicum Annuum Fruit Extract','Circulation-Stimulating Botanicals','B','C','B','B','B','B','B','B','B','I','Anti-dandruff/antimicrobial (milder than C. frutescens)','Dandruff','B'),
          B('Ginkgo Biloba Leaf Extract','Circulation/DHT Botanicals','B','B','A','B','B','B','B','B','B','I','Vasodilatory; NTP oral-dose carcinogenicity signal disclosed','Hair thinning','B'),
          B('Bacopa Monnieri (Brahmi) Extract','Traditional Ayurvedic Botanicals','A','A','A','B','B','B','B','A','A','II','Consolidated with legacy Brahmi entry','Hair thinning','B'),
          B('Olea Europaea (Olive) Leaf Extract','Antioxidant Botanicals','A','A','A','B','A','B','B','A','A','I–II','Oleuropein; UVA/ROS protection (distinct from fruit oil)','Oxidative scalp stress','A'),
          B('Hamamelis Virginiana (Witch Hazel) Extract','Clarifying/Antimicrobial Botanicals','A','B','B','B','A','B','B','B','B','I','Astringent; anti-Staph/Strep, ROS-scavenging','Oily scalp','B'),
          B('Lawsonia Inermis (Henna) Leaf Extract','Traditional Ayurvedic Botanicals','B','B','B','B','B','B','C','B','B','II','Conditioning/colourant; PPD-adulteration caution','General maintenance','B'),
          B('Polygonum Multiflorum (He Shou Wu) Root Extract','Traditional Botanicals','D','C','B','B','D','C','D','D','D','I–II','Traditional hair tonic — hepatotoxicity caution','Provisional; oral-route toxicity documented','D'),
          B('Eclipta Prostrata (Bhringraj) Extract','Traditional Ayurvedic Botanicals','A','A','A','B','A','A','B','A','A','II','Hair strengthening/antioxidant','Hair thinning','A'),
          B('Fragaria Ananassa (Strawberry) Fruit Extract','Antioxidant Botanicals','A','B','A','B','A','A','B','A','A','II','Antioxidant','Oxidative scalp stress','A'),
          B('Tilia Tomentosa (Silver Linden) Bud Extract','Barrier-Support Botanicals','A','B','A','A','B','A','A','A','A','I–II','Conditioning film-former/hydration','Dry scalp, rough cuticle','A'),
          B('Gardenia Florida Fruit Extract','Antioxidant Botanicals','B','B','B','B','B','B','B','B','B','III','Skin conditioning','General maintenance','B'),
          B('Juniperus Oxycedrus Extract','Antimicrobial Botanicals','B','C','B','B','B','B','C','B','C','II','Antimicrobial — verify Extract vs Tar form','Scalp purifying','C'),
          B('Zanthoxylum Bungeanum Fruit Extract','Antioxidant Botanicals','A','B','A','B','A','A','B','A','A','II','Antioxidant/skin conditioning','General maintenance','A'),
          B('Kelp Sulfated Oligosaccharides (Fucoidan)','Marine Botanicals','A','A','A','A','A','A','A','A','A','II','Hair conditioning/antioxidant','Dry, dull hair','A'),
          B('Brassica Oleracea Acephala (Kale) Leaf Extract','Antioxidant Botanicals','A','A','A','B','A','A','A','A','A','II','Antioxidant/barrier support','Oxidative scalp stress','A'),
          B('Lens Esculenta (Lentil) Seed Extract','Barrier-Support Botanicals','A','B','A','A','A','A','A','A','A','II','Skin protecting','Scalp density support','A'),
          B('Carica Papaya (Papaya) Fruit Extract','Antioxidant Botanicals','B','B','A','B','A','A','B','A','B','I','Mild enzymatic exfoliation','Scaling, dull scalp','B'),
          B('Acacia Concinna (Shikakai) Fruit Extract','Traditional Ayurvedic Botanicals','B','C','B','B','B','B','B','B','B','III','Traditional saponin cleanser','General cleansing','B'),
          B('Nymphaea Alba (White Lotus/White Water Lily) Flower Extract','Antioxidant Botanicals','A','B','A','B','A','A','B','A','A','II','Soothing/antioxidant tonic','Sensitive scalp','A'),
          B('Piper Nigrum (Black Pepper) Fruit Extract','Antimicrobial Botanicals','B','B','B','C','B','B','C','B','B','II','Tonic/refreshing — irritation caution','Scalp stimulation','B'),
          B('Magnolia Officinalis Bark Extract','Antimicrobial Botanicals','A','B','A','B','A','A','B','A','B','II','Anti-inflammatory/anti-dandruff','Dandruff, inflamed scalp','B'),
          B('Melaleuca Alternifolia (Tea Tree) Leaf Extract','Antimicrobial Botanicals','A','B','A','B','A','A','C','A','B','III','Milder antimicrobial vs. the essential oil','Dandruff, sensitive scalp','B'),
          B('Inga Alba Bark Extract','Antimicrobial Botanicals','A','A','A','B','A','A','B','A','A','II','Anti-dandruff/sebum regulation','Dandruff, itch, oily scalp','A'),
          B('Saccharum Officinarum (Sugar Cane) Extract','Antioxidant Botanicals','A','B','A','A','A','A','C','A','B','I','Mild AHA exfoliation/hydration','Scaling, dull scalp','B'),
          B('Citrus Limon (Lemon) Fruit Extract','Antioxidant Botanicals','A','B','A','B','A','A','C','B','B','I–II','Antioxidant/astringent','Oily scalp','B'),
          B('Caesalpinia Spinosa (Tara) Fruit Extract','Barrier-Support Botanicals','A','A','A','A','A','A','A','A','A','I–II','Film-forming/combability','Damaged, rough hair','A'),
          B('Ilex Paraguariensis (Yerba Mate) Leaf Extract','Antioxidant Botanicals','A','B','A','B','A','A','B','A','B','II','Antioxidant/shine','Oxidative scalp stress','A'),
          B('Carthamus Tinctorius (Safflower) Oleosomes','Barrier-Support Botanicals','A','B','A','A','A','A','B','A','B','III','Emollient delivery','Dry scalp','B'),
          B('Salvia Hispanica (Chia) Seed Extract','Barrier-Support Botanicals','A','B','A','A','A','A','B','A','B','III','Emollient/antioxidant','Dry scalp','B'),
          B('Ahnfeltiopsis Concinna Extract','Barrier-Support Botanicals','C','C','A','B','B','A','B','A','A','III','Soothing/hydrating','Sensitive scalp','A'),
          B('Allium Cepa (Onion) Bulb Oil','DHT/Scalp Botanicals','B','B','C','B','A','B','B','C','C','II','Hair-growth/scalp stimulation','Hair thinning','C'),
          B('Acacia Dealbata (Mimosa) Flower Extract','Antioxidant Botanicals','C','C','C','B','B','B','C','B','C','III','Antioxidant floral','General maintenance','C'),
          B('Murraya Koenigii (Curry) Leaf Extract','Traditional Ayurvedic Botanicals','C','C','B','B','B','B','B','A','A','III','Antioxidant/conditioning','General maintenance','B'),
          B('Apple Cider Vinegar (Acetum)','Clarifying/Antimicrobial Botanicals','C','C','B','C','B','C','C','B','B','III–IV','Clarifying/buildup removal','Buildup, oily scalp','C'),
          B('Aesculus Hippocastanum (Horse Chestnut) Seed Extract','Circulation/DHT Botanicals','B','B','B','B','A','B','B','A','A','II','Circulation/venotonic support','Hair thinning','B'),
          B('Capsicum Frutescens (Cayenne Pepper) Fruit Extract','Circulation-Stimulating Botanicals','C','C','B','B','A','B','C','B','C','II','Circulation/scalp stimulation','Hair thinning','C'),
          B('Cassia Alata Leaf Extract (DN-Age)','Antioxidant Botanicals','B','C','B','B','B','B','B','A','A','III','Antioxidant/anti-aging','General maintenance','B'),
          B('Moringa Oleifera Seed Extract','Antioxidant Botanicals','B','C','B','B','A','B','B','A','A','III','Antioxidant/conditioning','General maintenance','B'),
          B('Ocimum Sanctum (Holy Basil/Tulsi) Extract','Traditional Ayurvedic Botanicals','B','C','B','B','A','B','B','A','A','III','Adaptogen/scalp support','General maintenance','B'),
          B('Pelvetia Canaliculata Extract','Barrier-Support Botanicals','B','C','A','B','B','A','B','A','A','III','Hydration/mineral support','Dry scalp','B'),
          B('Salvia Officinalis (Sage) Leaf Extract','Antimicrobial Botanicals','B','C','B','B','B','B','B','A','A','II','Antimicrobial/antioxidant','Oily scalp, dandruff','A'),
        );
        return rows;
      })()),
      M('Module 7','Essential Oils · EOHMSI',['MS','HG','AI','AF','AB','SR','AO','BC','IR'],(function(){
        const E=(n,ms,hg,ai,af,ab,sr,ao,bc,ir,pt,leave,rinse,ev,g)=>[n,{MS:ms,HG:hg,AI:ai,AF:af,AB:ab,SR:sr,AO:ao,BC:bc,IR:ir},leave+'% leave-on / '+rinse+'% rinse-off',ev,g,'Essential Oil',{pt}];
        const rows=[
          E('Peppermint','A','B','B','B','B','A','B','B','Low–Mod','None','0.3–1','1–2','II','A'),
          E('Lavender','A','C','A','B','B','C','A','A','Low–Mod','None','0.5–1','1–2','II','A'),
          E('Chamomile EO','A','C','A','C','C','C','A','A','Very Low','None','0.5–1','1–2','II–III','A'),
          E('Frankincense','A','C','A','C','C','C','A','A','Low','None','0.5–1','1–2','III','A'),
          E('Geranium','A','C','A','B','B','B','A','B','Low–Mod','None','0.3–1','1–2','III','A'),
          E('Cedarwood','A','B','B','B','B','B','B','B','Low','None','0.3–1','1–2','II–III','A'),
          E('Tea Tree','B','C','B','A','A','A','B','B','Moderate','None','0.2–1','1–2','I–II','B'),
          E('Lemongrass','B','C','B','A','A','A','A','B','Moderate–High','None','0.1–0.5','0.5–1','II','B'),
          E('Lemon','B','C','B','B','B','B','A','B','Moderate','High*','0.2–0.5','0.5–1','II–III','B'),
          E('Sweet Orange','B','C','B','B','B','C','A','B','Low–Mod','Low*','0.2–1','1–2','III','B'),
          E('Grapefruit','B','C','B','B','B','B','A','B','Moderate','Moderate*','0.2–0.5','0.5–1','III','B'),
          E('Bergamot FCF','B','C','B','B','B','B','A','B','Moderate','Low','0.2–0.5','0.5–1','II–III','B'),
          E('Thyme','C','C','B','A','A','B','B','C','High','None','0.05–0.2','0.2–0.5','II–III','C'),
          E('Oregano Oil','D','C','B','A','A','B','B','D','High','None','0.02–0.1','0.1–0.3','II–III','D'),
          E('Clove','D','C','B','A','A','C','B','D','High','None','0.02–0.1','0.1–0.3','II–III','D'),
          E('Cinnamon Bark','E','C','B','A','A','C','B','E','Very High','None','<0.05','<0.1','III','E'),
          E('Cassia','E','C','B','A','A','C','B','E','Very High','None','<0.05','<0.1','III','E'),
          E('Ylang Ylang','A','C','B','B','B','B','A','A','Low–Mod','None','0.2–0.5','0.5–1','III','A'),
          E('Clary Sage','A','C','A','B','B','B','A','A','Low–Mod','None','0.2–0.5','0.5–1','III','A'),
          E('Eucalyptus Globulus','B','B','B','B','B','A','B','B','Moderate','None','0.2–0.5','0.5–1','II','B'),
          E('Basil (Sweet)','C','C','B','A','A','B','B','C','High','None','0.05–0.2','0.2–0.5','III','C'),
          E('Bay Leaf (Laurus nobilis)','C','C','B','A','A','B','B','C','High','Low','0.05–0.2','0.2–0.5','III','C'),
          E('Wintergreen','D','C','B','B','A','B','B','D','High','None','0.02–0.1','0.1–0.3','II–III','D'),
          E('Ginger Oil','B','C','B','B','B','A','B','B','Moderate','None','0.1–0.3','0.3–0.5','III','B'),
          E('Vetiver','A','C','A','B','B','B','A','A','Low','None','0.2–0.5','0.5–1','III','A'),
          E('Sandalwood','A','C','A','B','B','B','A','A','Low','None','0.2–0.5','0.5–1','III','A'),
          E('Juniper Berry','B','C','B','B','B','B','A','B','Moderate','None','0.1–0.3','0.3–0.5','III','B'),
          E('Sage Oil (Salvia officinalis)','C','C','B','B','B','B','B','C','High','None','0.05–0.2','0.2–0.5','III','C'),
        ];
        rows.push(
          E('Mandarin','B','B','B','B','B','B','B','B','Low','Low','0.2–0.5','0.5–1','II','B'),
          E('Angelica Archangelica (Angelica) Seed Oil','B','B','B','B','B','B','B','B','Low','None','0.2–0.5','0.5–1','III','B'),
          E('Neem Oil (Melia Azadirachta Seed Oil)','B','C','B','B','B','B','B','B','Moderate','None','0.1–0.5','0.5–1','II','B'),
          E('Citrus Aurantium (Bitter Orange) Peel Oil','C','C','B','B','C','C','A','C','Low','High','0.05–0.2','0.2–0.5','I','C'),
          E('Leptospermum Scoparium Branch/Leaf Oil (Manuka Oil)','A','B','A','A','A','B','A','A','Low','None','0.2–1','1–2','II','A'),
          E('Rosemary Oil','A','B','A','B','B','B','A','B','Low','None','0.2–1','1–2','II','A'),
        );
        return rows;
      })()),
      M('Module 8','Preservatives · PMPI',['MS','PE','BS','BA','FA','IR','BC'],(function(){
        const P=(n,ms,pe,bs,ba,fa,ir,bc,leave,pct,ev,g)=>[n,{MS:ms,PE:pe,BS:bs,BA:ba,FA:fa,IR:ir,BC:bc},(pct?pct+'%':''),ev,g,'Preservative',{leave}];
        const rows=[
          P('Sodium Benzoate','A','B','B','B','B','A','A','Yes','0.2–0.5','I–II','A'),
          P('Potassium Sorbate','A','B','B','C','A','A','A','Yes','0.1–0.3','I–II','A'),
          P('Benzoic Acid','B','B','B','B','B','B','B','Limited','0.05–0.2','II','B'),
          P('Sorbic Acid','A','B','B','C','A','A','A','Yes','0.05–0.2','II','A'),
          P('Dehydroacetic Acid','A','B','B','B','B','A','A','Yes','0.2–0.6','II','A'),
          P('Phenoxyethanol','B','A','A','A','B','B','B','Yes','0.5–1','I','B'),
          P('Ethylhexylglycerin','A','C','C','B','C','A','A','Yes','0.3–1','II','A'),
          P('Hydroxyacetophenone','A','C','C','B','C','A','A','Yes','0.2–1','II','A'),
          P('Glyceryl Caprylate','A','C','C','B','B','A','A','Yes','0.2–1','II','A'),
          P('Caprylhydroxamic Acid','A','B','B','B','B','A','A','Yes','0.05–0.2','II','A'),
          P('Gluconolactone','A','C','C','C','B','A','A','Yes','0.5–3','II','A'),
          P('Sodium Levulinate','A','C','C','B','B','A','A','Yes','0.5–2','II','A'),
          P('Sodium Anisate','A','C','C','B','B','A','A','Yes','0.2–1','II','A'),
          P('Methylparaben','B','A','A','A','B','A','B','Yes','0.1–0.4','I','B'),
          P('Ethylparaben','B','A','A','A','B','A','B','Yes','0.1–0.4','I','B'),
          P('Propylparaben','C','A','A','A','B','B','B','Limited','0.05–0.2','I','C'),
          P('Butylparaben','C','A','A','A','B','B','B','Limited','0.05–0.2','I','C'),
          P('Chlorphenesin','C','B','B','B','B','B','C','Yes/Limited','0.1–0.3','II','C'),
          P('Benzyl Alcohol','C','B','B','B','B','C','C','Limited','0.5–1','II','C'),
          P('o-Cymen-5-ol','B','B','B','A','B','B','B','Limited','0.05–0.2','II','B'),
          P('Leuconostoc Ferment Filtrate','A','C','C','C','C','A','A','Yes','1–4','II–III','A'),
          P('Lactobacillus Ferment','A','C','C','C','C','A','A','Yes','1–5','II–III','A'),
          P('Radish Root Ferment','A','C','C','C','C','A','A','Yes','2–4','III','A'),
          P('Methylisothiazolinone (MI)','E','A','A','—','—','E','E','No','≤0.0015 (rinse-off)','I','E'),
          P('Methylchloroisothiazolinone (MCI)','E','A','A','—','—','E','E','No','≤0.0015 (rinse-off)','I','E'),
          P('MI/MCI','E','A','A','—','—','E','E','No','≤0.0015 (rinse-off)','I','E'),
          P('Benzisothiazolinone','E','A','A','—','—','E','E','No','','I','E'),
          P('DMDM Hydantoin','E','A','A','A','A','E','E','Limited','0.1–0.6','I','E'),
          P('Quaternium-15','E','A','A','—','—','E','E','No','','I','E'),
          P('Imidazolidinyl Urea','D','A','A','—','—','D','D','Limited','','I','D'),
          P('Diazolidinyl Urea','D','A','A','—','—','D','D','Limited','','I','D'),
          P('Bronopol','D','A','A','—','—','D','D','Limited','','I','D'),
        ];
        rows.push(
          P('Hydroxypropyl Cyclodextrin (and Cyclodextrin)','A','A','A','A','A','A','A','Yes','0.5–3','II','A'),
          P('Pentaerythrityl Tetra-Di-T-Butyl Hydroxyhydrocinnamate','A','A','A','A','A','A','A','Yes','0.01–0.1','II','A'),
          P('Iodopropynyl Butylcarbamate (IPBC)','B','A','A','B','B','C','B','Limited','0.01–0.1','I','C'),
          P('Sodium Dehydroacetate','A','A','A','B','A','A','A','Yes','0.1–0.5','II','A'),
          P('Phenylpropanol','B','B','B','B','C','B','B','Yes','0.1–0.3','III','B'),
          P('BHA','C','A','A','C','D','C','D','No','0.005–0.02','I','D'),
          P('BHT','B','A','A','B','C','B','B','No','0.01–0.1','I','C'),
          P('Benzophenone-4','C','A','A','C','C','C','B','Limited','0.1–0.5','II','D'),
        );
        return rows;
      })()),
      M('Module 9','Fragrance Allergens · FAMSI',['MS','BC','SR','IP'],(function(){
        const F=(n,cls,ms,bc,sr,ip,pt,leave,ev,g)=>[n,{MS:ms,BC:bc,SR:sr,IP:ip},'—',ev,g,cls,{pt,leave}];
        const rows=[
          F('Fragrance (Parfum)','Fragrance blend (undisclosed)','C','C','C','C','Variable','Limited','II','C'),
          F('Linalool','Terpene alcohol','B','B','C','B','None','Yes/Limited','II','B'),
          F('Limonene','Terpene','B','B','C','B','Low–Mod*','Yes/Limited','II','B'),
          F('Geraniol','Terpene alcohol','C','C','C','C','None','Limited','II','C'),
          F('Citronellol','Terpene alcohol','B','B','C','B','None','Yes/Limited','II','B'),
          F('Farnesol','Terpene alcohol','B','B','C','B','None','Yes','III','B'),
          F('Nerol','Terpene alcohol','B','B','C','B','None','Yes/Limited','III','B'),
          F('Terpinolene','Terpene','C','C','C','C','None','Limited','III','C'),
          F('Menthol','Terpene alcohol','B','B','C','B','None','Yes/Limited','II','B'),
          F('Carvone','Terpene','B','B','C','B','None','Limited','III','B'),
          F('Linalyl acetate','Terpene ester','B','B','B','B','None','Yes/Limited','III','B'),
          F('Terpinen-4-ol','Terpene alcohol','B','B','C','B','None','Yes/Limited','II','B'),
          F('Citral','Aldehyde','C','C','D','C','Low','Limited','II','C'),
          F('Citronellal','Aldehyde','C','C','C','C','None','Limited','III','C'),
          F('Hexyl Cinnamal','Aldehyde','B','B','C','B','None','Limited','II','B'),
          F('Hydroxycitronellal','Aldehyde','C','C','C','C','None','Limited','II','C'),
          F('Cinnamal','Aldehyde','E','E','E','E','None','No/Restricted','I–II','E'),
          F('Cinnamyl alcohol','Aldehyde','D','D','D','D','None','Limited','II','D'),
          F('Amyl cinnamal','Aldehyde','B','B','C','B','None','Limited','II','B'),
          F('Eugenol','Phenolic','D','D','D','D','None','Limited','I–II','D'),
          F('Isoeugenol','Phenolic','E','E','E','E','None','No/Restricted','I','E'),
          F('Methyleugenol','Phenolic','E','E','E','E','None','Avoid','I','E'),
          F('Benzyl benzoate','Ester/aromatic alcohol','C','C','C','C','None','Limited','II','C'),
          F('Benzyl salicylate','Ester/aromatic alcohol','C','C','C','C','Low','Limited','II','C'),
          F('Benzyl acetate','Ester/aromatic alcohol','B','B','B','B','None','Yes/Limited','III','B'),
          F('Benzyl alcohol','Ester/aromatic alcohol','C','C','C','C','None','Limited','I–II','C'),
          F('Anisyl alcohol','Ester/aromatic alcohol','B','B','B','B','None','Yes/Limited','III','B'),
          F('Butylphenyl Methylpropional (Lilial)','Aldehyde','E','D','E','D','None','No/Banned','I','E'),
          F('Pinene','Terpene hydrocarbon','B','B','C','B','None','Yes/Limited','II','C'),
          F('Heliotropine (Piperonal)','Aldehyde','D','C','D','C','None','No/Restricted (EU fine-fragrance only, ≤1.8%)','I','D'),
          F('Menthyl Lactate','Cooling/masking agent','A','A','A','A','None','Yes','I','A'),
          F('Acetyl Cedrene','Synthetic woody ketone','C','C','C','C','None','Limited','II','C'),
          F('Tetramethyl Acetyloctahydronaphthalenes (OTNE)','Synthetic woody ketone','C','C','C','C','None','Limited','I–II','C'),
          F('Coumarin','Coumarin/natural','C','C','D','C','Low','Limited','II','C'),
          F('Evernia prunastri (Oakmoss)','Coumarin/natural','E','E','E','E','None','Avoid','I–II','E'),
          F('Evernia furfuracea (Treemoss)','Coumarin/natural','E','E','E','E','None','Avoid','I–II','E'),
        ];
        rows.push(
          F('Alpha-Isomethyl Ionone','Ketone','C','C','C','C','None','Limited','I','C'),
        );
        return rows;
      })()),
      M('Module 10','Silicones · SSMCI',['MS','BC','HC','SC','OC','BU','IR','SE'],(function(){
        const S=(n,ms,bc,hc,sc,oc,bu,ir,se,leave,ev,g,note)=>[n,{MS:ms,BC:bc,HC:hc,SC:sc,OC:oc,BU:bu,IR:ir,SE:se},leave,ev,g,'Silicone',{note}];
        const rows=[
          S('Dimethicone','A','A','A','A','B','B','A','B','Yes','I–II','A'),
          S('Dimethiconol','A','A','A','A','B','B','A','B','Yes','II','A'),
          S('Amodimethicone','A','A','A','A','B','B','A','B','Yes','II','A'),
          S('Aminopropyl Dimethicone','A','A','A','A','B','B','A','B','Yes','II–III','A'),
          S('Cyclomethicone','A','A','A','A','A','A','A','A','Yes','II','A','D4/D5/D6 blend — verify EU REACH content before use'),
          S('Cyclopentasiloxane (D5)','A','A','A','A','A','A','A','A','Limited/Yes*','II','A','EU: ≥0.1% restricted in rinse-off (active); leave-on from 6 Jun 2027'),
          S('Cyclohexasiloxane (D6)','A','A','A','A','A','A','A','A','Limited*','II','A','EU: ≥0.1% restricted in rinse-off (active); leave-on from 6 Jun 2027'),
          S('Phenyl Trimethicone','A','A','A','A','B','B','A','B','Yes','II','A'),
          S('Trimethylsiloxysilicate','A','B','A','B','C','C','A','B','Limited','II','B'),
          S('PEG/PPG Dimethicone','A','A','A','A','B','B','A','A','Yes','II','A'),
          S('PEG-12 Dimethicone','A','A','A','A','B','A','A','A','Yes','II','A'),
          S('Silicone Quaternium-16','B','A','A','B','B','B','B','B','Limited/Yes','III','B'),
          S('Silicone Quaternium-16/Undeceth-11/Undeceth-3 complex','B','A','A','B','B','B','B','B','Limited','III','B'),
          S('Polysilicone-15','B','A','A','B','B','B','A','B','Yes','II','B','EU/UK-approved UV filter; documented allergic contact cheilitis case reports (Parsol SLX)'),
        ];
        rows.push(
          S('Gluconamido Amodimethicone','A','A','A','A','B','B','A','B','Yes','II–III','A'),
          S('Isododecane','A','A','A','A','A','A','A','A','Yes','II','A'),
          S('Dimethicone PEG-7 Isostearate','A','A','A','A','B','B','A','A','Yes','II','A'),
          S('PEG-7 Amodimethicone','A','A','A','A','B','B','A','B','Yes','II','A'),
        );
        return rows;
      })()),
      M('Module 11','Alcohols · ASBMI',['MS','BC','HC','SC','HM','IR','SE'],(function(){
        const AL=(n,cls,ms,bc,hc,sc,hm,ir,se,leave,pct,ev,g)=>[n,{MS:ms,BC:bc,HC:hc,SC:sc,HM:hm,IR:ir,SE:se},pct,ev,g,cls,{leave}];
        const rows=[
          AL('Cetyl Alcohol','Fatty/wax alcohol','A','A','A','A','B','A','A','Yes','1–10%','I–II','A'),
          AL('Stearyl Alcohol','Fatty/wax alcohol','A','A','A','A','B','A','A','Yes','1–10%','I–II','A'),
          AL('Cetearyl Alcohol','Fatty/wax alcohol','A','A','A','A','B','A','A','Yes','1–15%','I–II','A'),
          AL('Behenyl Alcohol','Fatty/wax alcohol','A','A','A','A','B','A','A','Yes','1–10%','II','A'),
          AL('Myristyl Alcohol','Fatty/wax alcohol','A','A','A','A','B','A','A','Yes','0.5–5%','II','A'),
          AL('Lauryl Alcohol','Fatty/wax alcohol','B','B','B','B','B','B','B','Limited','0.1–3%','II–III','B'),
          AL('Isostearyl Alcohol','Fatty/wax alcohol','A','A','A','A','B','A','A','Yes','1–10%','II','A'),
          AL('Oleyl Alcohol','Fatty/wax alcohol (graded here — no Module 2 entry)','B','B','A','B','B','B','B','Yes/Limited','0.5–5%','II–III','B'),
          AL('PPG-33 Butyl Ether','Polyoxyalkylene ether','B','B','B','B','C','B','A','Limited','1–5%','I','C'),
          AL('Ethanol','Volatile/simple alcohol','C','C','C','C','D','C–D','A','Limited','1–20+%','I','C'),
          AL('Alcohol Denat.','Volatile/simple alcohol','C','C','C','C','D','C–D','A','Limited','1–20+%','I','C'),
          AL('Isopropyl Alcohol','Volatile/simple alcohol','D','D','D','D','E','D–E','A','Limited/No','1–10%','I','D'),
          AL('SD Alcohol 40-B','Volatile/simple alcohol','C','C','C','C','D','C–D','A','Limited','1–20%','I','C'),
          AL('Phenethyl Alcohol','Volatile/simple alcohol','B','B','B','B','C','B','B','Yes/Limited','0.1–1%','II','B'),
          AL('Propyl Alcohol','Volatile/simple alcohol','D','D','D','D','E','D–E','A','No/Limited','—','III','D'),
        ];
        return rows;
      })()),
      M('Module 12','Antimicrobials · AMSCI',['MS','AE','AF','AB','SC','BC','SR','IR'],(function(){
        const AM=(n,cls,ms,ae,af,ab,sc,bc,sr,ir,leave,pct,ev,g)=>[n,{MS:ms,AE:ae,AF:af,AB:ab,SC:sc,BC:bc,SR:sr,IR:ir},pct,ev,g,cls,{leave}];
        const rows=[
          AM('Ketoconazole','Antifungal agent','C','A','A','B','B','B','B','B','Limited','1–2%','I','C'),
          AM('Piroctone Olamine','Antifungal agent','B','A','A','B','A','A','B','B','Yes/Limited','0.3–1%','II','B'),
          AM('Zinc Pyrithione','Antifungal agent','C','A','A','A','B','B','B','B','Limited/RO','~1%*','I','C'),
          AM('Selenium Sulfide','Antifungal agent','D','A','A','B','C','C','B','C','No/RO','1–2.5%','I','D'),
          AM('Climbazole','Antifungal agent','B','A','A','B','A','A','B','B','Yes/Limited','0.2–0.5%','II','B'),
          AM('Ciclopirox Olamine','Antifungal agent','C','A','A','B','B','B','B','B','Limited','1%','I','C'),
          AM('Chlorhexidine','Antiseptic/broad-spectrum','D','A','B','A','C','C','B','C','Limited/No','—','I','D'),
          AM('Benzalkonium Chloride','Antiseptic/broad-spectrum','E','A','B','A','D','D','C','D','No/Restricted','—','I','E'),
          AM('Polyhexamethylene Biguanide (PHMB)','Antiseptic/broad-spectrum','D','A','B','A','C','C','B','C','Restricted/limited','—','II','D'),
          AM('Chloroxylenol (PCMX)','Antiseptic/broad-spectrum','C','B','B','A','C','C','B','B','Limited','—','II','C'),
          AM('Triclosan','Antiseptic/broad-spectrum','E','A','B','A','D','D','B','C','Avoid','—','I','E'),
          AM('Succinic Acid','Microbiome-oriented active','A','B','B','B','A','A','A','A','Yes','—','II–III','A'),
          AM('Capryloyl Glycine','Microbiome-oriented active','A','B','B','B','A','A','A','A','Yes','—','II','A'),
          AM('Undecylenoyl Glycine','Microbiome-oriented active','A','B','B','B','A','A','A','A','Yes','—','II','A'),
          AM('Sodium Shale Oil Sulfonate (Ichthyol Pale)','Naturally-derived antimicrobial','B','B','A','B','B','B','B','B','Yes','1%','I–II','B'),
          AM('Zinc Sulfate','Mineral salt (antimicrobial/astringent)','B','A','A','B','B','B','B','B','Limited','≤1%','I','B'),
          AM('Undecylenic Acid','Microbiome-oriented active','B','B','A','B','B','B','B','B','Limited','—','II','B'),
          AM('Luliconazole','Antifungal agent (imidazole)','D','A','A','B','C','C','B','C','No/Restricted','1% (Rx topical)','I','D'),
          AM('Coal Tar','Antipsoriatic/antiseborrheic (OTC drug monograph)','C','A','D','C','D','D','D','D','No/Restricted','1–5% (USP topical solution ~20% conc.)','I','D'),
        ];
        rows.push(
          AM('Bacillus Coagulans (Lactospore)','Probiotic/postbiotic active','A','B','A','A','A','A','A','A','Yes','0.1–1%','I','A'),
        );
        return rows;
      })()),
      M('Module 13','Keratolytics / Exfoliating Acids · KSMCI',['MS','KE','BC','PH','SR','IR'],(function(){
        const K=(n,cls,ms,ke,bc,ph,sr,ir,pt,opt,caution,disr,ev,g)=>[n,{MS:ms,KE:ke,BC:bc,PH:ph,SR:sr,IR:ir},opt,ev,g,cls,{pt,caution,disr}];
        const rows=[
          K('Salicylic Acid (Keratolytic)','BHA & related','A','A','B','C','A','B','Low','0.5–2%','2–3%','>3%','I','A'),
          K('Betaine Salicylate','BHA & related','A','B','A','B','B','A','Low','1–4%','4–6%','>6%','III','A'),
          K('Capryloyl Salicylic Acid','BHA & related','A','B','A','B','B','A','Low','0.1–1%','1–2%','>2%','II','A'),
          K('Glycolic Acid','AHA','B','A','C','D','B','C','Moderate','1–5%','5–10%','>10%','I','B'),
          K('Lactic Acid (Keratolytic)','AHA','A','B','B','C','B','B','Low–Mod','1–5%','5–10%','>10%','I','A'),
          K('Mandelic Acid','AHA','A','B','B','C','B','A','Low','1–5%','5–10%','>10%','II','A'),
          K('Malic Acid','AHA','B','B','B','C','B','B','Low','1–4%','4–8%','>8%','III','B'),
          K('Tartaric Acid','AHA','B','B','B','C','B','B','Low','1–4%','4–8%','>8%','III','B'),
          K('Natural AHA Fruit Extract Blend','AHA','A','C','A','C','B','A','Low','1–5%','5–8%','>8%','II–III','B'),
          K('Lactobionic Acid','PHA & gentle alternatives','A','B','A','A','B','A','None','1–5%','5–10%','>10%','II','A'),
          K('Galactose/PHA blends','PHA & gentle alternatives','A','C','A','A','B','A','None','1–5%','5–10%','>10%','III','A'),
          K('Urea (keratolytic conc.)','Enzymatic & urea-based','A','B','A','A','B','A','None','5–10%','10–20%','>20%','I','A'),
          K('Maleic Acid','AHA/dicarboxylic acid','C','B','B','C','C','C','None','0.1–0.5%','0.5–1%','>1%','I','C'),
          K('Sulfur (Precipitated/Sublimed)','Elemental keratolytic','A','C','C','C','B','C','None','2–5%','5–10%','>10%','I','C'),
          K('Papain','Enzymatic & urea-based','B','B','B','B','B','B','None','0.1–1%','1–2%','>2%','III','B'),
          K('Bromelain','Enzymatic & urea-based','B','B','B','B','B','B','None','0.1–1%','1–2%','>2%','III','B'),
        ];
        return rows;
      })()),
      M('Module 14','Vitamins & Multifunctional Actives · ASMCI-V',['MS','AE','BC','AI','AO','OS','IR'],(function(){
        const V=(n,cls,ms,ae,bc,ai,ao,os,ir,opt,caution,disr,ev,g)=>[n,{MS:ms,AE:ae,BC:bc,AI:ai,AO:ao,OS:os,IR:ir},opt,ev,g,cls,{caution,disr}];
        const rows=[
          V('Niacinamide','B-Vitamins & derivatives','A','B','A','A','B','A','A','1–5%','5–10%','>10%','I','A'),
          V('Niacin (Nicotinic Acid)','B-Vitamins & derivatives','B','C','B','C','B','A','C','0.1–1%','1–2%','>2%','II','C'),
          V('Ascorbyl Palmitate','Vitamin C & derivatives','A','B','A','B','A','B','A','0.1–1%','1–2%','>2%','I','A'),
          V('Tocopheryl Linoleate/Oleate','Vitamin E & derivatives','A','B','A','B','B','A','A','0.1–1%','1–2%','>2%','II','A'),
          V('Calcium Pantothenate','B-Vitamins & derivatives','A','B','A','A','B','A','A','0.1–1%','1–2%','>2%','II','B'),
          V('Farnesyl Acetate','Other multifunctional actives','B','C','B','B','B','C','B','0.01–0.1%','0.1–0.5%','>0.5%','III','C'),
          V('Inositol','Other multifunctional actives','A','B','A','A','B','A','A','0.1–1%','1–2%','>2%','II','A'),
          V('Panthenyl Triacetate','B-Vitamins & derivatives','A','B','A','A','B','B','A','0.1–1%','1–2%','>2%','II','B'),
          V('Pyridoxine HCl','B-Vitamins & derivatives','A','B','A','A','B','A','A','0.05–0.5%','0.5–1%','>1%','II','A'),
          V('Biotin (Vitamin)','B-Vitamins & derivatives','B','C','B','B','B','B','A','0.1–1%','1–2%','>2%','III','B'),
          V('Riboflavin','B-Vitamins & derivatives','B','C','B','B','B','C','A','0.01–0.1%','0.1–0.5%','>0.5%','IV','B'),
          V('Ascorbic Acid','Vitamin C & derivatives','B','B','B','B','A','D','B','5–15%','15–20%','>20%','I','B'),
          V('Sodium Ascorbyl Phosphate','Vitamin C & derivatives','A','B','A','B','A','B','A','0.1–3%','3–5%','>5%','II','A'),
          V('Ascorbyl Glucoside','Vitamin C & derivatives','A','B','A','B','A','B','A','0.1–3%','3–5%','>5%','II','A'),
          V('Tetrahexyldecyl Ascorbate','Vitamin C & derivatives','A','B','A','B','A','B','A','0.1–3%','3–5%','>5%','II','A'),
          V('Tocopherol','Vitamin E & derivatives','A','B','A','B','A','C','A','0.05–1%','1–2%','>2%','I','A'),
          V('Tocopheryl Acetate (Vitamin)','Vitamin E & derivatives','A','B','A','B','B','A','A','0.1–1%','1–2%','>2%','II','A'),
          V('Sodium Ascorbate','Vitamin C & derivatives','A','B','A','B','A','B','A','0.1–3%','3–5%','>5%','I','A'),
          V('Ascorbyl Tetraisopalmitate','Vitamin C & derivatives','A','A','A','B','A','B','A','0.5–3%','3–5%','>5%','I','A'),
          V('Tryptophan','Amino acid / NMF','A','B','A','A','A','A','A','0.05–0.5%','0.5–1%','>1%','I','A'),
          V('Lysine Hydrochloride (Lysine HCl)','Amino acid / NMF','A','B','A','A','A','A','A','0.05–1%','1–2%','>2%','I','A'),
          V('Ornithine HCl','Amino acid / NMF','A','C','A','A','C','B','A','0.05–0.5%','0.5–1%','>1%','III','B'),
          V('Citrulline','Amino acid / NMF','A','C','A','A','C','B','A','0.05–0.5%','0.5–1%','>1%','III','B'),
          V('Sarcosine (free amino acid)','Amino acid (nitrosation precursor)','C','C','B','B','B','C','C','0.05–0.5%','0.5–1%','>1%','II','C'),
          V('Glutathione','Other multifunctional actives','A','B','A','B','B','B','B','0.1–2%','2–4%','>4%','II','B'),
          V('Glucosamine HCl','Other multifunctional actives','A','C','A','A','B','B','A','0.1–1%','1–2%','>2%','I','B'),
          V('Zinc Carbonate','Mineral salt','B','B','A','B','B','B','A','0.2–2%','2–4%','>4%','I','B'),
          V('Zinc Gluconate','Mineral salt','A','B','A','B','B','A','A','0.1–2%','2–4%','>4%','I','A'),
          V('Retinyl Acetate','Vitamin A & derivatives (retinoids)','B','B','B','C','B','C','C','0.05–0.3% RE','0.3–0.5% RE','>0.5% RE','I','C'),
          V('Bifida Ferment Lysate','Postbiotic / ferment','A','B','A','A','A','A','A','1–10%','10–15%','>15%','I','A'),
          V('Alteromonas Ferment Extract','Postbiotic / ferment','A','B','A','B','A','A','A','0.1–5%','5–8%','>8%','II','A'),
          V('Octyl Methoxycinnamate (Ethylhexyl Methoxycinnamate / Octinoxate)','UV filter','D','B','D','C','D','C','C','1–5%','5–7.5%','>7.5%','I','D'),
          V('Tocotrienols','Vitamin E & derivatives','A','B','A','B','A','C','A','0.05–0.5%','0.5–1%','>1%','III','A'),
          V('Retinol','Vitamin A & derivatives (retinoids)','C','B','C','C','B','E','C','0.05–0.3%','0.3–1%','>1%','I','C'),
          V('Retinyl Palmitate','Vitamin A & derivatives (retinoids)','B','C','B','B','B','C','B','0.1–1%','1–2%','>2%','II','B'),
          V('Bakuchiol','Vitamin A & derivatives (retinoids)','A','B','A','B','B','B','A','0.5–2%','2–4%','>4%','II','A'),
          V('Allantoin','Other multifunctional actives','A','B','A','A','B','A','A','0.1–2%','2–5%','>5%','II','A'),
          V('Bisabolol','Other multifunctional actives','A','B','A','A','B','B','A','0.1–1%','1–2%','>2%','II','A'),
          V('Madecassoside','Other multifunctional actives','A','B','A','A','B','B','A','0.1–1%','1–2%','>2%','II','A'),
          V('Ectoin (Vitamin module)','Other multifunctional actives','A','B','A','A','B','A','A','0.5–2%','2–4%','>4%','II','A'),
          V('Zinc PCA','Other multifunctional actives','A','B','A','B','B','A','A','0.1–1%','1–2%','>2%','II','A'),
        ];
        return rows;
      })()),
      M('Module 15','Chelators & Stabilizers · CPMSI',['MS','PB','CH','BC','EC','IR'],(function(){
        const C=(n,cls,ms,pb,ch,bc,ec,ir,opt,caution,disr,ev,g,note)=>[n,{MS:ms,PB:pb,CH:ch,BC:bc,EC:ec,IR:ir},opt,ev,g,cls,{note}];
        const rows=[
          C('Disodium EDTA','Aminopolycarboxylate chelators','A','A','A','A','E','A','0.05–0.2%','0.2–0.5%','>0.5%','I','B','Gold-standard chelator + preservative booster, but poor biodegradability — EC=E caps it at B. COSMOS-prohibited'),
          C('Tetrasodium EDTA','Aminopolycarboxylate chelators','A','A','A','A','E','A','0.05–0.2%','0.2–0.5%','>0.5%','I','B','As above; COSMOS-prohibited'),
          C('Trisodium HEDTA','Aminopolycarboxylate chelators','A','A','A','A','E','A','0.05–0.2%','0.2–0.5%','>0.5%','II','B','As above'),
          C('Tetrasodium Glutamate Diacetate','Biodegradable / natural-origin (COSMOS-compatible)','A','A','A','A','A','A','0.1–0.5%','0.5–1%','>1%','II','A','GLDA; strong chelation + readily biodegradable; leading EDTA alternative'),
          C('Trisodium Ethylenediamine Disuccinate','Biodegradable / natural-origin (COSMOS-compatible)','A','A','A','A','A','A','0.1–0.5%','0.5–1%','>1%','II','A','EDDS; biodegradable EDTA alternative'),
          C('Sodium Phytate','Biodegradable / natural-origin (COSMOS-compatible)','A','B','B','A','A','A','0.05–0.5%','0.5–1%','>1%','II','A','Phytic-acid salt; natural; antioxidant + mild chelator; gentle'),
          C('Phytic Acid','Biodegradable / natural-origin (COSMOS-compatible)','A','B','B','B','A','B','0.05–0.5%','0.5–1%','>1%','II','A','Natural chelator + AHA-adjacent (mild); pH-lowering'),
          C('Sodium Gluconate','Biodegradable / natural-origin (COSMOS-compatible)','A','B','B','A','A','A','0.1–1%','1–2%','>2%','II','A','Mild chelator; very gentle; food-grade'),
          C('Sodium Citrate','Biodegradable / natural-origin (COSMOS-compatible)','A','B','C','A','A','A','0.1–1%','1–2%','>2%','II','A','Mild chelator + buffer'),
          C('Citric Acid','Biodegradable / natural-origin (COSMOS-compatible)','A','B','C','B','A','B','0.05–1%','1–2%','>2%','II','B','Weak chelator; primary role pH-adjustment/chelation'),
          C('Sodium Metabisulfite','Antioxidant stabilizers (formula-protecting)','B','C','C','B','B','B','0.05–0.2%','0.2–0.5%','>0.5%','II','B','Antioxidant/reducing agent; sulfite sensitization concern in some users'),
          C('Sodium Sulfite','Antioxidant stabilizers (formula-protecting)','B','C','C','B','B','B','0.05–0.2%','0.2–0.5%','>0.5%','II','B','As above'),
        ];
        rows.push(
          C('Triethyl Citrate','Antioxidant Stabilizers','A','C','B','B','A','A','0.1–1%','1–2%','>2%','I','A','Citrate ester; CIR-reviewed (2012); antioxidant/solvent, chelation secondary'),
          C('Calcium Gluconate','Biodegradable / Natural-Origin Chelators','A','B','B','A','A','A','0.1–1%','1–2%','>2%','II','A','Calcium salt of gluconic acid; same gentle profile as Sodium Gluconate'),
          C('Etidronic Acid','Aminopolycarboxylate chelators','A','A','A','A','A','A','0.1–1%','1–2%','>2%','I','A','Dedicated 2016 CIR safety assessment (with Di/Tetra-etidronate salts); safe as used'),
          C('Pentasodium Triphosphate','Biodegradable / Natural-Origin Chelators','A','B','B','A','A','A','0.1–1%','1–2%','>2%','II','A','Inorganic phosphate salt; pH buffer + metal-ion chelator, low EWG hazard'),
        );
        return rows;
      })()),
      M('Module 16','pH Adjusters & Buffers · PABMI',['MS','BF','BC','CR','EC','IR'],(function(){
        const P=(n,cls,ms,bf,bc,cr,ec,ir,opt,caution,disr,ev,g,note)=>[n,{MS:ms,BF:bf,BC:bc,CR:cr,EC:ec,IR:ir},opt,ev,g,cls,{note}];
        const rows=[
          P('Lactic Acid (pH-adjuster conc.)','Acidifying agent','A','B','A','A','A','A','0.1–1%','1–2%','>2%','I','A','Concentration-dependent, distinct from Module 13 entry'),
          P('Glycolic Acid (pH-adjuster conc.)','Acidifying agent','B','B','B','B','A','B','0.05–0.5%','0.5–1%','>1%','II','B','Cross-ref Module 13 for keratolytic-concentration behavior'),
          P('Phosphoric Acid','Acidifying agent','B','C','B','B','B','C','0.01–0.2%','0.2–0.5%','>0.5%','II','B','Strong mineral acid; requires careful dosing'),
          P('Hydrochloric Acid (dilute, cosmetic-grade)','Acidifying agent','B','C','B','C','B','C','0.01–0.1%','0.1–0.3%','>0.3%','III','C','Narrow safety margin if miscalculated'),
          P('Fumaric Acid','Acidifying agent','A','B','A','A','A','B','0.05–0.5%','0.5–1%','>1%','I','A','Dicarboxylic acid; wide safety margin'),
          P('Acetic Acid','Acidifying agent','B','C','B','B','A','B','0.05–0.5%','0.5–1%','>1%','II','B','Mild organic acid'),
          P('Ascorbic Acid (as pH-adjuster)','Acidifying agent','B','C','B','B','A','B','0.05–0.3%','0.3–0.5%','>0.5%','II','B','Cross-ref Module 14 for antioxidant function'),
          P('Sodium Hydroxide (dilute solution)','Alkalizing agent','B','D','B','D','B','C','0.01–0.3%','0.3–0.6%','>0.6%','I','C','Manufacturing/handling risk; always used dilute'),
          P('Potassium Hydroxide','Alkalizing agent','B','D','B','D','B','C','0.01–0.3%','0.3–0.6%','>0.6%','I','C','Same cautions as Sodium Hydroxide'),
          P('Triethanolamine (TEA)','Alkalizing agent','C','C','C','C','C','C','0.1–1%','1–2%','>2%','II','C','Nitrosamine-formation concern; COSMOS-restricted in many programs'),
          P('Aminomethyl Propanol (AMP)','Alkalizing agent','B','C','B','B','B','B','0.1–1%','1–2%','>2%','II','B','Gentler alternative to TEA'),
          P('Ammonium Hydroxide (dilute)','Alkalizing agent','C','D','C','D','B','D','0.05–0.5%','0.5–1%','>1%','II','D','Higher irritation/odor profile'),
          P('Sodium Bicarbonate','Alkalizing agent','A','B','B','A','A','A','0.1–2%','2–5%','>5%','II','A','Mild, wide safety margin'),
          P('Arginine','Alkalizing agent','A','B','A','A','A','A','0.1–1%','1–2%','>2%','II','A','Amino-acid alkalizer; gentle'),
          P('Citrate Buffer System (Citric Acid + Sodium Citrate)','True buffer system','A','A','A','A','A','A','0.2–1% (combined)','1–2%','>2%','II','A','Paired buffer-system use case'),
          P('Phosphate Buffer System (Sodium Phosphate/Disodium Phosphate)','True buffer system','B','A','B','B','B','B','0.1–0.5% (combined)','0.5–1%','>1%','II','B','Strong buffering'),
          P('Lactate Buffer System (Lactic Acid + Sodium Lactate)','True buffer system','A','A','A','A','A','A','0.2–1% (combined)','1–2%','>2%','II','A','Sodium Lactate canonical in Module 3'),
          P('Acetate Buffer System (Acetic Acid + Sodium Acetate)','True buffer system','B','B','B','B','A','B','0.1–0.5% (combined)','0.5–1%','>1%','III','B','Moderate buffering'),
        ];
        rows.push(
          P('Sodium Acetate','Alkalizing Agents','A','B','A','A','A','A','0.1–1%','1–2%','>2%','II','A','Neutralized sodium salt of Acetic Acid; milder than the free acid'),
        );
        return rows;
      })()),
      M('Module 17','Thickeners & Rheology Modifiers · RSMCI',['MS','PV','BU','BC','SC','IR'],(function(){
        const T=(n,cls,ms,pv,bu,bc,sc,ir,opt,caution,disr,ev,g,note)=>[n,{MS:ms,PV:pv,BU:bu,BC:bc,SC:sc,IR:ir},opt,ev,g,cls,{note}];
        const rows=[
          T('Xanthan Gum','Natural gum','A','C','B','A','B','A','0.2–1%','1–2%','>2%','I','A','Workhorse natural thickener'),
          T('Sclerotium Gum','Natural gum','A','C','B','A','B','A','0.1–0.5%','0.5–1%','>1%','II','A','Elegant natural gum'),
          T('Guar Gum','Natural gum','A','C','B','A','C','A','0.1–1%','1–2%','>2%','II','B','Non-cationic guar; electrolyte-sensitive'),
          T('Hydroxypropyl Guar','Natural gum','A','C','B','A','B','A','0.1–1%','1–2%','>2%','II','B','Modified guar; better tolerance'),
          T('Cellulose Gum (CMC)','Natural gum','A','C','B','A','B','A','0.1–1%','1–2%','>2%','II','B','Carboxymethylcellulose'),
          T('Hydroxyethylcellulose','Natural gum','A','C','B','A','B','A','0.2–1.5%','1.5–3%','>3%','I','A','Common, well-tolerated'),
          T('Hydroxypropyl Methylcellulose','Natural gum','A','C','B','A','B','A','0.2–1.5%','1.5–3%','>3%','II','A','HPMC; film-forming tendency'),
          T('Sodium Alginate','Natural gum','A','C','B','A','C','A','0.1–1%','1–2%','>2%','II','B','Seaweed-derived'),
          T('Hydrolyzed Corn Starch','Natural gum','A','D','B','A','B','A','0.5–3%','3–5%','>5%','III','B','Starch — higher preservation burden'),
          T('Microcrystalline Cellulose','Cellulose-family','A','B','B','A','B','A','0.5–2%','2–4%','>4%','II','A','Suspension/stabilizer'),
          T('Cellulose','Cellulose-family','A','B','B','A','B','A','0.5–2%','2–4%','>4%','II','A','Physical thickener/exfoliant beads'),
          T('Carbomer','Synthetic (carbomers/acrylates)','A','A','B','A','C','A','0.1–1%','1–2%','>2%','I','A','Low preservation burden'),
          T('Acrylates/C10-30 Alkyl Acrylate Crosspolymer','Synthetic (carbomers/acrylates)','A','A','B','A','C','A','0.1–1%','1–2%','>2%','II','A','Emulsifying thickener'),
          T('Sodium Polyacrylate','Synthetic (carbomers/acrylates)','A','A','B','A','B','A','0.1–1%','1–2%','>2%','II','A','Synthetic thickener'),
          T('Sodium Acrylates Copolymer','Synthetic (carbomers/acrylates)','A','A','B','A','B','A','0.1–1%','1–2%','>2%','II','A','Synthetic'),
          T('Ammonium Acryloyldimethyltaurate/VP Copolymer','Synthetic (carbomers/acrylates)','A','A','C','A','B','A','0.1–1%','1–2%','>2%','II','B','Film-forming tendency'),
          T('Polyacrylate Crosspolymer-6','Synthetic (carbomers/acrylates)','A','A','B','A','B','A','0.1–1%','1–2%','>2%','II','A','Sensory-modern synthetic gel'),
          T('PEG-150 Distearate','Associative/fatty thickener','A','B','C','A','B','A','0.5–2%','2–4%','>4%','II','B','Associative surfactant-system thickener'),
          T('PEG-150 Pentaerythrityl Tetrastearate','Associative/fatty thickener','A','B','C','A','B','A','0.5–2%','2–4%','>4%','II','B','As above'),
          T('Cocamide MEA','Associative/fatty thickener','B','B','C','B','B','B','0.5–3%','3–5%','>5%','II','B','Foam booster/thickener'),
          T('Glycol Distearate','Associative/fatty thickener','A','B','C','A','B','A','0.5–3%','3–5%','>5%','II','B','Pearlizer/thickener'),
          T('Acrylates Copolymer','Synthetic Thickeners','B','A','C','B','C','B','0.1–1%','1–2%','>2%','II','C','Genuinely distinct from Sodium Acrylates Copolymer; unneutralized, non-biodegradable microplastic'),
          T('Ammonium Polyacryloyldimethyl Taurate','Synthetic Thickeners','A','A','A','A','B','A','0.1–1%','1–2%','>2%','II','A','Taurate-based polymer; no film-forming build-up concern'),
          T('Cocamide DIPA','Associative/fatty thickener','C','B','C','C','B','C','0.5–3%','3–5%','>5%','II','C','Di-substituted amine; carries DEA-family nitrosamine-formation caution unlike Cocamide MEA'),
          T('Sodium Chloride','Electrolyte thickener','B','B','B','B','B','C','0.5–2%','2–4%','>4%','I','C','FDA GRAS; drying/moisture-stripping effect, caution for color-treated/curly hair'),
          T('PEG-8/SMDI Copolymer','Synthetic Thickeners','B','B','C','B','C','C','0.1–1%','1–2%','>2%','III','C','Reactive MDI-monomer copolymer; flagged problematic by independent sourcing'),
          T('Palmitoyl Myristyl Serinate','Synthetic Thickeners','A','A','A','A','B','A','0.1–1%','1–2%','>2%','II','A','Amino-acid-derived fatty ester; chemically unrelated to co-formulated PEG-8/SMDI'),
          T('Charcoal Powder (Activated Charcoal)','Natural gums & absorbents','A','A','B','A','B','A','0.5–3%','3–5%','>5%','I','A','High-surface-area porous adsorbent'),
          T('CI 17200 (Red 33)','Color additive','A','A','A','A','A','A','0.001–0.5%','0.5–1%','>1%','II','A','FDA-approved, EU Annex IV-listed color'),
          T('CI 19140 (Yellow 5)','Color additive','B','A','A','A','A','B','0.001–0.5%','0.5–1%','>1%','II','B','FDA/EU-approved; one in-vitro xenoestrogen screening study, not reflected in a lowered grade'),
          T('Silica','Synthetic Thickeners','A','A','A','A','A','A','0.5–5%','5–8%','>8%','I','A','Chemically inert absorbent/thickener'),
          T('PEG-4','Synthetic Thickeners','A','A','A','A','A','A','0.5–5%','5–8%','>8%','II','A','Low-MW PEG'),
          T('PEG-4 Laurate','Synthetic Thickeners','A','A','A','A','A','A','0.5–3%','3–5%','>5%','II','A','Low-MW PEG ester'),
          T('PEG-4 Dilaurate','Synthetic Thickeners','A','A','A','A','A','A','0.5–3%','3–5%','>5%','II','A','Low-MW PEG diester'),
          T('Zea Mays (Corn) Starch','Natural gums & polysaccharides','A','B','B','A','B','A','0.5–5%','5–10%','>10%','I','A','CIR-reviewed; glove-powder hypersensitivity reports are route-specific'),
          T('Maltodextrin','Natural gums & polysaccharides','A','B','B','A','A','A','0.5–5%','5–10%','>10%','I','A','GRAS food additive; oil-absorbing, dry-shampoo relevant'),
          T('Acacia Senegal Gum','Natural gums & polysaccharides','A','B','A','A','A','A','0.5–5%','5–10%','>10%','I','A','CIR 2005/2023; 2023 re-review reassessed IgE sensitivity — concluded safe as used'),
          T('Diatomaceous Earth','Mineral absorbent','B','B','A','B','B','B','0.1–1%','1–3%','>3%','II','B','Use natural (non-calcined) grade only — flux-calcined forms carry crystalline-silica respiratory hazard'),
          T('Magnesium Sulfate','Mineral salt','A','B','A','A','B','A','1–5%','5–11%','>11%','I','A','Dedicated 2018 CIR; safe to 11% leave-on / 25% rinse-off'),
          T('Magnesium Chloride','Mineral salt','A','B','A','A','B','A','1–5%','5–10%','>10%','I','A','Favorable Wistar rat repeated-dose data; no adverse effects at any tested dose'),
          T('Magnesium Carbonate Hydroxide','Mineral salt','A','A','A','A','A','A','0.5–3%','3–6%','>6%','I','A','CIR Simple Carbonate Salts; buffering may nudge pH upward'),
          T('Acrylates/Vinyl Neodecanoate Crosspolymer (Aculyn 38)','Synthetic Thickeners','A','A','B','A','C','A','0.5–2%','2–4%','>4%','I','A','CIR Cross-Linked Alkyl Acrylates; HRIPT at 2% showed no irritation or sensitization'),
          T('Acrylates Crosspolymer-3','Synthetic Thickeners','A','A','B','A','C','A','0.1–1%','1–2%','>2%','II','B','Class-wide CIR review; no ingredient-specific HRIPT located'),
          T('PEG-90M','Synthetic Thickeners','A','B','B','B','B','A','0.05–0.5%','0.5–1%','>1%','II','B','High-MW PEG thickener'),
          T('CI 15985 (Sunset Yellow FCF, FD&C Yellow 6)','Color additive/pigment','A','A','A','B','B','B','0.1–1%','1–2%','>2%','II','B','FDA/EU E110 approved incl. hair; azo contact-allergy consideration'),
          T('CI 15510 (Acid Orange 7, D&C Orange No. 4)','Color additive/pigment','B','B','B','C','C','C','0.1–0.5%','0.5–1%','>1%','I','C','SCCS: LOW MARGIN OF SAFETY as hair dye (0.5% non-ox / 0.8% ox); irritating to eyes, skin, respiratory'),
          T('Polyethylene','Synthetic polymer','B','B','A','B','B','B','0.5–3%','3–5%','>5%','I','C','EU 2023/2055 microplastic restriction — rinse-off phase-out Oct 2027, leave-on Oct 2029'),
          T('Styrene/Acrylates Copolymer','Synthetic polymer','B','B','A','B','B','B','0.5–3%','3–5%','>5%','I','B','CIR-reviewed; residual benzene manufacturing-solvent consideration'),
          T('Styrene/Butadiene Copolymer','Synthetic polymer','B','B','A','B','B','B','0.5–3%','3–5%','>5%','III','B','Requires ≥97% olefinic hydrogenation for cosmetic grade; no dedicated CIR review'),
          T('Polyimide-1','Synthetic polymer (styling resin)','B','B','B','B','C','B','0.5–3%','3–5%','>5%','II','C','DMAPA is a backbone component, not just trace residue — same sensitizer flagged for Cocamidopropyl Betaine'),
          T('Dextran','Natural gums & polysaccharides','A','C','B','A','B','A','0.1–1%','1–2%','>2%','II','A','Polysaccharide thickener/film-former'),
          T('PEG-120 Methyl Glucose Dioleate (Glucamate DOE-120)','Associative/fatty thickener','A','B','C','A','B','A','0.2–2%','2–4%','>4%','II','A','Associative rheology modifier'),
          T('PEG-120 Methyl Glucose Trioleate','Associative/fatty thickener','A','B','C','A','B','A','0.2–2%','2–4%','>4%','II','A','Associative rheology modifier'),
          T('PEG-45M','Synthetic Thickeners','A','A','B','A','A','A','0.1–1%','1–2%','>2%','II','B','High-MW PEG thickener'),
          T('Tin Oxide','Color additive/pigment','A','A','A','A','A','A','0.1–2%','2–4%','>4%','II','B','Pearlescent pigment'),
          T('Mica','Color additive/pigment','A','A','A','A','A','A','0.1–5%','5–10%','>10%','I','A','FDA/EU Annex IV color additive; supply-chain ethical-sourcing caution'),
          T('Titanium Dioxide','Color additive/pigment','A','A','A','A','A','A','0.1–5%','5–10%','>10%','I','A','Opacifier/UV-filter pigment'),
        ];
        return rows;
      })()),
    ];
  }

  // Product-Type Factor: same module matters differently in rinse-off vs leave-on.
  const PTF={
    'Module 1' :{Shampoo:1.5,Conditioner:0.6,'Leave-in Serum':0.3,'Hair Moisturizer':0.3},
    'Module 2' :{Shampoo:0.8,Conditioner:1.5,'Leave-in Serum':0.9,'Hair Moisturizer':1.1},
    'Module 3' :{Shampoo:0.7,Conditioner:1.0,'Leave-in Serum':1.3,'Hair Moisturizer':1.5},
    'Module 4' :{Shampoo:0.6,Conditioner:1.1,'Leave-in Serum':1.4,'Hair Moisturizer':1.5},
    'Module 5' :{Shampoo:0.4,Conditioner:0.5,'Leave-in Serum':1.5,'Hair Moisturizer':1.2},
    'Module 6' :{Shampoo:0.8,Conditioner:0.9,'Leave-in Serum':1.2,'Hair Moisturizer':1.2},
    'Module 7' :{Shampoo:0.9,Conditioner:1.0,'Leave-in Serum':1.5,'Hair Moisturizer':1.4},
    'Module 8' :{Shampoo:1.0,Conditioner:1.1,'Leave-in Serum':1.5,'Hair Moisturizer':1.4},
    'Module 9' :{Shampoo:0.8,Conditioner:0.9,'Leave-in Serum':1.4,'Hair Moisturizer':1.3},
    'Module 10':{Shampoo:0.7,Conditioner:1.2,'Leave-in Serum':1.1,'Hair Moisturizer':1.1},
    'Module 11':{Shampoo:0.7,Conditioner:0.8,'Leave-in Serum':1.5,'Hair Moisturizer':1.3},
    'Module 12':{Shampoo:1.2,Conditioner:1.0,'Leave-in Serum':1.5,'Hair Moisturizer':1.3},
    'Module 13':{Shampoo:1.0,Conditioner:0.9,'Leave-in Serum':1.4,'Hair Moisturizer':1.2},
    'Module 14':{Shampoo:0.5,Conditioner:0.7,'Leave-in Serum':1.3,'Hair Moisturizer':1.2},
    'Module 15':{Shampoo:1.0,Conditioner:1.0,'Leave-in Serum':1.0,'Hair Moisturizer':1.0},
    'Module 16':{Shampoo:1.0,Conditioner:1.0,'Leave-in Serum':1.0,'Hair Moisturizer':1.0},
    'Module 17':{Shampoo:1.0,Conditioner:1.0,'Leave-in Serum':1.0,'Hair Moisturizer':1.0}
  };
  function ptf(tag,ptype){ const r=PTF[tag]; if(!r) return 1; return r[ptype]!=null?r[ptype]:1; }
  // Indirect/support modules: influence Module 8 rather than standing alone (SOP §C.6.3).
  const INDIRECT={'Module 15':true,'Module 17':true};
  // Pick keys are '<Module tag>::<ingredient name>'. Renaming a row would orphan saved
  // references, so every rename is recorded here and resolved at read time.
  const PICK_MIGRATIONS={
    'Module 2::Cetyl Alcohol':'Module 11::Cetyl Alcohol',
    'Module 2::Stearyl Alcohol':'Module 11::Stearyl Alcohol',
    'Module 2::Cetearyl Alcohol':'Module 11::Cetearyl Alcohol',
    'Module 2::Behenyl Alcohol':'Module 11::Behenyl Alcohol',
    'Module 2::Myristyl Alcohol':'Module 11::Myristyl Alcohol',
    'Module 2::Lauryl Alcohol':'Module 11::Lauryl Alcohol',
    'Module 2::Isostearyl Alcohol':'Module 11::Isostearyl Alcohol',
    'Module 1::Sodium Laureth Sulfate (SLES)':'Module 1::Sodium Laureth Sulfate (SLES / Sodium Lauryl Ether Sulfate)',
    'Module 1::Sodium Lauryl Ether Sulfate':'Module 1::Sodium Laureth Sulfate (SLES / Sodium Lauryl Ether Sulfate)',
    'Module 8::DMDM Hydantoin (Glydant)':'Module 8::DMDM Hydantoin',
    'Module 7::Ginger':'Module 7::Ginger Oil',
    'Module 7::Oregano':'Module 7::Oregano Oil',
    'Module 7::Sage (Salvia officinalis)':'Module 7::Sage Oil (Salvia officinalis)',
    'Module 7::Rosemary':'Module 7::Rosemary Oil',
    'Module 6::Rosemary':'Module 6::Rosemary Extract',
    'Module 6::Chamomile':'Module 6::Chamomile Extract',
    'Module 2::Behentrimonium Methosulfate (BTMS)':'Module 2::Behentrimonium Methosulfate',
    'Module 2::Ethylene Glycol Monostearate (EGMS)':'Module 2::Ethylene Glycol Monostearate (EGMS / Glycol Stearate)',
    'Module 6::Euterpe Oleracea (Acai) Extract':'Module 6::Euterpe Oleracea (Açaí) Fruit Extract',
    'Module 6::Origanum Vulgare (Oregano) Extract':'Module 6::Origanum Vulgare (Oregano) Leaf Extract',
    'Module 6::Musa Sapientum (Banana) Extract':'Module 6::Musa Sapientum (Banana) Fruit Extract',
    'Module 6::Morinda Citrifolia (Noni) Extract':'Module 6::Morinda Citrifolia (Noni) Fruit Extract',
    'Module 6::Arctium Lappa (Burdock) Extract':'Module 6::Arctium Lappa (Burdock) Root Extract'
  };
  function migratePickKey(k){ return PICK_MIGRATIONS[k]||k; }
  // Rewrites a saved picks object onto current canonical keys.
  function migratePicks(picks){
    const out={}; let changed=0;
    Object.keys(picks||{}).forEach(k=>{ if(!picks[k]) return; const n=migratePickKey(k); if(n!==k) changed++; out[n]=true; });
    return {picks:out,changed};
  }
  const RELEV={ 'Module 1':1.5,'Module 2':1.0,'Module 3':0.8,'Module 4':1.0,'Module 5':1.2,'Module 6':1.0,'Module 7':1.5,'Module 8':2.0,'Module 9':1.3,'Module 10':0.8,'Module 11':1.0,'Module 12':2.0,'Module 13':1.0 };
  const GPT={'A+':95,A:90,B:75,C:65,D:50,E:30};
  function gscore(g){
    if(g==null) return 60;
    let s=String(g).replace(/[‡†*\s]/g,'').toUpperCase();   // strip audit marks
    if(GPT[s]!=null) return GPT[s];
    if(s.indexOf('/')>-1){                                  // split grade e.g. 'A/B' -> mean
      const parts=s.split('/').map(p=>GPT[p]).filter(v=>v!=null);
      if(parts.length) return parts.reduce((a,b)=>a+b,0)/parts.length;
    }
    const m=s.match(/^(A\+|[A-E])/);                        // leading letter e.g. 'D‡‡'
    return m?GPT[m[1]]:60;
  }
  function gradeColor(g){ return {A:'#2E8B57',B:'#A87708',C:'#B85C1E',D:'#C8102E',E:'#8E0B1F','—':'#A8A39B'}[g]||'#A8A39B'; }

  let _data=null;
  function data(){ if(!_data) _data=buildData(); return _data; }

  // computeOPMSS(picks, ptype, edits) — picks: {tag::name: true}, edits: {tag::name: 'A'} (master overrides)
  function computeOPMSS(picks, ptype, edits){
    edits=edits||{}; picks=picks||{};
    const d=data();
    const chosen=[];
    // Migrate stale keys first so renamed ingredients keep scoring, then detect true orphans.
    const mig=migratePicks(picks);
    const live=mig.picks;
    const seen={};
    d.forEach(M=>M.rows.forEach(r=>{ const k=M.tag+'::'+r.name;
      if(live[k]){ seen[k]=1; chosen.push({tag:M.tag,modName:M.name,name:r.name,grade:edits[k]||edits[M.tag+'::'+r.name]||r.listed,vals:r.vals||{}}); } }));
    // Any pick that matches no current row is a dead reference — report it, never drop it silently.
    const unresolved=Object.keys(live).filter(k=>!seen[k]);
    if(!chosen.length) return {has:false, unresolved, migrated:mig.changed};
    const byMod={};
    chosen.forEach(c=>{ (byMod[c.tag]=byMod[c.tag]||[]).push(c); });
    // Relevance Weight = Mass Factor x Microbiome-Risk Multiplier x Product-Type Factor (SOP §C.6.3).
    // Mass Factor proxy: share of declared ingredients mapped to the module (concentrations not supplied by picks).
    const nAll=chosen.length;
    const modScores=Object.keys(byMod).map(tag=>{
      const items=byMod[tag];
      const avg=items.reduce((s,i)=>s+gscore(i.grade),0)/items.length;
      const mass=items.length/nAll;
      const risk=RELEV[tag]||1;
      const pt=ptf(tag,ptype);
      const w=INDIRECT[tag]?0:(mass*risk*pt);   // indirect modules carry no standalone weight
      return {tag,modName:items[0].modName,avg,w,mass,risk,pt,indirect:!!INDIRECT[tag],items};
    });
    // Indirect support modules (15 Chelators, 17 Thickeners) adjust Module 8's contribution.
    const m8=modScores.find(m=>m.tag==='Module 8');
    let supportAdj=0;
    modScores.filter(m=>m.indirect).forEach(m=>{ supportAdj += (m.avg-70)/100; });
    if(m8 && supportAdj) m8.avg=Math.max(0,Math.min(100,m8.avg+supportAdj*5));
    const active=modScores.filter(m=>m.w>0);
    const totalW=active.reduce((s,m)=>s+m.w,0);
    const raw=totalW? active.reduce((s,m)=>s+m.avg*m.w,0)/totalW : 60;
    const bandOf=(s)=> s>=90?'A+':s>=80?'A':s>=70?'B':s>=60?'C':s>=50?'D':'E';
    let grade=bandOf(raw);
    const triggers=chosen.filter(c=>c.grade==='D'||c.grade==='E').map(c=>c.modName+' — '+c.name+' (Grade '+c.grade+')');
    if(triggers.length){ const order=['A+','A','B','C','D','E']; if(order.indexOf(grade)<order.indexOf('D')) grade='D'; }
    const bestIn=tag=>byMod[tag]?byMod[tag].reduce((b,i)=>gscore(i.grade)>gscore(b.grade)?i:b):null;
    const leaveOn = ptype==='Leave-in Serum' || ptype==='Hair Moisturizer';
    const ind=[]; const add=(name,ok,basis)=>ind.push({name,ok,basis});
    { const m4=bestIn('Module 4'); add('Barrier Support', !!m4 && gscore(m4.grade)>=75, m4?(m4.name+' Grade '+m4.grade):'no Module 4 ingredient present'); }
    { const afOK=i=>gscore((i.vals&&i.vals.AF)||'')>=70;
      const pool=(byMod['Module 12']||[]).concat(byMod['Module 7']||[]);
      const m12=pool.filter(afOK).sort((a,b)=>gscore(b.vals.AF)-gscore(a.vals.AF))[0];
      add('Anti-fungal / Anti-dandruff', !!m12, m12?(m12.name+' — AF '+m12.vals.AF+' (SHIMD '+m12.grade+') — Regulatory/QA check required'):'no active with AF ≥ B present'); }
    { const aeOK=i=>gscore((i.vals&&i.vals.AE)||'')>=70;
      const kOK=i=>gscore((i.vals&&i.vals.KE)||'')>=70;
      const pool=(byMod['Module 12']||[]).filter(aeOK).concat((byMod['Module 13']||[]).filter(kOK));
      const best=pool.sort((a,b)=>gscore((b.vals.AE||b.vals.KE))-gscore((a.vals.AE||a.vals.KE)))[0];
      add('Antiseborrhoeic / Keratinisation-normalising', !!best,
        best?(best.name+' — '+(best.vals.AE?('AE '+best.vals.AE):('KE '+best.vals.KE))+' (SHIMD '+best.grade+') — scaling/turnover mechanism, distinct from antifungal'):'no active with AE or KE ≥ B present'); }
    { const m5=bestIn('Module 5'); add('Hair Growth Support', !!m5 && gscore(m5.grade)>=75 && leaveOn, m5?(leaveOn?(m5.name+' Grade '+m5.grade):(m5.name+' present but product is rinse-off — contact-time condition not met')):'no Module 5 active present'); }
    { const m6=bestIn('Module 6'); add('Soothing / Anti-inflammatory', !!m6 && gscore(m6.grade)>=75, m6?(m6.name+' Grade '+m6.grade):'no qualifying Module 6 botanical present'); }
    { const m3=bestIn('Module 3'); add('Hydration / Moisture', !!m3 && gscore(m3.grade)>=75, m3?(m3.name+' Grade '+m3.grade):'no Module 3 humectant present'); }
    { const m2=bestIn('Module 2'); add('Deep Conditioning / Repair', !!m2 && gscore(m2.grade)>=75, m2?(m2.name+' Grade '+m2.grade):'no Module 2 conditioning agent present'); }
    { const m1=byMod['Module 1']&&byMod['Module 1'].find(i=>gscore(i.grade)>=75); add('Sebum Regulation', !!m1, m1?(m1.name+' Grade '+m1.grade):'no qualifying Module 1 surfactant present'); }
    add('Microbiome-Friendly / "Biome-Safe"', grade==='A+'||grade==='A', 'requires OPMSS ≥ A and no mandatory trigger fired — current OPMSS '+grade+(triggers.length?' (capped by trigger)':''));
    return {has:true, grade, raw:Math.round(raw), modScores, triggers, ind, chosenCount:chosen.length,
            unresolved, migrated:mig.changed};
  }

  window.SHIMD = { migratePicks, migratePickKey, data, computeOPMSS, gradeColor, gscore, RELEV };
})();
