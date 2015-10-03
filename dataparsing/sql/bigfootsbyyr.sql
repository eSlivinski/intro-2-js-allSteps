SELECT row_to_json(fc), yr
 FROM (
 SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features, yr
 FROM (
 SELECT 'Feature' As type
    , json_build_object('type', 'Point', 'coordinates', geom) As geometry
    , row_to_json((SELECT prop FROM (SELECT desctiption as description, date as date, report_yr as year) As prop
      )) As properties
    ,report_yr As yr
   FROM view_BIGfeets
   As lg

   ) As f
   Group By yr
   )
   As fc;
