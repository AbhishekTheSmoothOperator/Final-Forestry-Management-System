package com.cg.fms.model;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

public class LandModel implements Serializable{
	
	

	private String landId;
	
	@NotEmpty(message="surveyNumber  cannot be empty")
	@NotBlank(message="surveyNumber cannot be omitted")
	private String surveyNumber;
	
	@NotEmpty(message="ownerName  cannot be empty")
	@NotBlank(message="ownerName cannot be omitted")
	private String ownerName;
	
	@NotEmpty(message="landArea  cannot be empty")
	@NotBlank(message="landArea cannot be omitted")
	private String landArea;
	
	public LandModel() {
		/**
		 * no implementation
		 */
	}


	/**
	 * 
	 * @param landId
	 * @param surveyNumber
	 * @param ownerName
	 * @param landArea
	 */
	public LandModel(String landId, String surveyNumber,String ownerName, String landArea) {
		super();
		this.landId = landId;
		this.surveyNumber = surveyNumber;
		this.ownerName = ownerName;
		this.landArea = landArea;
	}



	public String getLandId() {
		return landId;
	}

	public void setLandId(String landId) {
		this.landId = landId;
	}

	public String getSurveyNumber() {
		return surveyNumber;
	}

	public void setSurveyNumber(String surveyNumber) {
		this.surveyNumber = surveyNumber;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getLandArea() {
		return landArea;
	}

	public void setLandArea(String landArea) {
		this.landArea = landArea;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((landArea == null) ? 0 : landArea.hashCode());
		result = prime * result + ((landId == null) ? 0 : landId.hashCode());
		result = prime * result + ((ownerName == null) ? 0 : ownerName.hashCode());
		result = prime * result + ((surveyNumber == null) ? 0 : surveyNumber.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		LandModel other = (LandModel) obj;
		if (landArea == null) {
			if (other.landArea != null)
				return false;
		} else if (!landArea.equals(other.landArea))
			return false;
		if (landId == null) {
			if (other.landId != null)
				return false;
		} else if (!landId.equals(other.landId))
			return false;
		if (ownerName == null) {
			if (other.ownerName != null)
				return false;
		} else if (!ownerName.equals(other.ownerName))
			return false;
		if (surveyNumber == null) {
			if (other.surveyNumber != null)
				return false;
		} else if (!surveyNumber.equals(other.surveyNumber))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "LandModel [landId=" + landId + ", surveyNumber=" + surveyNumber + ", ownerName=" + ownerName
				+ ", landArea=" + landArea + "]";
	}


	
	
	

}