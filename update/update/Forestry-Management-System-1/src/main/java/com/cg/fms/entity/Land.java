package com.cg.fms.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "lands")
public class Land  {

	@Id
	private String landId;

	@Column(name = "survey_number")
	@NotEmpty(message = "survry number  cannot be empty")
	@NotNull(message = "survey number cannot be omitted")
	private String surveyNumber;

	@Column(name = "owner_name")
	@NotEmpty(message = "owner name  cannot be empty")
	@NotNull(message = "owner name cannot be omitted")
	private String ownerName;

	@Column(name = "land_area")
	@NotEmpty(message = "land area  cannot be empty")
	@NotNull(message = "land area cannot be omitted")
	private String landArea;

	public Land() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * 
	 * @param landId
	 * @param surveyNumber
	 * @param ownerName
	 * @param landArea
	 */
	public Land(String landId,
			@NotEmpty(message = "survry number  cannot be empty") @NotNull(message = "survey number cannot be omitted") String surveyNumber,
			@NotEmpty(message = "owner name  cannot be empty") @NotNull(message = "owner name cannot be omitted") String ownerName,
			@NotEmpty(message = "land area  cannot be empty") @NotNull(message = "land area cannot be omitted") String landArea) {
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
		Land other = (Land) obj;
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
		return "Land [landId=" + landId + ", surveyNumber=" + surveyNumber + ", ownerName=" + ownerName + ", landArea="
				+ landArea + "]";
	}

		
	
	
}