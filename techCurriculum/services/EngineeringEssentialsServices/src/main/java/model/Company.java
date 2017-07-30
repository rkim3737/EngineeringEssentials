package model;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * This class will define a company and its attributes
 * Look at resources/data/companyInfo.json
 */
public class Company {

    // TODO - Think back to your modelling session
    // Define the attributes of a Company based on the
    // provided data in resources/data
    @JsonProperty
    private String symbol;
    @JsonProperty
    private String name;
    @JsonProperty
    private String headquarterCity;
    @JsonProperty
    private String headQuarterStateOrCountry;
    @JsonProperty
    private int numOfEmployees;
    @JsonProperty
    private String sector;
    @JsonProperty
    private String ind;

    // TODO - add getter and setter methods for your attributes
    public String getSymbol(){ return symbol; }
//    public String


}