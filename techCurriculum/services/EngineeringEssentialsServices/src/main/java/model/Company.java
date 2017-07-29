package model;
/**
 * Copyright 2017 Goldman Sachs.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


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