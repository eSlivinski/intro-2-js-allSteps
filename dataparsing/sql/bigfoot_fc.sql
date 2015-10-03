SELECT row_to_json(fc)
 FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features
 FROM (SELECT 'Feature' As type
    , json_build_object('type', 'Point', 'coordinates', '['||LNG||','||LAT||']') As geometry
    , row_to_json((SELECT l FROM (SELECT REPORTDESC as description, REPORTdate as date) As l
      )) As properties
   FROM BIGFOOTPOINTs
   As lg
   WHERE reportdate::date > '12-31-2005'
   ) As f )  As fc;
