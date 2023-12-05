import { Grid,Typography, TextField  } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';

const NumberArea = ({ number, setNumber }) => {
  const code =[
    {label:'🇦🇱 ALB', value: '+355'},
    {label:'🇩🇿 DZA', value: '+213'},
    {label:'🇩🇪 DEU', value: '+49'},
    {label:'🇦🇩 AND', value: '+376'},
    {label:'🇦🇴 AGO', value: '+244'},
    {label:'🇦🇬 ATG', value: '+1268'},
    {label: '🇦🇷 ARG', value: '+54'},
    {label: '🇦🇲 ARM', value: '+374'},
    {label: '🇦🇼 ABW', value: '+297'},
    {label: '🇦🇺 AUS', value: '+61'},
    {label: '🇦🇹 AUT', value: '+43'},
    {label: '🇦🇿 AZE', value: '+994'},
    {label: '🇧🇸 BHS', value: '+1242'},    
    {label: '🇧🇭 BHR', value: '+973'},
    {label: '🇧🇩 BGD', value: '+880'},
    {label: '🇧🇧 BRB', value: '+1246'},
    {label: '🇧🇾 BLR', value: '+375'},
    {label: '🇧🇪 BEL', value: '+32'},
    {label: '🇧🇿 BLZ', value: '+501'},
    {label: '🇧🇯 BEN', value: '+229'},
    {label: '🇧🇲 BMU', value: '+1441'},
    {label: '🇧🇹 BTN', value: '+975'},
    {label: '🇧🇴 BOL', value: '+591'},
    {label: '🇧🇦 BIH', value: '+387'},
    {label: '🇧🇷 BRA', value: '+55'},
    {label: '🇧🇳 BRN', value: '+673'},    
    {label: '🇧🇬 BGR', value: '+359'},
    {label: '🇧🇫 BFA', value: '+226'},
    {label: '🇧🇮 BDI', value: '+257'},
    {label: '🇰🇭 KHM', value: '+855'},
    {label: '🇨🇲 CMR', value: '+237'},
    {label: '🇨🇦 CAN', value: '+1'},
    {label: '🇨🇻 CPV', value: '+238'},
    {label: '🇰🇾 CYM', value: '+1345'},
    {label: '🇨🇫 CAF', value: '+236'},
    {label: '🇹🇩 TCD', value: '+235'},
    {label: '🇨🇱 CHL', value: '+56'},
    {label: '🇨🇳 CHN', value: '+86'},
    {label: '🇨🇴 COL', value: '+57'},  
    {label: '🇰🇲 COM', value: '+269'},
    {label: '🇨🇬 COG', value: '+242'},
    {label: '🇨🇩 COD', value: '+243'},
    {label: '🇨🇷 CRI', value: '+506'},
    {label: '🇨🇮 CIV', value: '+225'},
    {label: '🇭🇷 HRV', value: '+385'},
    {label: '🇨🇺 CUB', value: '+53'},
    {label: '🇨🇾 CYP', value: '+357'},
    {label: '🇨🇿 CZE', value: '+420'},
    {label: '🇩🇰 DNK', value: '+45'},
    {label: '🇩🇯 DJI', value: '+253'},
    {label: '🇩🇲 DMA', value: '+1767'},
    {label: '🇩🇴 DOM', value: '+1849'},
    {label: '🇪🇨 ECU', value: '+593'},
    {label: '🇪🇬 EGY', value: '+20'},
    {label: '🇸🇻 SLV', value: '+503'},
    {label: '🇬🇶 GNQ', value: '+240'},
    {label: '🇪🇷 ERI', value: '+291'},
    {label: '🇪🇪 EST', value: '+372'},
    {label: '🇺🇸 USA', value: '+1'},
    {label: '🇪🇹 ETH', value: '+251'},
    {label: '🇫🇮 FIN', value: '+358'},
    {label: '🇫🇷 FRA', value: '+33'},
    {label: '🇬🇦 GAB', value: '+241'},
    {label: '🇬🇲 GMB', value: '+220'},
    {label: '🇬🇪 GEO', value: '+995'},
    {label: '🇬🇭 GHA', value: '+233'},
    {label: '🇬🇮 GIB', value: '+350'},
    {label: '🇬🇩 GRD', value: '+1473'},
    {label: '🇬🇷 GRC', value: '+30'},
    {label: '🇬🇱 GRL', value: '+299'},
    {label: '🇬🇹 GTM', value: '+502'},
    {label: '🇬🇳 GIN', value: '+224'},
    {label: '🇬🇼 GNB', value: '+245'},
    {label: '🇬🇾 GUY', value: '+592'},
    {label: '🇭🇹 HTI', value: '+509'},
    {label: '🇭🇳 HND', value: '+504'},
    {label: '🇭🇰 HKG', value: '+852'},
    {label: '🇭🇺 HUN', value: '+36'},
    {label: '🇮🇸 ISL', value: '+354'},
    {label: '🇮🇳 IND', value: '+91'},
    {label: '🇮🇩 IDN', value: '+62'},
    {label: '🇮🇷 IRN', value: '+98'},
    {label: '🇮🇶 IRQ', value: '+964'},
    {label: '🇮🇪 IRL', value: '+353'},
    {label: '🇮🇱 ISR', value: '+972'},
    {label: '🇮🇹 ITA', value: '+39'},
    {label: '🇯🇲 JAM', value: '+1876'},
    {label: '🇯🇵 JPN', value: '+81'},
    {label: '🇯🇴 JOR', value: '+962'},
    {label: '🇰🇿 KAZ', value: '+7'},
    {label: '🇰🇪 KEN', value: '+254'},
    {label: '🇰🇮 KIR', value: '+686'},
    {label: '🇰🇼 KWT', value: '+965'},
    {label: '🇰🇬 KGZ', value: '+996'},
    {label: '🇱🇦 LAO', value: '+856'},
    {label: '🇱🇻 LVA', value: '+371'},
    {label: '🇱🇧 LBN', value: '+961'},
    {label: '🇱🇸 LSO', value: '+266'},
    {label: '🇱🇷 LBR', value: '+231'},
    {label: '🇱🇾 LBY', value: '+218'},
    {label: '🇱🇮 LIE', value: '+423'},
    {label: '🇱🇹 LTU', value: '+370'},
    {label: '🇱🇺 LUX', value: '+352'},
    {label: '🇲🇴 MAC', value: '+853'},
    {label: '🇲🇰 MKD', value: '+389'},
    {label: '🇲🇬 MDG', value: '+261'},
    {label: '🇲🇼 MWI', value: '+265'},
    {label: '🇲🇾 MYS', value: '+60'},
    {label: '🇲🇻 MDV', value: '+960'},
    {label: '🇲🇱 MLI', value: '+223'},
    {label: '🇲🇹 MLT', value: '+356'},
    {label: '🇲🇷 MRT', value: '+222'},
    {label: '🇲🇺 MUS', value: '+230'},
    {label: '🇲🇽 MEX', value: '+52'},
    {label: '🇲🇩 MDA', value: '+373'},
    {label: '🇲🇨 MCO', value: '+377'},
    {label: '🇲🇳 MNG', value: '+976'},
    {label: '🇲🇪 MNE', value: '+382'},
    {label: '🇲🇸 MSR', value: '+1664'},
    {label: '🇲🇿 MOZ', value: '+258'},
    {label: '🇲🇲 MMR', value: '+95'},
    {label: '🇳🇦 NAM', value: '+264'},
    {label: '🇳🇵 NPL', value: '+977'},
    {label: '🇳🇱 NLD', value: '+31'},
    {label: '🇳🇨 NCL', value: '+687'},
    {label: '🇳🇿 NZL', value: '+64'},
    {label: '🇳🇮 NIC', value: '+505'},
    {label: '🇳🇪 NER', value: '+227'},
    {label: '🇳🇬 NGA', value: '+234'},
    {label: '🇳🇴 NOR', value: '+47'},
    {label: '🇴🇲 OMN', value: '+968'},
    {label: '🇵🇰 PAK', value: '+92'},
    {label: '🇵🇸 PSE', value: '+970'},
    {label: '🇵🇦 PAN', value: '+507'},
    {label: '🇵🇾 PRY', value: '+595'},
    {label: '🇵🇪 PER', value: '+51'},
    {label: '🇵🇭 PHL', value: '+63'},
    {label: '🇵🇱 POL', value: '+48'},  
    {label: '🇵🇹 PRT', value: '+351'},
    {label: '🇵🇷 PRI', value: '+1'},
    {label: '🇶🇦 QAT', value: '+974'},
    {label: '🇷🇴 ROU', value: '+40'},
    {label: '🇷🇺 RUS', value: '+7'},
    {label: '🇷🇼 RWA', value: '+250'},
    {label: '🇰🇳 KNA', value: '+1869'},
    {label: '🇱🇨 LCA', value: '+1758'},
    {label: '🇻🇨 VCT', value: '+1784'},
    {label: '🇼🇸 WSM', value: '+685'},
    {label: '🇸🇲 SMR', value: '+378'},
    {label: '🇸🇹 STP', value: '+239'},
    {label: '🇸🇦 SAU', value: '+966'},
    {label: '🇸🇳 SEN', value: '+221'},
    {label: '🇷🇸 SRB', value: '+381'},
    {label: '🇸🇨 SYC', value: '+248'},
    {label: '🇸🇱 SLE', value: '+232'},
    {label: '🇸🇬 SGP', value: '+65'},
    {label: '🇸🇰 SVK', value: '+421'},
    {label: '🇸🇮 SVN', value: '+386'},
    {label: '🇸🇧 SLB', value: '+677'},
    {label: '🇸🇴 SOM', value: '+252'},
    {label: '🇿🇦 ZAF', value: '+27'},
    {label: '🇰🇷 KOR', value: '+82'},
    {label: '🇸🇸 SSD', value: '+211'},
    {label: '🇪🇸 ESP', value: '+34'},
    {label: '🇱🇰 LKA', value: '+94'},
    {label: '🇸🇩 SDN', value: '+249'},
    {label: '🇸🇷 SUR', value: '+597'},
    {label: '🇸🇪 SWE', value: '+46'},
    {label: '🇨🇭 CHE', value: '+41'},
    {label: '🇸🇾 SYR', value: '+963'},
    {label: '🇹🇼 TWN', value: '+886'},  
    {label: '🇹🇯 TJK', value: '+992'},
    {label: '🇹🇿 TZA', value: '+255'},
    {label: '🇹🇭 THA', value: '+66'},
    {label: '🇹🇬 TGO', value: '+228'},
    {label: '🇹🇴 TON', value: '+676'},
    {label: '🇹🇹 TTO', value: '+1868'},
    {label: '🇹🇳 TUN', value: '+216'},
    {label: '🇹🇷 TUR', value: '+90'},
    {label: '🇹🇲 TKM', value: '+993'},
    {label: '🇹🇨 TCA', value: '+1649'},
    {label: '🇺🇬 UGA', value: '+256'},
    {label: '🇺🇦 UKR', value: '+380'},
    {label: '🇦🇪 ARE', value: '+971'},
    {label: '🇬🇧 GBR', value: '+44'},
    {label: '🇺🇾 URY', value: '+598'},
    {label: '🇺🇿 UZB', value: '+998'},
    {label: '🇻🇺 VUT', value: '+678'},
    {label: '🇻🇪 VEN', value: '+58'},
    {label: '🇻🇳 VNM', value: '+84'},
    {label: '🇾🇪 YEM', value: '+967'},
    {label: '🇿🇲 ZMB', value: '+260'},
    {label: '🇿🇼 ZWE', value: '+263'},
  ]
return(
    <div style={{  flexDirection: 'column', marginBottom: '8px' }}>
      <div style={{ marginBottom: '16px' }}>
        <Typography>
          Ingrese el número de teléfono
        </Typography>
      </div>
      <Grid container spacing={2} alignItems="center" display="flex" >
        <Grid item>
          <Select
            labelId="country-label"
            id="country-select"
            label="País"
            onChange={(e) => {
              setNumber(e.target.value)
            }}
          >
            {code.map((country) => (
              <MenuItem key={country.value} value={country.value}>
                {country.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item>
          <TextField
            required
            id="outlined-required"
            label="Ingrese número"
            value={number}
            onChange={(e) => {
              setNumber( e.target.value)
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

NumberArea.propTypes = {
    number: PropTypes.string.isRequired,
    setNumber: PropTypes.func.isRequired
};
export default NumberArea;
/*
 <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div>
                <Typography>
                    Ingrese el número de teléfono
                </Typography>
              </div>
              <div style={{flexDirection:'row'}}>
                  <div>
                    <InputLabel id="country-label">País</InputLabel>
                    <Select
                      labelId="country-label"
                      id="country-select"
                      label="País"
                      onChange={() => {}}
                    >
                    {code.map((country) => (
                      <MenuItem key={country.value} value={country.value}>
                        {country.label}
                      </MenuItem>
                    ))}
                    </Select>
                  </div>
                  <div>
                      <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue={number}
                        helperText="Ingrese el número de teléfono"
                        onChange={(e) => {
                          setNumber(e.target.value)
                        }}
                />
                  </div>
                
              </div>
                
            </div> */