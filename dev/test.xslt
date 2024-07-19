<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:io="http://realmode.io"
	exclude-result-prefixes="io"
>

	<xsl:output method="html"
		encoding="utf-8"
		indent="yes"
		doctype-system="about:legacy-compat"
	/>

	<xsl:template match="@* | node()">

		<xsl:copy>

			<xsl:apply-templates select="@* | node()"/>

		</xsl:copy>

	</xsl:template><xsl:template match="/*">

		<xsl:apply-templates select="node()"/>

	</xsl:template><xsl:template match="io:*">

		<xsl:element name="{local-name()}">

			<xsl:copy-of select="@*"/>

			<xsl:apply-templates/>

		</xsl:element>

	</xsl:template>

</xsl:stylesheet>
